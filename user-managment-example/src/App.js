import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppRoutes from "./components/routes/AppRoutes";
import Tabs from "./components/common/tabs/Tabs";
import { BrowserRouter as Router } from "react-router-dom";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Tabs />
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}
export default App;
