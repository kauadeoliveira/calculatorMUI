import { Stack } from "@mui/system"
import { Screen } from "./components/Screen/Screen.jsx"
import { Keypad } from "./components/Keypad/Keypad.jsx"
import { useState } from "react"
import { createTheme, CssBaseline, Paper, ThemeProvider } from "@mui/material"
import { lightTheme, darkTheme, } from "./themes/themes.jsx"
import styled from "styled-components"



function App() {
  // Display
  const [previousValue, setPreviousValue] = useState()
  const [currentValue, setCurrentValue] = useState()
  const [operatorValue, setOperatorValue] = useState()

  const updateDisplay = (previous, current, operator) => {
    setPreviousValue(previous)
    setCurrentValue(current)
    setOperatorValue(operator)
  }

  // Theme
  const [theme, setTheme] = useState(lightTheme)
  const handleSwitch = (darkThemeBoolean) => {darkThemeBoolean ? setTheme(darkTheme) : setTheme(lightTheme)}

  return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack
        sx={{
          height:'100vh',
          width:'100vw',
          margin: 'auto',
          alignItems: 'center'
        }}
      >
      <Screen
      previousValue={previousValue}
      currentValue={currentValue}
      operatorValue={operatorValue}
      handleSwitch={handleSwitch}
      />
      
      <Keypad updateDisplay={updateDisplay}/>
      </Stack>
    </ThemeProvider>
  )
}

export default App
