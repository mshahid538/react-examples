import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/AuthSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  const Logout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <i className="bi bi-code"></i>Basic Ecommerce App
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto">
            {user ? (
              <button
                to="/login"
                className="nav-item nav-link btn-primary"
                onClick={Logout}
              >
                <i className="bi bi-box-arrow-right"></i> Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="nav-item nav-link">
                  <i className="bi bi-person"></i> Login
                </Link>
                <Link to="/buyer" className="nav-item nav-link">
                  <i className="bi bi-xbox"></i> Buyer
                </Link>
                <Link to="/items" className="nav-item nav-link">
                  <i className="bi bi-diagram-2"></i>Items
                </Link>
                <Link
                  to="/cart"
                  type="button"
                  className="nav-item nav-link position-relative"
                >
                  <i className="bi bi-bag"></i>Cart
                  <span className="position-absolute start-100 translate-middle badge rounded-pill bg-danger">
                    {cartTotalQuantity}
                  </span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
