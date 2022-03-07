import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, userSelector, clearState } from "../../../redux/UserSlice";
// import { userLogin } from "../../../services/AuthService";
import { Navigate } from "react-router-dom";

const SignIn = ({ updateLoginUser }) => {
  const dispatch = useDispatch();
  // const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState(true);
  const [isLoginFaild, setIsLoginFaild] = useState(false);

  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(userSelector);
  const handleChange = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };
  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  useEffect(() => {
    if (isError) {
      console.error("Error");
      dispatch(clearState());
    }

    if (isSuccess) {
      dispatch(clearState());
      <Navigate to="/" />;
    }
  }, [isError, isSuccess]);

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
        <br />
        {!validation && (
          <p className="text-danger text-center">
            Please Fill Required Fields...
          </p>
        )}
        <form className="p-3 mt-3">
          <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              placeholder="Username"
              autoComplete="off"
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Password"
            />
          </div>
          <button className="btn mt-3" onClick={onSubmit}>
            Login
          </button>
          {isLoginFaild && (
            <p className="text-danger">Incorrect Usrname or Password... </p>
          )}
        </form>
        <div className="text-center fs-6">
          <Link to="#!">Forget password?</Link> or{" "}
          <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </>
  );
};

export default SignIn;
