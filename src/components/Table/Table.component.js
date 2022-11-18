import React from "react";
import {Box, BoxShadow, ColumnHeader, Divider} from "../common";
import styled  from "styled-components";
import {CollapseSection} from "../CollapseSection/Collapse.component";


const ColumnName = styled(Box)`
  color: ${(props) => props.theme.primary};
  text-transform: uppercase;
  font-weight: 800;
  font-size: 12px;
`;

const TableComponent = ({ data, onClick, columns }) => {
  return (
    <>
      <BoxShadow>
        <ColumnHeader>
          {columns.map((c) => (
            <ColumnName key={c?.name}>{c?.name}</ColumnName>
          ))}
        </ColumnHeader>
        <Divider />
        {data?.urlParams && (
          <CollapseSection
            title={"URL parameters"}
            data={data.urlParams}
            onClick={onClick("urlParams")}
          />
        )}
        {data?.queryParams && (
          <CollapseSection
            title={"Query parameters"}
            data={data.queryParams}
            onClick={onClick("queryParams")}
          />
        )}
        {data?.headers && (
          <CollapseSection
            title={"Headers parameters"}
            data={data.headers}
            onClick={onClick("headers")}
          />
        )}
        {data?.body && (
          <CollapseSection
            title={"Body parameters"}
            data={data.body}
            onClick={onClick("body")}
          />
        )}
      </BoxShadow>
    </>
  );
};

export default TableComponent;


