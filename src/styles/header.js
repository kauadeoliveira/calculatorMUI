import styled from "styled-components";
import { Slider, Stack, Box } from "@mui/material";

export const Container = styled(Stack)`
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    
    align-items: flex-end;

    span:nth-child(2){
        font-size: 12px;
        opacity: .9;
        letter-spacing: 1px;
        color: white;
        text-align: end;
        margin-left: 100px;
    }
`