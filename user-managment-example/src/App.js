import React from "react";
import AppRoutes from "./components/routes/AppRoutes";
import Tabs from "./components/common/tabs/Tabs";
import { BrowserRouter as Router } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
