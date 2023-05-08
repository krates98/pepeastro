import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <div className="container">
        <Link
          to="top-header"
          smooth={true}
          duration={500}
          className="navbar-brand"
        >
          AstroPepe
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse navbar" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link
                to="aboutus"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="top-header"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Astrology
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="spellcasting"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                WitchCraft
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
