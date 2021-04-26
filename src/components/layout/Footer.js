import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container footer-container">
        <ul className="footer-list mb-0">
          <Link to={"/home"} className="footer-link">
            Home
          </Link>
          <Link to={"/saved-post"} className="footer-link">
            Saved post
          </Link>
          <Link to={"/listing"} className="footer-link">
            Listing
          </Link>
          <Link to={"/tags"} className="footer-link">
            Tags
          </Link>
        </ul>

        <div className="social-media ">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/OscarIvanLopez"
            className="link-social "
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/ivandevv"
            className="link-social "
          >
            <i className="bi bi-twitter"></i>
          </a>
        </div>
        <hr />

        <p>
          <span>Latibule</span> - A social network dedicated to developers who
          like to share their knowledge
        </p>

        <p>
          Project developed with React and is open source, you can{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/OscarIvanLopez/latibule"
          >
            check it
          </a>{" "}
          in  developer's GitHub 👨‍💻
        </p>
      </div>
    </footer>
  );
};

export default Footer;
