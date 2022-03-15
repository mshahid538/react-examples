import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/common/Navbar";
import Login from "./components/auth/Login";
import Buyer from "./components/pages/buyer/Buyer";
import Items from "./components/pages/items/Items"; 
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
          <Route exact path="/" element={<Login />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/buyer" element={<Buyer />} />
            <Route exact path="/items" element={<Items />} /> 
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
