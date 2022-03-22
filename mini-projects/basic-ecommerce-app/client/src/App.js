import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/common/Navbar";
import Login from "./components/auth/Login";
import Items from "./components/pages/items/Items";
import Dashboard from "./components/pages/buyerdashboard/dashboard";
import Cart from "./components/pages/cart/Cart";
import Checkout from "./components/pages/checkout/Checkout";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/items" element={<Items />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer autoClose={1500} />
    </>
  );
}

export default App;
