import React from "react";
import { ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "../router/Router";
import { theme } from "../theming/theme";
import "./App.css";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
