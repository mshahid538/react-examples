import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/AuthSlice";
import { getTotals } from "../../features/CartSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <h4 className="text-secondary">Basic Ecommerce App</h4>
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
          <div className="navbar-nav ml-auto">
            {user ? (
              <div className="navbar-nav ml-auto">
                <Link
                  to="/cart"
                  type="button"
                  className="nav-item nav-link position-relative border-0"
                >
                  <i className="bi bi-bag"></i>Cart
                  <span className="position-absolute top-1 translate-middle badge rounded-pill bg-danger">
                    {cartTotalQuantity}
                  </span>
                </Link>
                <Link to="/items" className="nav-item nav-link border-0">
                  <i className="bi bi-diagram-2"></i>Items
                </Link>

                <Link to="/dashboard" className="nav-item nav-link border-0">
                  <i className="bi bi-speedometer"></i> Dashboard
                </Link>
                <Link
                  to="/login"
                  className="nav-item nav-link border-0"
                  onClick={handleLogout}
                >
                  <i className="bi bi-box-arrow-right"></i> Logout
                </Link>
              </div>
            ) : (
              <>
                <Link to="/login" className="nav-item nav-link">
                  <i className="bi bi-person"></i> Login
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
