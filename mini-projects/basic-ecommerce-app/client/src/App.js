import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// import { useSelector } from "react-redux";
// import PrivateRoute from "./components/routing/PrivateRoute";
import SignIn from "./components/auth/signin/SignIn";
import Navbar from "./components/common/navbar/Navbar";
import Buyer from "./components/pages/dashboard/buyer/Buyer";
import Cart from "./components/pages/cart/Cart";
import Products from "./components/pages/dashboard/Products";

function App() {
  // const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <ToastContainer autoClose={1000} />
      <Navbar />
      <Routes>
        <Route exact path="/login" element={<SignIn />} />

        <Route exact path="/dashboard" element={<Buyer />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/products" element={<Products />} />

        {/* <SignUp /> */}
        {/* <Route exact path="/bookstore" element={<PrivateRoute component={<Bookstore/>}} /> */}
      </Routes>
    </Router>
  );
}

export default App;
