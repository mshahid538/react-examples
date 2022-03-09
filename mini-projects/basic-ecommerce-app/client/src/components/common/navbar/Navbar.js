import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { isFetching } = useSelector((state) => state.user);
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  const authLinks = (
    <ul className="nav mr-2">
      <li className="p-1">
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li className="p-1">
        <Link to="/products">Products</Link>
      </li>
      <li className="p-1">
        <Link to="/cart">
          Cart{" "}
          <span className="bi bi-cart bag-quantity">
            <span>{cartTotalQuantity}</span>
          </span>
        </Link>
      </li>

      <li className="p-1">
        <Link to="/login">
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Logout</span>
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul class="nav navbar-nav navbar-right d-flex">
      <li>
        <Link className="text-dark mr-4 text-decoration-none" to="/login">
          Sign In
        </Link>
        <li className="">
          <Link to="/cart">
            <span className="bi bi-cart "></span>
            Cart
            <span className="badge badge-success">{cartTotalQuantity}</span>
          </Link>
        </li>
      </li>
    </ul>
  );

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list"></i>
        </button>
        <div class="navbar-header">
          <Link to="/">
            <i className="bi bi-search" /> Basic Ecommerce App
          </Link>
        </div>
        <>{!isFetching ? authLinks : guestLinks}</>
      </div>
    </nav>
  );
};

export default Navbar;
