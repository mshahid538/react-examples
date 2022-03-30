import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// redux
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/AuthSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = React.useState({
    name: "",
    password: "",
  });

  const { name, password } = formData;

  React.useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (user) {
      navigate("/dashboard");
    }
  }, [user, isError, message, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    if (name === "" || password === "") {
      toast.error("Please filled the fields!");
    }

    const userData = {
      name,
      password,
    };
    dispatch(login(userData));
  };

  if (isLoading) {
    return <div className="spinner-border text-center"></div>;
  }

  return (
    <div className="container mt-4 pt-5">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 mx-auto">
          <div className="card shadow p-3 bg-light">
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
                  type="button"
                  className="btn btn-block btn-primary"
                  onClick={handleSubmit}
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
}

export default Login;
