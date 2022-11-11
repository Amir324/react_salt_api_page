import React from 'react';
import styled from "styled-components";
import {Box, Divider} from "./common";


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


const Breadcrumbs = styled.span`font-size: 15px; color: violet`




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
        </Wrapper>
    );
};

export default HeaderComponent;