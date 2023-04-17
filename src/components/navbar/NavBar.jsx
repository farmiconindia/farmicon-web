import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

const NavBar = () => {

  const [showNav, setShowNav] = useState(false)

  window.addEventListener("scroll" , () =>{
    setShowNav(false)
  })

  return (
    <>
      <div className="Navbar">
        <header>
          <div className="brand" onClick={() => { setShowNav(false) }}>
            <div className="logo"></div>
            <Link style={{ textDecoration: "none" }} to="/">
              <span> Farmicon</span>
            </Link>
          </div>
          <nav className="nav">
            <Link style={{ textDecoration: "none" }} to="/about">
              <span> About</span>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/services">
              <span> Services</span>
            </Link>
            <a style={{ textDecoration: "none" }} href="#sec-4">
              <span> Blogs</span>
            </a>
            <a style={{ textDecoration: "none" }} href="#footer">
              <span> Contact Us</span>
            </a>
          </nav>
          <div className="burger" onClick={() => { setShowNav(!showNav) }}>
            {!showNav&&<GiHamburgerMenu />}
            {!!showNav&&<GrClose />}
          </div>
        </header>
        {showNav && <div className="nav-down">
          <nav className="nav">
            <Link onClick={() => { setShowNav(!showNav) }} style={{ textDecoration: "none" }} to="/about">
              <span> About</span>
            </Link>
            <Link onClick={() => { setShowNav(!showNav) }} style={{ textDecoration: "none" }} to="/services">
              <span> Services</span>
            </Link>
            <a onClick={() => { setShowNav(!showNav) }} style={{ textDecoration: "none" }} href="#sec-4">
              <span> Blog</span>
            </a>
            <Link onClick={() => { setShowNav(!showNav) }} style={{ textDecoration: "none" }} to="/">
              <span> Contact Us</span>
            </Link>
          </nav>
        </div>}
      </div>
    </>
  );
};

export default NavBar;
