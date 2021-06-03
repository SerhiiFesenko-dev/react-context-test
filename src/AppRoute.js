import { Route } from "react-router-dom";
import { useIsAuthenticated } from "./hooks";

const AppRoute = ({
  authComponent: AuthComponent,
  publicComponent: PublicComponent,
  ...rest
}) => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <AuthComponent {...props} />
        ) : (
          <PublicComponent {...props} />
        )
      }
    />
  );
};

export default AppRoute;
