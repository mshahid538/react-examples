import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "../signin/Signin";
import Signup from "../signup/Signup";
import Home from "../home/Home";
import Dashboard from "../dashboard/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
export default function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/signin" element={<Signin />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Route>
    </Routes>
  );
}
