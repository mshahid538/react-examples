import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/AuthSlice";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    name: "",
    password: "",
  });

  const { name, password } = formData;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    const userData = {
      name,
      password,
    };

    const user = dispatch(login(userData));

    if (!!user) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 mx-auto">
          <div className="card shadow p-3  bg-light">
            <div className="text-center mt-4 text-secondary">
              <h3>Login</h3>
            </div>

            <form className="mt-3">
              <div className="form-group col-12 col-lg-11 mx-auto">
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  placeholder="username"
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
                  placeholder="password"
                  className="form-control"
                />
              </div>

              <div className="form-group text-center my-2">
                <button
                  onClick={handleSubmit}
                  type="button"
                  className="btn btn-block btn-primary"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
