import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../features/AuthSlice";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      // navigate("/dashboard");
      <Navigate to="/dashboard" />;
    }
  }, [user, isSuccess, isError, dispatch, message]);

  const { username, password } = formData;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username,
      password,
    };
    dispatch(login(userData));
  };
  if (isLoading) {
    return "Loading.";
  }
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");
  //   const dispatch = useDispatch();
  //   const { token, loading } = useSelector((state) => state.auth);

  //   if (token || getToken()) {
  //     console.log(token, "toekrokoaddadda");
  //     <Navigate to="/" />;
  //   }

  //   const handleLogin = (e) => {
  //     e.preventDefault();
  //     dispatch(login({ username, password }));
  //   };

  //   const handleChange = (e) => {
  //     if (e.target.name === "username") {
  //       setUsername(e.target.value);
  //     }
  //     if (e.target.name === "password") {
  //       setPassword(e.target.value);
  //     }
  //   };

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

            <form className="mt-3" onSubmit={onSubmit}>
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
              <div className="form-group col-12 col-lg-11 mx-auto my-3">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="form-control"
                />
              </div>
              <div className="form-group text-center my-2">
                <button type="button" className="btn btn-primary">
                  Login
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

export default Login;
