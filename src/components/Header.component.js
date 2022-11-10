import React from 'react';
import styled from "styled-components";
import {Box} from "./common";


const Wrapper = styled.div`
  padding-left: 20px;
  padding-top: 30px;
  background-color: white;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
`

const Method = styled.span`font-size: 20px;
  color: violet`

const Path = styled.span`font-size: 25px;
  font-weight: 800;
  color: violet;
  margin-left: 15px;
`
const Divider = styled.div`border-bottom: 1px solid lightgrey; margin-top: 10px`

const Breadcrumbs = styled.span`font-size: 15px; color: violet`

const Tab = styled.div`
  padding: 10px 20px;
  border-bottom: 4px solid;
  border-color: ${props => props.active ? "violet" : "transparent"  };
`



const HeaderComponent = () => {
    return (
        <Wrapper>
            <Row>
                <Method>GET</Method>
                <Path>/V1/balance/history</Path>
            </Row>
            <Row>
                <Breadcrumbs>All Apis > mobile-api.dnssf.com > V1/balance/history</Breadcrumbs>
            </Row>
            <Divider/>
            <Box mt={"30px"}>
                <Row>
                <Tab active={true}>Request</Tab>
                <Tab>Response</Tab>
                </Row>
            </Box>
        </Wrapper>
    );
};

export default HeaderComponent;