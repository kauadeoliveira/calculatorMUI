import Grid from "@mui/material/Grid";
import { MyButton, KeypadOperators, KeypadNumbers } from "./keypad";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material";



export const Keypad = ({ updateDisplay }) => {
    const [previousOperand, setPreviousOperand] = useState([])
    const [currentOperand, setCurrentOperand] = useState([])
    const [operator, setOperator] = useState(undefined)

    const theme = useTheme()

    class Calculator{
        handlePressedKeys(event){
            let value = event.target.textContent

            if(value === '.'){
                currentOperand.includes('.') ? setCurrentOperand(currentOperand) : setCurrentOperand([...currentOperand, value])
            }
            else{
                setCurrentOperand([...currentOperand, value])
            }
 
        }
        
        clearAll(){
            setPreviousOperand('')
            setCurrentOperand('')
            setOperator(undefined)
        }
        
        calculate(){
            let previous = previousOperand;
            let current = currentOperand;
            let result;

            if(typeof previousOperand === 'object'){
                previous = Number(previousOperand.join(''))
            }

            if(typeof currentOperand === 'object'){
                current = Number(currentOperand.join(''))
            }
            

            switch(operator){
                case "+":
                    result = previous + current
                    break;
                case "-":
                    result = previous - current
                    break;
                case "X":
                    result = previous * current
                    break;
                case "÷":
                    result = previous / current
                    break;
                case "%":
                    result = previous * (current/100)
                    break;
            }

            setPreviousOperand('')
            setCurrentOperand(result)
            setOperator(undefined)
        }

        chooseOperator(event){
            if(currentOperand){
                setOperator(event.target.textContent)
            }

            setPreviousOperand(currentOperand)
            setCurrentOperand('')
        }
    }
    const calc = new Calculator()


    useEffect(() => {updateDisplay(previousOperand, currentOperand, operator)}, [currentOperand, previousOperand])

    return ( 
        <>
        <KeypadOperators>
            <div className="background-box">
                <div className="background-left" style={{backgroundColor: theme.palette.background.default}}></div>
                <div className="background-right" style={{backgroundColor: theme.palette.background.default}}></div>
            </div>
            
            <div className="operators-container">
                <div className="operators-box" style={{backgroundColor: theme.palette.secondary.light}}>
                    <MyButton
                    variant='text'
                    typeKey='border-left'
                    onClick={calc.chooseOperator}>{'+'}</MyButton>
                    
                    <MyButton
                    variant='text'
                    typeKey='operator'
                    onClick={calc.chooseOperator}>{'-'}</MyButton>
                    
                    <MyButton
                    variant='contained'
                    typeKey='contrast'
                    color='primary'
                    onClick={calc.calculate}>{'='}</MyButton>

                    <MyButton
                    variant='text'
                    typeKey='operator'
                    onClick={calc.chooseOperator}>{'X'}</MyButton>

                    <MyButton
                    variant='text'
                    typeKey='border-right'
                    onClick={calc.chooseOperator}>{'÷'}</MyButton>
                </div>
            </div>
        </KeypadOperators>

        <KeypadNumbers container >
            <Grid item xs={4}>
                <MyButton variant="text" onClick={calc.handlePressedKeys}>7</MyButton>
            </Grid>
            <Grid item xs={4}>
                <MyButton variant="text" onClick={calc.handlePressedKeys}>8</MyButton>
            </Grid>

            <Grid item xs={4}>
                <MyButton variant="text" onClick={calc.handlePressedKeys}>9</MyButton>
            </Grid>

            <Grid item xs={4}>
                <MyButton variant="text" onClick={calc.handlePressedKeys}>4</MyButton>
            </Grid>

            <Grid item xs={4}>
                <MyButton variant="text" onClick={calc.handlePressedKeys}>5</MyButton>
            </Grid>

            <Grid item xs={4}>
                <MyButton variant="text" onClick={calc.handlePressedKeys}>6</MyButton>
            </Grid>

            <Grid item xs={4}>
                <MyButton variant="text" onClick={calc.handlePressedKeys}>1</MyButton>
            </Grid>

            <Grid item xs={4}>
                <MyButton variant="text" onClick={calc.handlePressedKeys}>2</MyButton>
            </Grid>

            <Grid item xs={4}>
                <MyButton variant="text" onClick={calc.handlePressedKeys}>3</MyButton>
            </Grid>

            <Grid item xs={4}>
                <MyButton variant="text" onClick={calc.handlePressedKeys}>.</MyButton>
            </Grid>

            <Grid item xs={4}>
                <MyButton variant="text" onClick={calc.handlePressedKeys}>0</MyButton>
            </Grid>

            <Grid item xs={4}>
                <MyButton
                variant="text"
                color="error"
                onClick={calc.clearAll}>AC</MyButton>
            </Grid>
        </KeypadNumbers>
        </>
     );
}
