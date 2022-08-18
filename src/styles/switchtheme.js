import styled from "@emotion/styled";
import { Slider, Box } from "@mui/material";



export const ThemeSliderBackground = styled(Box)`
    display: flex;
    align-items: center;
    background-color: hsl(223, 31%, 20%);
    padding: 12px 15px;
    width: 70px;
    height: 10px;
    border-radius: 20px;
`
export const LabelSlider = styled.ul`
    display: flex;
    list-style: none;
    justify-content: space-around;
    font-size: 12px;
    color: white;
    margin-bottom: 5px;
`

export const ThemeSlider = styled(Slider)`
    background-color: hsl(223, 31%, 20%);

    .MuiSlider-rail, .MuiSlider-track{
        display: none;
    }

    &.MuiSlider-root{
        background-color: transparent;
        display: block;
        color: hsl(6, 63%, 50%);
    }

    .MuiSlider-thumb{
        width: 15px;
        height: 15px;

        &:hover, :focus, &.Mui-active, &.Mui-focusVisible{
            box-shadow: none;
        }
    }
`