import { createTheme } from "@mui/material";
import colorConstants from "../utils/constants/colors";

const themeApp = createTheme({
  palette: {
    primary: {
      main: colorConstants.ligth.verdeEsperanza,
    },
    secondary: {
      main: colorConstants.ligth.verdeEsperanza2,
    },
  },
});

export default themeApp;
