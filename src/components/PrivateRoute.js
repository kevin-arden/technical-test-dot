import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ isLogin, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (isLogin) {
          return <Component />;
        } else {
          return <Navigate to="/login" />;
        }
      }}
    ></Route>
  );
};

export default PrivateRoute;
