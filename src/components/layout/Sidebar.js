import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { startHideSidebar } from "../../actions/uiActions";
import "./sidebar.css";

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="sidebar animate__animated animate__fadeInLeft animate__faster">
      <div className="flex j-cont-bet sidebar-close">
        <p>Latibule</p>

        <i
          className="bi bi-x-circle-fill"
          onClick={() => dispatch(startHideSidebar())}
        ></i>
      </div>
      <ul className="sidebar-list">
        <li>
          <Link to="/">
            <i className="bi bi-house-door-fill"></i> Home
          </Link>
        </li>
        <hr />
        <li>
          <Link to="/">
            <i className="bi bi-bookmarks-fill"></i> Saved post
          </Link>
        </li>
        <hr />

        <li>
          <Link to="/">
            <i className="bi bi-book-fill"></i> Listing
          </Link>
        </li>
        <hr />

        <li>
          <Link to="/">
            <i className="bi bi-tags-fill"></i> Tags
          </Link>
        </li>
        <hr />
      </ul>
    </div>
  );
};

export default Sidebar;
