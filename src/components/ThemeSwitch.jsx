import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { ThemeSliderBackground, ThemeSlider, LabelSlider} from "../styles/switchtheme";

const ThemeSwitch  = () => {
    const [value, setValue] = useState(1)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return ( 
        <Stack>
                <LabelSlider>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </LabelSlider>
            <ThemeSliderBackground>
                <ThemeSlider
                    min={1}
                    max={3}
                    step={1}
                    value={value}
                    onChange={handleChange}
                    />
            </ThemeSliderBackground>
        </Stack>
     );
}
 
export default ThemeSwitch ;