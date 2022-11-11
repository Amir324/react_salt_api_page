import styled from "styled-components";

export const Box = styled.div`
  margin-top: ${props => props.mt ?? 0};
  margin-left: ${props => props.ml ?? 0};
  margin-right: ${props => props.mr ?? 0};
  margin-bottom: ${props => props.mb ?? 0};
`

export const Divider = styled.div`border-bottom: 1px solid lightgrey;
  margin-top: 10px`


export const BaseBadge = styled.span`height: 10px;
  width: 80px;
  height: 20px;
  font-size: 10px;
  font-weight: 800;
  
  display: grid;
  place-items: center;
`

export const Masked = styled(BaseBadge)`
  border: ${props => "1px solid " + props.theme.primary};
  color: ${props => props.present ? "white" : props.theme.primary};
  background-color: ${props => props.present ? props.theme.primary: "white" };
`

export const Pii = styled(BaseBadge)`
  border: ${props => "1px solid " + props.theme.tertiary};
  color: ${props => props.present ? "white" : props.theme.tertiary};
  background-color: ${props => props.present ? props.theme.tertiary: "white" };
`

export const Type = styled(BaseBadge)`
  color: ${props => props.theme.quaternaryText};
  background-color: ${props => props.theme.quaternary};
  text-transform: uppercase;

`

export const Tab = styled.div`
  padding: 10px 20px;
  border-bottom: 4px solid;
  border-color: ${props => props.active ? "violet" : "transparent"  };
`
