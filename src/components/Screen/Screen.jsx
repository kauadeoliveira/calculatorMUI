import { Typography, Switch, useTheme, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { ScreenContainer, OperandValue } from "./screen";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import AcUnitIcon from '@mui/icons-material/AcUnit';


export const Screen = ({ previousValue, currentValue, operatorValue, handleSwitch }) => {
    const theme = useTheme()
    const [darkTheme, setDarkTheme] = useState(false)

    const handleTheme = (e) => {
        darkTheme ? setDarkTheme(false) : setDarkTheme(true)
    } 

    useEffect(() => {handleSwitch(darkTheme)}, [darkTheme])

    return(
        <ScreenContainer style={{backgroundColor: theme.palette.primary.main}}>
            <Button
            variant='text'
            color='warning'
            onClick={handleTheme}
            >
                mode {darkTheme? <AcUnitIcon /> : <LocalFireDepartmentIcon />}
            </Button>

            <OperandValue previous>
                <Typography variant="h2">
                    {previousValue}
                </Typography>
                <Typography
                variant="h2"
                style={{color: '#000'}}
                >
                    {operatorValue}
                </Typography>
            </OperandValue>

            <OperandValue current>
                <Typography variant="h1">
                    {currentValue}
                </Typography>
            </OperandValue>
        </ScreenContainer>
    )
}
 
