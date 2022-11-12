import React from "react";
import {Box, Button, Input, LinkButton, Row, VerticalDivider} from "./common";
import { FaSearch } from "react-icons/fa";
import {BoxShadow} from "./Table.component";



const SearchBarComponent = ({search, filter, onSearch, onFilter, onApply, onReset}) => {

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
