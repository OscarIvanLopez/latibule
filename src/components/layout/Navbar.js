import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startLogin } from "../../actions/authActions";
import { startShowSidebar } from "../../actions/uiActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();


  const handleLogin = () => {
    dispatch(startLogin());
  };

  return (
    <>
      <nav className="nav pt-2 pb-2">
        <div className="container container-nav">
          <div className="l-side">
            <i
              className="bi bi-list btn btn-outline-primary"
              onClick={() => dispatch(startShowSidebar())}
            ></i>
            <Link to="/">
              <img src={logo} className="nav-img ms-2" alt="" />
            </Link>
          </div>

          <div className="r-side">
            {/* TODO: CHECAR SI ESTA LOGEADO Y MOSTRAR  */}
            {pathname === "/register" ? (
              <Link
                to="/login"
                onClick={handleLogin}
                className="btn btn-primary"
              >
                Login
              </Link>
            ) : (
              <Link
                to="/register"
                onClick={handleLogin}
                className="btn btn-primary"
              >
                Create a account
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
