import { Outlet, Navigate } from "react-router-dom";

function PrivateRoute() {
  const isLoggedIn = false;
  return isLoggedIn ? <Outlet /> : <Navigate to="/signin" />;
}
export default PrivateRoute;