import React, {useEffect, useState} from 'react';
import HeaderComponent, {Row} from "../components/Header.component";
import {createGlobalStyle, ThemeProvider} from "styled-components";
import SearchBarComponent from "../components/SearchBar.component";
import {Box, Tab} from "../components/common";
import TableComponent from "../components/Table.component";
import dataJson from "../fe_data.json"
import debounce from "lodash/debounce"
import {genericFilter, genericSearch} from "../utils";

const GlobalStyle = createGlobalStyle`
  
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${props => props.theme.background};
  }
  
  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
`

const theme = {
    primary: "#6a1c9a",
    secondary: "#ca90d5",
    tertiary: "#122a6d",
    background: "#f0f0f0",
    quaternary: "#cee5ec",
    quaternaryText: "#4a9fbb",
    primaryText: "#777778",
};

const TabEnum = {
    "request": "request",
    "response": "response"
}


const MainPage = () => {

    const [activeTab, setActiveTab] = useState(TabEnum.request)
    const [data, setData] = useState(dataJson[activeTab])
    const [metaData, setMetadata] = useState({})

    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState([]) //[{property: "", isTruthyPicked: bool}]


    useEffect(()=>{
        setData(getResult(search, filter))
    }, [activeTab])

    useEffect(() => {
        setMetadata(getMetadata())
    },[])



    const onTabChange = (tab) => {
        setActiveTab(tab)
    }

    const onSearch = (e) => {
        setSearch(e.target.value)
    }


    const getMetadata = () => {
        return {
            api: dataJson.api,
            path: dataJson.path,
            method: dataJson.method
        }
    }


    const getResult = (search, filter) => {
        const result = {}
        for (const key in dataJson[activeTab]){
            result[key] = dataJson[activeTab][key].filter(d => {
                return genericFilter(d, filter)
            }).filter(d => {
                return genericSearch(d, ["name", "type"], search)
            })
        }
        console.log({result})
        return result
    }

    const onPiiFilter = (e) => {
        setFilter([{property: "pii", isTruthyPicked: e.target.checked}])
    }

    const onApply = () => {
        setData(getResult(search, filter))
    }

    const onReset = () => {
        setFilter([])
        setSearch("")
        setData(getResult("",[]))
    }

    const onBadgeClick = (dataSectionName) => {

        return (value, index, rowData, field) => {
            const result =  getResult(search, filter)
            result[dataSectionName].forEach((item) => {
                if(item.name === rowData.name){
                    item[field] = !item[field]
                }
            })

            setData(result)
        }

    }


    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <HeaderComponent api={metaData?.api} method={metaData?.method} path={metaData?.path}>
                <Box mt={"30px"}>
                    <Row>
                        <Tab onClick={() => {onTabChange(TabEnum.request)}} active={activeTab === TabEnum.request}>Request</Tab>
                        <Tab onClick={() => {onTabChange(TabEnum.response)}} active={activeTab === TabEnum.response}>Response</Tab>
                    </Row>
                </Box>
            </HeaderComponent>


            <Box mt={"30px"} mb={"30px"} ml={"15px"} mr={"15px"}>
                <SearchBarComponent filter={filter} search={search} onSearch={onSearch} onFilter={onPiiFilter} onApply={onApply} onReset={onReset}/>
            </Box>
            <Box mt={"30px"} mb={"30px"} ml={"15px"} mr={"15px"}>
                <TableComponent data={data} onClick={onBadgeClick}/>
            </Box>
            
        </ThemeProvider>
    );
};

export default MainPage;