import styled from "styled-components";

export const Box = styled.div`
  margin-top: ${props => props.mt ?? 0};
  margin-left: ${props => props.ml ?? 0};
  margin-right: ${props => props.mr ?? 0};
  margin-bottom: ${props => props.mb ?? 0};
`