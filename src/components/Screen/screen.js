import styled from "styled-components";
import { Box } from "@mui/system";


export const ScreenContainer = styled(Box)`
    display: flex;
    padding: 10px;
    width: 100%;
    height: 30vh;
    font-size: 32px;
    flex-wrap: wrap;
`


export const OperandValue = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: end;
    width: 700%;
    height: 33%;

    font-size: ${({ previous, current }) => {
        if(previous)
            return '24px'
        if(current)
            return '32px'
    }};
`