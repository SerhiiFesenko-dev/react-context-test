import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import AuthHome from "./AuthHome";
import Login from "./Login";
import PublicRoute from "./PublicRoute";
import AppRoute from "./AppRoute";

const AppRouter = () => (
  <Router>
    <Switch>
      <AppRoute
        exact
        path="/"
        authComponent={AuthHome}
        publicComponent={Home}
      />
      <PublicRoute exact path="/login" component={Login} />

      <Redirect to="/" />
    </Switch>
  </Router>
);

export default AppRouter;
