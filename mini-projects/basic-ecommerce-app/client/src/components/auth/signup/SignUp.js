import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    fullname: "",
    email: "",
  });

  const { username, password, fullname, email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   login(username, password);
  // };
  return (
    <>
      <div className="wrapper">
        <div className="logo">
          <img
            src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png"
            alt=""
          />
        </div>
        <div className="text-center mt-4 name"> Sign In </div>
        <form className="p-3 mt-3">
          <div className="form-field d-flex align-items-center">
            <span className="fa fa-key"></span>
            <input
              type="text"
              name="fullname"
              value={fullname}
              onChange={onChange}
              id="pwd"
              placeholder="Full Name"
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input
              type="text"
              name="email"
              value={email}
              onChange={onChange}
              id="pwd"
              placeholder="Email"
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input
              type="text"
              name="username"
              value={username}
              onChange={onChange}
              id="userName"
              placeholder="Username"
              autoComplete="off"
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fa fa-key"></span>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              id="pwd"
              placeholder="Password"
            />
          </div>

          <button className="btn mt-3">Sign Up</button>
        </form>
        <div className="text-center fs-6">
          <a href="#!">Have Already account?</a> or{" "}
          <Link to="/signin">Sign in</Link>
        </div>
      </div>
    </>
  );
};

export default SignUp;
