import React from "react";
import { Route, Redirect } from "react-router-dom";

function LoginRoute({ component: Component, roles, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!localStorage.getItem("user")) {
          return <Redirect to={{ pathname: "/login" }} />;
        }
        return <Component {...props} />;
      }}
    />
  );
}

export default LoginRoute;
