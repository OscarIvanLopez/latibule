import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { startShowSidebar } from "../../actions/uiActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { pathname } = useLocation();

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
            {user ? (
              <div className="items-group">
                {" "}
                <i className="bi bi-bell-fill"></i>{" "}
                <img className="profile-pic" src={user.photoURL} />
              </div>
            ) : pathname === "/register" ? (
              <Link to="/login" className="btn btn-primary">
                Login
              </Link>
            ) : (
              <Link to="/register" className="btn btn-primary">
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
