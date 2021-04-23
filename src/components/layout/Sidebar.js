import React from "react";
import "./sidebar.css";
const Sidebar = (status) => {
  return (
    <div className="sidebar animate__animated animate__fadeInLeft animate__faster">
      <p>Latibule</p>
      <ul className="sidebar-list">
        <li>
          <i class="bi bi-house-door-fill"></i> Home
        </li>
        <hr />
        <li>
          <i class="bi bi-bookmarks-fill"></i> Saved post
        </li>
        <hr />

        <li>
          <i class="bi bi-book-fill"></i> Listing
        </li>
        <hr />

        <li>
          <i class="bi bi-tags-fill"></i> Tags
        </li>
        <hr />
      </ul>
    </div>
  );
};

export default Sidebar;
