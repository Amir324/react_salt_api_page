import React, { useState } from "react";
import {Box, Divider, Masked, Pii, Type} from "./common";
import styled, { useTheme } from "styled-components";
import { HiPlay } from "react-icons/hi2";


const BaseGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px 1fr 200px;
  grid-template-rows: auto;
`

const Grid = styled(BaseGrid)`

  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  background-color: white;
  height: 70px;
  margin-top: 10px;
  align-items: center;
`;

const ColumnHeader = styled(BaseGrid)`
  height: 30px;
  background-color: white;
  align-items: center;
  padding: 20px;
`;

export const BoxShadow = styled(Box)`
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  background-color: white;
`;

const BoxCollapse = styled(Box)`
  overflow: hidden;
  padding: 3px;
  transition: 0.4s ease-in-out;
  max-height: ${(props) =>
    props.in ? "1000px" : "0px"};
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
    cellRenderer: (data, index, onClick, rowData) => {
      return <Pii present={data} onClick={() => onClick(data, index, rowData, "pii")}>PII</Pii>;
    },
  },
  {
    key: 3,
    name: "masked",
    dataKey: "masked",
    // cellRenderer: (data) => {
    //     return <Masked present={data}>MASKED</Masked>;
    // },
      cellRenderer: (data, index, onClick, rowData) => {
          return <Masked present={data} onClick={() => onClick(data, index, rowData, "masked")}>MASKED</Masked>;
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

const TableComponent = ({data, onClick}) => {
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
          data={data?.urlParams || []}
          onClick={onClick("urlParams")}
        />
        <CollapseSection
          title={"Query parameters"}
          data={data.queryParams || []}
          onClick={onClick("queryParams")}
        />
        <CollapseSection
          title={"Headers parameters"}
          data={data.headers || []}
          onClick={onClick("headers")}
        />
        <CollapseSection
          title={"Body parameters"}
          data={data.body || []}
          onClick={onClick("body")}
        />
      </BoxShadow>
    </>
  );
};

export default TableComponent;

function subTable(data, onClick) {
  return (
    <>
      {data.map((rowData, index) => {
        return (
          <Grid>
            {Object.keys(rowData).map((columnKey) =>
              getCellRenderer(columnKey)(rowData[columnKey], index, onClick, rowData)
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

function CollapseSection({ data, title, onClick }) {
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
      <BoxCollapse in={open}>{subTable(data, onClick)}</BoxCollapse>
    </Box>
  );
}
