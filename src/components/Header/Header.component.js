import React from "react";
import styled from "styled-components";
import {BoxShadow, Divider, Row} from "../common";

const Wrapper = styled(BoxShadow)`
  padding-left: 20px;
  padding-top: 30px;
`;

const Method = styled.span`
  font-size: 20px;
  color: ${(props) => props.theme.secondary};
  text-transform: uppercase;
  padding-left: 20px;
`;

const Path = styled.span`
  font-size: 30px;
  font-weight: 800;
  color: ${(props) => props.theme.primary};
  margin-left: 15px;
`;

const Breadcrumbs = styled.span`
  font-size: 18px;
  font-weight: 899;
  color: ${(props) => props.theme.primary};
  padding-left: 20px;
`;

const HeaderComponent = ({ children, method, path, api }) => {
  return (
    <Wrapper>
      <Row pl={"20px"}>
        <Method>{method}</Method>
        <Path>{path}</Path>
      </Row>
      <Row mt={"20px"} mb={"20px"}>
        <Breadcrumbs>
          All APIs > {api} > {path}
        </Breadcrumbs>
      </Row>
      <Divider />
      {children}
    </Wrapper>
  );
};

export default HeaderComponent;
