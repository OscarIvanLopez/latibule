import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../components/app/Home";
import Profile from "../components/app/Profile";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

const AppRouter = () => {
  const { toggleSidebar } = useSelector((state) => state.ui);
  return (
    <>
      <Router>
        {toggleSidebar ? <Sidebar /> : null}
        <Navbar />
        <div className="app">
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/login"} component={Login} />
            <Route exact path={"/register"} component={Register} />
            <Route exact path={"/profile"} component={Profile} />
            <Redirect to="/login" />
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
};
export default AppRouter;
