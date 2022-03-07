import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
          <i className="fas fa-bars"></i>
        </button>
        <div class="navbar-header">
          <a class="navbar-brand" href="#!">
            Logo Here
          </a>
        </div>

        <ul class="nav navbar-nav navbar-right">
          <li>
            <Link className="text-dark mr-4 text-decoration-none" to="/login">
              Sign In
            </Link>
            <Link className="text-dark text-decoration-none" to="/signup">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
