import { Typography } from "@mui/material";
import { useState } from "react";
import { Container } from "../styles/header";
import ThemeSwitch from "./ThemeSwitch";
import { Stack } from "@mui/material";
import { textAlign } from "@mui/system";


const Header = () => {

    return ( 
        <Container component='header' direction='row'>
            <Typography variant="h4" component='h1'>Calc</Typography>
            <span>THEME</span>
            <ThemeSwitch />
        </Container>
     );
}
 
export default Header;