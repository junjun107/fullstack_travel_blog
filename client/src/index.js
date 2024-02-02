import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LogsContextProvider } from "./context/LogsContext";
import { AuthContextProvider } from "./context/AuthContext";
import { ThemeProvider } from "@mui/material/styles";
import "../src/root.css";
import defaultTheme from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <AuthContextProvider>
        <LogsContextProvider>
          <App />
        </LogsContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
