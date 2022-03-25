import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [isLogged, setIsLogged] = React.useState(false);

  return (
    <>
      <button onClick={() => setIsLogged(true)}> Login </button>
      <button onClick={() => setIsLogged(false)}> Logout</button>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Private rotues */}
          <Route element={<PrivateRoute isLogged={isLogged} />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          {/* Catch all */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Link to="/profile">Edit Profile</Link>
      </Router>
    </>
  );
}
export default App;
