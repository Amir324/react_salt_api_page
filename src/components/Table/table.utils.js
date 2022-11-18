import {COLUMNS} from "./tableColumns.constant";
import React from "react";
import {Grid} from "../common";


export function tableFactory(data, onClick) {
    return (
        <>
            {data.map((rowData, index) => {
                return (
                    <Grid key={index}>
                        {Object.keys(rowData).map((columnKey, index) =>
                            getCellRenderer(columnKey)(
                                rowData[columnKey],
                                index,
                                onClick,
                                rowData
                            )
                        )}
                    </Grid>
                );
            })}
        </>
    );
}


function getCellRenderer(name) {
    return COLUMNS.find((c) => c.dataKey === name).cellRenderer;
}