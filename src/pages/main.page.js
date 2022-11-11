import React, {useState} from 'react';
import HeaderComponent, {Row} from "../components/Header.component";
import {createGlobalStyle, ThemeProvider} from "styled-components";
import SearchBarComponent from "../components/SearchBar.component";
import {Box, Tab} from "../components/common";
import TableComponent from "../components/Table.component";
import dataJson from "../fe_data.json"

const GlobalStyle = createGlobalStyle`
  
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
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

    const [data, setData] = useState(dataJson)
    const [activeTab, setActiveTab] = useState(TabEnum.request)

    const onTabChange = (tab) => {
        setActiveTab(tab)
    }


    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <HeaderComponent/>
            <Box mt={"30px"}>
                <Row>
                    <Tab onClick={() => {onTabChange(TabEnum.request)}} active={activeTab === TabEnum.request}>Request</Tab>
                    <Tab onClick={() => {onTabChange(TabEnum.response)}} active={activeTab === TabEnum.response}>Response</Tab>
                </Row>
            </Box>

            <Box mt={"30px"} mb={"30px"} ml={"15px"} mr={"15px"}>
                <SearchBarComponent/>
            </Box>
            <Box mt={"30px"} mb={"30px"} ml={"15px"} mr={"15px"}>
                <TableComponent/>
            </Box>
            
        </ThemeProvider>
    );
};

export default MainPage;