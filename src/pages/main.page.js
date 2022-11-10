import React from 'react';
import HeaderComponent from "../components/Header.component";
import {createGlobalStyle, ThemeProvider} from "styled-components";
import SearchBarComponent from "../components/SearchBar.component";
import {Box} from "../components/common";
import TableComponent from "../components/Table.component";

const GlobalStyle = createGlobalStyle`
  
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
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

const theme = {
    primary: "#6a1c9a",
    secondary: "#ca90d5",
    primaryText: "#777778",
    tertiary: "#122a6d",
    background: "#f0f0f0"
};


const MainPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <HeaderComponent/>
            <Box mt={"30px"} mb={"30px"} ml={"15px"} mr={"15px"}>
                <SearchBarComponent/>
            </Box>
            <Box mt={"30px"} mb={"30px"} ml={"15px"} mr={"15px"}>
                <TableComponent/>
            </Box>
            
        </ThemeProvider>
    );
};

export default MainPage;