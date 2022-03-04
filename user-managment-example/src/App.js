import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./components/signin/Signin";
import Signup from "./components/signup/Signup";
import Home from "./components/home/Home";
import Dashboard from "./components/dashboard/Dashboard";
import Tabs from './components/common/tabs/Tabs';

function App() {
  return (
      <Router>
      <Tabs/>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </Router>
  );
}

export default App;
