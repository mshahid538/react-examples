import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import PrivateRoute from "./components/routing/PrivateRoute";
import SignIn from "./components/auth/signin/SignIn";
import SignUp from "./components/auth/signup/SignUp";
import Navbar from "./components/common/navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/login" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />

        {/* <SignUp /> */}
        {/* <Route exact path="/bookstore" element={<PrivateRoute component={<Bookstore/>}} /> */}
      </Routes>
    </Router>
  );
}

export default App;
