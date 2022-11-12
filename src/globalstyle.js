import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${props => props.theme.background};
  }
  
  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
`

export const theme = {
    primary: "#6a1c9a",
    secondary: "#ca90d5",
    tertiary: "#122a6d",
    background: "#f0f0f0",
    quaternary: "#cee5ec",
    quaternaryText: "#4a9fbb",
    primaryText: "#777778",
};