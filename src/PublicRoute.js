import { Redirect, Route } from "react-router-dom";
import { useIsAuthenticated } from "./hooks";

const PublicRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ? <Component {...props} /> : <Redirect to={"/"} />
      }
    />
  );
};

export default PublicRoute;
