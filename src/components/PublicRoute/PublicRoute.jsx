import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const isAuth = useSelector((state) => state.user.isAuth);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth && restricted ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
