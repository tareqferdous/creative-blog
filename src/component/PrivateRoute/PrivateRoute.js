import React from "react";
import { Route } from "react-router";
import { Redirect } from "react-router";
import UserContext from "../../UserContext";


const PrivateRoute = ({ children, ...rest }) => {
  const { login } = React.useContext(UserContext);
  const [loginData, setLoginData] = login;

  return (
    <Route
      {...rest}
      render={({ location }) =>
      loginData?.newLoginData?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
