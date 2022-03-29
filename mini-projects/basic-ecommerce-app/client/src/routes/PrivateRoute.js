import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute({ auth }) {
  return auth ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;
// import { useSelector } from "react-redux";
// import { Navigate, Route } from "react-router-dom";

// export default function PrivateRoute(props) {
//   const navigate = useNavigate();
//   const { user } = useSelector((state) => state.auth);
//   const { component: Component, ...rest } = props;

//   if (user) {
//     return <Route {...rest} render={(props) => <Component {...props} />} />;
//   }
//   //redirect if there is no user
//   return navigate("/login");
// }
