import React from "react";
import AppRoutes from "./components/routes/AppRoutes";
import Tabs from "./components/common/tabs/Tabs";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Tabs />
        <AppRoutes />
      </Router>
    </>
  );
}
export default App;
