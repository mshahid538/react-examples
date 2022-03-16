import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/common/Navbar";
import Login from "./components/auth/Login";
import Items from "./components/pages/items/Items";
import Dashboard from "./components/pages/buyerdashboard/dashboard";
import Cart from "./components/pages/cart/Cart";
// import PrivateRoute from "./routes/PrivateRoute";
import { useSelector } from "react-redux";

import "./App.css";

function App() {
  // const { user } = useSelector((state) => state.auth);
  // const token = user.token;
  const data = JSON.parse(localStorage.getItem("user"));
  // console.log(data?.token);
  const authenticated = data?.token;
  // console.log(authenticated, "authenticated .............");
  // }
  // const { token } = data;

  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />

            {/* <Route element={<PrivateRoute auth={authenticated} />}> */}
            <Route>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/items" element={<Items />} />
            </Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;

{
  /* <Route
              path="/items"
              element={
                <PrivateRoute>
                  <Items />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <PrivateRoute>
                  <Cart />
                </PrivateRoute>
              }
            /> */
}
