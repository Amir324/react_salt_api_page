import React from "react";
import { Box } from "./common";
import { Row } from "./Header.component";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import {BoxShadow} from "./Table.component";

export const Input = styled.input`
  height: 40px;
  outline: none;
  border: none;
  flex-grow: 1;
`;

export const Button = styled.button`
  height: 50px;
  min-width: 200px;
  padding: 20px;
  background-color: ${(props) => props.theme.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VerticalDivider = styled.hr`
  flex-shrink: 0;
  border-width: 0px thin 0px 0px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.12);
  height: auto;
  align-self: stretch;
  margin: 8px 0px;
`;

const LinkButton = styled.a`
  all: unset;
  color: ${(props) => props.theme.primary};
  cursor: pointer;
`

const SearchBarComponent = ({search, filter, onSearch, onFilter, onApply, onReset}) => {

    console.log("filter?.[0]?.isTruthyPicked", filter?.[0]?.isTruthyPicked)

  return (

      <Box><BoxShadow><Row style={{background: "white"}}>
          <Box ml={"15px"} mr={"15px"}>
              <FaSearch/>
          </Box>
          <Input type="text" value={search} placeholder={"Search"} onChange={onSearch}/>
          <VerticalDivider/>
          <Box ml={"20px"} mr={"20px"} style={{display: "flex"}}>
              <input id={"checkbox"} type={"checkbox"} checked={filter?.[0]?.isTruthyPicked} onChange={onFilter}/>
              <Box ml={"5px"}><label htmlFor={"checkbox"}>Show PII only</label></Box>
          </Box>
          <Button onClick={onApply}>Apply</Button>
      </Row>
      </BoxShadow>
          <Row mt={"10px"} style={{justifyContent: "flex-end"}}>
              <LinkButton onClick={onReset}>Reset Filter</LinkButton>
          </Row></Box>
  );
};

export default SearchBarComponent;
