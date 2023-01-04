import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const NavBar = () => {
  return (
    <>
      <div className="Navbar">
        <header>
          <div className="brand">
            <div className="logo"></div>
            <Link style={{ textDecoration: "none" }} to="/">
              <span> Farmicon</span>
            </Link>
          </div>
          <nav className="nav">
            <Link style={{ textDecoration: "none" }} to="/">
              <span> About</span>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/services">
              <span> Services</span>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/">
              <span> Blog</span>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/">
              <span> Contact Us</span>
            </Link>
          </nav>
        </header>
      </div>
    </>
  );
};

export default NavBar;
