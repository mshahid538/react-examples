import React from "react";
import Login from "./components/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Auth from "./components/Auth";

function App() {
  const [loginUserInfo, setLoginUserInfo] = React.useState(null);

  const updateLoginUser = (user: any) => {
    setLoginUserInfo(user);
  };

  return (
    <Routes>
      {!loginUserInfo && (
        <>
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/login"
            element={<Login updateLoginUser={updateLoginUser} />}
          />
        </>
      )} 
      {loginUserInfo && (
        <Route
          path="/dashboard"
          element={<Dashboard userInfo={loginUserInfo} logout={() => setLoginUserInfo(null)} />}
        />
      )}

      <Route
        path="*"
        element={<Navigate to={loginUserInfo ? "/dashboard" : "/login"} />}
      />
    </Routes>
  );
}

export default App;
