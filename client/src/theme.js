import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme({
  palette: {
    primary: {
      light: "#6685FF",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#F1F2F7",
      dark: "#C9D1DC",
      contrastText: "#000",
    },
  },
});

export default defaultTheme;
