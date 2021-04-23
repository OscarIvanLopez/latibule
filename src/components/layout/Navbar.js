import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { startLogin } from "../../actions/authActions";

// Borrar:
import profile from "../../assets/profile.jpg";

const Navbar = () => {
  const dispatch = useDispatch();
  const { logged } = useSelector((state) => state.auth);
  const [stateSidebar, setStateSidebar] = useState(false);

  const handleSidebar = () => {
    setStateSidebar(!stateSidebar);
  };

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
              onClick={handleSidebar}
            ></i>
            <Link to="/">
              <img src={logo} className="nav-img ms-2" alt="" />
            </Link>
          </div>

          <div className="r-side">
            {/* TODO: CHECAR SI ESTA LOGEADO Y MOSTRAR  */}
            {!logged ? (
              <Link onClick={handleLogin} className="btn btn-primary">
                Create a account
              </Link>
            ) : (
              <img style={styles.img} src={profile} alt="profile" />
            )}
          </div>
        </div>
      </nav>
      {stateSidebar && <Sidebar status={true} />}
    </>
  );
};

// BORRAR
const styles = {
  img: {
    width: 50,
    height: 50,
  },
};
// BORRAR
export default Navbar;
