import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { MyButton, KeypadContainer } from "../styles/keypad";


export const Keyboard = () => {
    return ( 
        <KeypadContainer container columnSpacing={1} rowSpacing={2}>
            <Grid item xs={3}>
                <MyButton variant="contained">7</MyButton>
            </Grid>

            <Grid item xs={3}>
                <MyButton variant="contained">8</MyButton>
            </Grid>

            <Grid item xs={3}>
                <MyButton variant="contained">9</MyButton>
            </Grid>

            <Grid item xs={3}>
                <MyButton variant="contained" typeButton="del">DEL</MyButton>
            </Grid>

            <Grid item xs={3}>
                <MyButton variant="contained">4</MyButton>
            </Grid>

            <Grid item xs={3}>
                <MyButton variant="contained">5</MyButton>
            </Grid>

            <Grid item xs={3}>
                <MyButton variant="contained">6</MyButton>
            </Grid>

            <Grid item xs={3}>
                <MyButton variant="contained">+</MyButton>
            </Grid>

            <Grid item xs={3}>
                <MyButton variant="contained">1</MyButton>
            </Grid>

            <Grid item xs={3}>
                <MyButton variant="contained">2</MyButton>
            </Grid>

            <Grid item xs={3}>
                <MyButton variant="contained">3</MyButton>
            </Grid>

            <Grid item xs={3}>
                <MyButton variant="contained">-</MyButton>
            </Grid>

            <Grid item xs={3}>
                <MyButton variant="contained">.</MyButton>
            </Grid>

            <Grid item xs={3}>
                <MyButton variant="contained">0</MyButton>
            </Grid>

            <Grid item xs={3}>
                <MyButton variant="contained">/</MyButton>
            </Grid>

            <Grid item xs={3}>
                <MyButton variant="contained">X</MyButton>
            </Grid>

            <Grid item xs={6}>
                <MyButton variant="contained" typeButton='reset'>   
                    RESET
                </MyButton>
            </Grid>

            <Grid item xs={6}>
                <MyButton variant="contained" typeButton='equal'>
                    =
                </MyButton>
            </Grid>

        </KeypadContainer>
     );
}
