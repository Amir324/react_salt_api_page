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
  cursor: pointer;
`

export const Pii = styled(BaseBadge)`
  border: ${props => "1px solid " + props.theme.tertiary};
  color: ${props => props.present ? "white" : props.theme.tertiary};
  background-color: ${props => props.present ? props.theme.tertiary: "white" };
  cursor: pointer;
`

export const Type = styled(BaseBadge)`
  color: ${props => props.theme.quaternaryText};
  background-color: ${props => props.theme.quaternary};
  text-transform: uppercase;

`

export const Tab = styled.div`
  padding: 10px 30px;
  border-bottom: 4px solid;
  font-weight: 800;
  color: ${(props) => props.theme.primary} ;
  border-color: ${props => props.active ? props.theme.primary : "transparent"  };
  cursor: pointer;
`

export const Row = styled(Box)`
  display: flex;
  align-items: center;
`;

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

export const VerticalDivider = styled.hr`
  flex-shrink: 0;
  border-width: 0px thin 0px 0px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.12);
  height: auto;
  align-self: stretch;
  margin: 8px 0px;
`;

export const LinkButton = styled.a`
  all: unset;
  color: ${(props) => props.theme.primary};
  cursor: pointer;
`