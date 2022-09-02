import styled from "@emotion/styled";
import { Button, Grid } from "@mui/material";


export const MyButton = styled(Button)`
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    border-radius: ${({ typeKey }) =>{
        switch(typeKey){
            case 'contrast':
                return '50%'
                break;

            case 'border-left':
                return '20px 0px 0px 20px'
                break;

            case 'border-right':
                return '0px 20px 20px 0px'
                break;
        }
    }};

    width: ${({ typeKey }) => typeKey === 'contrast' ? '100px' : '100%'};
    height: ${({ typeKey }) => typeKey == 'contrast' ? '120%' : '100%'};
    z-index:${({ typeKey }) => typeKey === 'contrast' ? '1' : '0'};
    top: ${({ typeKey }) => typeKey === 'contrast' ? '-10px' : '0'};
`


export const KeypadOperators = styled.div`
    width:100%;
    background-color: transparent;
    position: relative;
    top: -10px;
    
    .background-box{
        width: 100%;
        height: 17px;
        display: flex;
        justify-content: space-between;
        .background-left, .background-right{
            width: 47%;
            height: 100%;
        }
    
        .background-left{
            border-radius: 0px 50px 0px 0px;
        }
    
        .background-right{
            border-radius: 50px 0px 0px 0px;
        }

        @media (min-width: 600px){
            .background-left, .background-right{
                width: 49%;
            }
        }
    }

    .operators-container{
        .operators-box{
            display: flex;
            position: relative;
            justify-content: center;
            width: 80%;
            height: 50px;
            margin: 0 auto;
            top: -1px;
            border-radius: 20px;

            @media (min-width: 600px){
                top: -7px
            }
        }
    }

`

export const KeypadNumbers = styled(Grid)`
    width: 100%;
    height: 70vh;
`