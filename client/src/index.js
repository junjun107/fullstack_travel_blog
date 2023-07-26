import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LogsContextProvider } from "./context/LogsContext";
import { ThemeProvider } from "@mui/material/styles";
import defaultTheme from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <LogsContextProvider>
        <App />
      </LogsContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
