import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }
    body{
        background-color: hsl(222, 26%, 31%);
        font-family: 'League Spartan', sans-serif;
        padding: 15px;
    }
`