import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import getTheme from "./theme/theme";
import { useSettingsStore } from "./store/useSettingsStore";

// Componente que usa Zustand y aplica el tema dinámico
export const Main = () => {
  const { themeMode } = useSettingsStore();
  const theme = getTheme(themeMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
);
