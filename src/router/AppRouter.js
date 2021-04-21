import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../components/app/Home";
import Login from "../components/auth/Login";
const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/login"} component={Login} />
          <Redirect to="/login" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
