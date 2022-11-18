import {Box, Masked, Pii, Type} from "../common";
import React from "react";



export const COLUMNS = [
    {
        key: 1,
        name: "name",
        dataKey: "name",
        cellRenderer: (data) => {
            return <Box key={data} ml={"20px"}>{data}</Box>;
        },
    },
    {
        key: 2,
        name: "pii",
        dataKey: "pii",
        cellRenderer: (data, index, onClick, rowData) => {
            return (
                <Pii key={index}
                    present={data}
                    onClick={() => onClick(data, index, rowData, "pii")}
                >
                    PII
                </Pii>
            );
        },
    },
    {
        key: 3,
        name: "masked",
        dataKey: "masked",
        cellRenderer: (data, index, onClick, rowData) => {
            return (
                <Masked
                    present={data}
                    onClick={() => onClick(data, index, rowData, "masked")}
                >
                    MASKED
                </Masked>
            );
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

