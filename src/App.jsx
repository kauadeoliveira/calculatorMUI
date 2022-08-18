import { Stack } from "@mui/material"
import { Screen } from "./components/Screen"
import { Keyboard } from "./components/Keypad"
import { GlobalStyle } from "./styles/globalstyles"
import Header from "./components/Header"
import ThemeSwitch from "./components/ThemeSwitch"
function App() {
  return(
    <>
      <Stack alignItems='center' width={{sm:'70%'}} margin="auto" spacing={3} >
        <Header />
        <Screen />
        <Keyboard />
      </Stack>
      <GlobalStyle />
    </>
  )
}

export default App
