import React, { useState } from "react";
import {Box, Divider, Masked, Pii, Type} from "./common";
import styled, { useTheme } from "styled-components";
import dataJson from "../fe_data.json";
import { HiPlay } from "react-icons/hi2";

console.log(dataJson);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px 200px 1fr;
  grid-template-rows: auto;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  background-color: white;
  height: 70px;
  margin-top: 10px;
  align-items: center;
`;

const ColumnHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px 200px 1fr;
  grid-template-rows: auto;
  height: 30px;
  background-color: white;
  align-items: center;
  padding: 20px;
`;

const BoxShadow = styled(Box)`
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  background-color: white;
`;

const BoxCollapse = styled(Box)`
  overflow: hidden;
  padding: 3px;
  transition: 0.4s ease-in-out;
  max-height: ${(props) =>
    props.in ? "1000px" : "0px"}; //transition does not work with auto
`;

const ColumnName = styled(Box)`
  color: ${(props) => props.theme.primary};
  text-transform: uppercase;
  font-weight: 800;
  font-size: 15px;
`;

const columns = [
  {
    key: 1,
    name: "name",
    dataKey: "name",
    cellRenderer: (data) => {
      return <Box ml={"20px"}>{data}</Box>;
    },
  },
  {
    key: 2,
    name: "pii",
    dataKey: "pii",
    cellRenderer: (data) => {
      return <Pii present={data}>PII</Pii>;
    },
  },
  {
    key: 3,
    name: "masked",
    dataKey: "masked",
    cellRenderer: (data) => {
        return <Masked present={data}>MASKED</Masked>;
    },
  },
  {
    key: 4,
    name: "type",
    dataKey: "type",
    cellRenderer: (data) => {
      return <Type>{data}</Type>;
    },
  },
];

const TableComponent = ({data, columnsConst}) => {
  return (
    <>
      <BoxShadow>
        <ColumnHeader>
          {columns.map((c) => (
            <ColumnName>{c.name}</ColumnName>
          ))}
        </ColumnHeader>
        <Divider />
        <CollapseSection
          title={"URL parameters"}
          data={dataJson.request.urlParams}
        />
        <CollapseSection
          title={"Query parameters"}
          data={dataJson.request.queryParams}
        />
        <CollapseSection
          title={"Headers parameters"}
          data={dataJson.request.headers}
        />
        <CollapseSection
          title={"Body parameters"}
          data={dataJson.request.body}
        />
      </BoxShadow>
    </>
  );
};

export default TableComponent;

function subTable(data) {
  return (
    <>
      {data.map((rowData) => {
        // console.log({d: rowData})
        // console.log(Object.keys(rowData))
        return (
          <Grid>
            {Object.keys(rowData).map((columnKey) =>
              getCellRenderer(columnKey)(rowData[columnKey])
            )}
          </Grid>
        );
      })}
    </>
  );
}

function getCellRenderer(name) {
  return columns.find((c) => c.dataKey === name).cellRenderer;
}

function CollapseSection({ data, title }) {
  const [open, setOpen] = useState(true);
  const theme = useTheme();

  const onClickHandler = () => {
    setOpen(!open);
  };

  return (
    <Box style={{ padding: "10px 20px" }}>
        <Box style={{display: "flex", alignItems: "center", cursor: "pointer"}}><Box
            style={{
                backgroundColor: theme.background,
                height: "15px",
                width: "15px",
                display: "grid",
                placeItems: "center",
                borderRadius: "10px",
            }}
        >
            <HiPlay
                style={{
                    fontSize: "8px",
                    color: "#6a1c9a",
                    transform: open ? "rotate(90deg)" : "none",
                    transition: "0.2s ease-in-out",
                }}
            />
        </Box>
            <span style={{marginLeft: "10px"}} onClick={onClickHandler}>{title}</span></Box>
      <BoxCollapse in={open}>{subTable(data)}</BoxCollapse>
    </Box>
  );
}
