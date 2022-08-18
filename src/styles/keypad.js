import styled from "@emotion/styled";
import { Button, Grid } from "@mui/material";

export const MyButton = styled(Button)`
    background-color: ${({ typeButton }) =>{
        if(typeButton === 'del' || typeButton == 'reset')
            return 'hsl(225, 21%, 49%)'
        else if(typeButton === 'equal')
            return 'hsl(6, 63%, 50%)'

        return 'white'
    }};
    color: ${({ typeButton }) => typeButton ? 'white' : 'hsl(221, 14%, 31%)'};
    width: ${({ typeButton })=>{
        if(typeButton == 'reset' || typeButton == 'equal')
            return '100%'
        return '50px'
    } };
    height: 50px;
    font-family: 'League Spartan', sans-serif;
    font-size: 1.5rem;
`

export const KeypadContainer = styled(Grid)`
    background-color: hsl(223, 31%, 20%);
    max-width: 80%;
    text-align: center;
    padding: 10px;
    border-radius: 15px;
`