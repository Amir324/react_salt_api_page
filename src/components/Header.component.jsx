import React from 'react';
import styled from "styled-components";


const Wrapper = styled.div`
  margin-left: 20px;
  margin-top: 30px;
`

const Row = styled.div`
  display: flex;
`

const Method = styled.span`font-size: 20px;
  color: violet`

const Path = styled.span`font-size: 25px;
  font-weight: 800;
  color: violet`

const HeaderComponent = () => {
    return (
        <Wrapper>
            <Row>
                <Method>GET</Method><Path>/V1/balance/history</Path>
            </Row>
            <Row>

            </Row>

        </Wrapper>
    );
};

export default HeaderComponent;