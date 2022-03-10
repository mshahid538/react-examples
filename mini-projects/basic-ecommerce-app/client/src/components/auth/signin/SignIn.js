import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";
import { useSelector, useDispatch } from "react-redux";
// import { loginUser, userSelector, clearState } from "../../../redux/UserSlice";
// import { userLogin } from "../../../services/AuthService";
import { login } from "../../../redux/ApiCalls";
import { Navigate } from "react-router-dom";
// import { loginSuccess } from "../../../redux/UserReducer";

const SignIn = ({ updateLoginUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.user);

  const onSubmit = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  const handleChange = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 mx-auto">
          <div className="card shadow-sm p-3 ">
            <div className="logo">
              <img
                src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png"
                alt=""
              />
            </div>
            <div className="text-center mt-4"> Sign In </div>

            <form className="mt-3">
              <div className="form-group col-12 col-lg-11 mx-auto">
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={handleChange}
                  placeholder="Username"
                  className="form-control"
                  autoComplete="off"
                />
              </div>
              <div className="form-group col-12 col-lg-11 mx-auto">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="form-control"
                />
              </div>
              <div className="form-group text-center">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={onSubmit}
                >
                  Login
                  {/* {!isFetching ? <Navigate to="/bookstore" /> : ""} */}
                </button>
              </div>
              <div className="text-center fs-6">
                <Link to="#!">Forget password?</Link> or{" "}
                <Link to="/signup">Sign up</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
