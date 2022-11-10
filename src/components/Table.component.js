import React, {useState} from "react";
import { Box } from "./common";
import styled from "styled-components";
import dataJson from "../fe_data.json"

console.log(dataJson)

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px 200px 1fr;
  grid-template-rows: auto;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  background-color: white;
  height: 70px;
  margin-top: 10px;
  align-items: center;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px 200px 1fr;
  grid-template-rows: auto;
`;

const GridInternal = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px 200px 1fr;
  grid-template-rows: auto;
`

const BoxShadow = styled(Box)`
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  background-color: white;
  padding: 20px;
`

const BoxCollapse = styled(Box)`
  overflow: hidden;
  transition: .5s ease-in-out;
  max-height : ${props => props.in ? "1000px" : "0px" }; //transition does not work with auto
`



const columns = [
  {
    key: 1,
    name: "name",
    dataKey: "name",
    cellRenderer: (data) => {
      return <span>{data}</span>
    },
  },
  {
    key: 2,
    name: "pii",
    dataKey: "pii",
    cellRenderer: (data) => {
      return <span>{data.toString()}</span>
    },
  },
  {
    key: 3,
    name: "masked",
    dataKey: "masked",
    cellRenderer: (data) => {
      return <span>{data.toString()}</span>
    },
  },
  {
    key: 4,
    name: "type",
    dataKey: "type",
    cellRenderer: (data) => {
      return <span>{data}</span>
    },
  },
];

const TableComponent = () => {



  return (
      <>
      <Header>
        {columns.map(c => <div>{c.name}</div>)}
      </Header>
        <BoxShadow>
          <CollapseSection title={"URL parameters"} data={dataJson.request.urlParams}/>
          <CollapseSection title={"Query parameters"} data={dataJson.request.queryParams}/>
          <CollapseSection title={"Headers parameters"} data={dataJson.request.headers}/>
          <CollapseSection title={"Body parameters"} data={dataJson.request.body}/>
        </BoxShadow>
      </>
  );
};

export default TableComponent;



function subTable(data){

  return <>
    {data.map((rowData) => {
      // console.log({d: rowData})
      // console.log(Object.keys(rowData))
      return <Grid>{Object.keys(rowData).map((columnKey => getCellRenderer(columnKey)(rowData[columnKey])))}</Grid>
    })}
  </>
}


function getCellRenderer(name){
  console.log({name})
  return columns.find(c => c.dataKey === name).cellRenderer
}

function CollapseSection({data, title}){
  const [open, setOpen] = useState(true)

  const onClickHandler = () => {
    setOpen(!open)
  }

  return <><span onClick={onClickHandler}>{title}</span>
  <BoxCollapse in={open}>{subTable(data)}</BoxCollapse></>
}
