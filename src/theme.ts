import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#fff",
    },
    background: {
      default: "#000000",
    },
    // text: {
    //   primary: 'rgba(255,255,255,0.87)',
    // },
  },
  typography: {
    fontFamily: "Nunito",
    h1: {
      fontFamily: "Michroma",
    },
    h2: {
      fontFamily: "Michroma",
    },
    h3: {
      fontFamily: "Michroma",
    },
    h4: {
      fontFamily: "Michroma",
    },
    h5: {
      fontFamily: "Michroma",
    },
    h6: {
      fontFamily: "Michroma",
    },
    overline: {
      fontFamily: "Michroma",
    },
  },
});
export default theme;
