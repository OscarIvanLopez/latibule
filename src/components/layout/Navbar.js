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
              <img src={logo} className="nav-img ms-2" alt="logo" />
            </Link>
          </div>

          <div className="r-side">
            {user ? (
              <div className="items-group">
                {" "}
                <i className="bi bi-bell-fill"></i>{" "}
                <div className="dropstart">
                  <img
                    className="profile-pic-nav"
                    src={user.photoURL}
                    alt="profile pic"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  />
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to={'/profile'} >
                        {user.displayName} <br />
                        {user.email}
                        <hr />
                      </Link>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Write a post
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Reading list
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Settings
                        <hr />
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Log out
                      </a>
                    </li>
                  </ul>
                </div>
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
