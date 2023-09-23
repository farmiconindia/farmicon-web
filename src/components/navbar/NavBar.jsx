import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const NavBar = ({ changeLang, setChangeLang }) => {
  const [showNav, setShowNav] = useState(false);

  window.addEventListener("scroll", () => {
    setShowNav(false);
  });

  return (
    <>
      <div className="Navbar">
        <header>
          <div
            className="brand"
            onClick={() => {
              setShowNav(false);
            }}
          >
            <div className="logo"></div>
            <Link style={{ textDecoration: "none" }} to="/">
              <span>{!changeLang ? "Farmicon" : "फार्मिकॉन"} </span>
            </Link>
          </div>
          <nav className="nav">
            <Link style={{ textDecoration: "none" }} to="/about">
              <span>{!changeLang ? "About" : "के बारे में"}</span>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/services">
              <span>{!changeLang ? "Services" : "सेवाएं"}</span>
            </Link>
            <HashLink style={{ textDecoration: "none" }} to="/blogs">
              <span>{!changeLang ? "Blogs" : "ब्लॉग"}</span>
            </HashLink>
            <Link style={{ textDecoration: "none" }} to="/contact">
              <span>{!changeLang ? "Contact Us" : "संपर्क करें"}</span>
            </Link>
            <div
              style={{ textDecoration: "none", cursor: "pointer" }}
              onClick={() => {
                setChangeLang(!changeLang);
              }}
            >
              {!changeLang ? (
                <span>हिंदी में देखें</span>
              ) : (
                <span>See in English</span>
              )}
            </div>
          </nav>
          <div
            className="burger"
            onClick={() => {
              setShowNav(!showNav);
            }}
          >
            {!showNav && <GiHamburgerMenu />}
            {!!showNav && <GrClose />}
          </div>
        </header>
        {showNav && (
          <div className="nav-down">
            <nav className="nav">
              <Link
                onClick={() => {
                  setShowNav(!showNav);
                }}
                style={{ textDecoration: "none" }}
                to="/about"
              >
                <span>{!changeLang ? "About" : "के बारे में"}</span>
              </Link>
              <Link
                onClick={() => {
                  setShowNav(!showNav);
                }}
                style={{ textDecoration: "none" }}
                to="/services"
              >
                <span>{!changeLang ? "Services" : "सेवाएं"}</span>
              </Link>
              <HashLink
                onClick={() => {
                  setShowNav(!showNav);
                }}
                style={{ textDecoration: "none" }}
                to="/#sec-4"
              >
                <span>{!changeLang ? "Blogs" : "ब्लॉग"}</span>
              </HashLink>
              <a
                onClick={() => {
                  setShowNav(!showNav);
                }}
                style={{ textDecoration: "none" }}
                href="/#footer"
              >
                <span>{!changeLang ? "Contact Us" : "संपर्क करें"}</span>
              </a>
              <div
                style={{ textDecoration: "none", cursor: "pointer" }}
                onClick={() => {
                  setChangeLang(!changeLang);
                }}
              >
                {!changeLang ? (
                  <span>हिंदी में देखें</span>
                ) : (
                  <span>See in English</span>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
