import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.jpg";
import "./navbar.css";

function Navbar() {
  return (
    <>
      {/* <nav className="navbar sticky-top navbar-expand-lg bg-transparent">
        <div className="d-flex justify-content-between vw-100 ps-3 pe-3">
          <div>
            <img src={logo} alt="logo" className="logo" />
            <NavLink className="navbar-brand" to="/portfolio">
              <b>Pranab Kumar Dwibedi</b>
            </NavLink>
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
          </div>
          <div
            className="d-flex flex-row-reverse pe-4 collapse navbar-collapse"
            id="navbarNav"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://drive.google.com/file/d/1KQdbXuqjPmNOPdg1i9Z82Y5AHxqPwGt3/view?usp=sharing"
                >
                  <b>Resume</b>
                </a>
              </li>
              <li className="nav-item">
                <NavLink to="/portfolio/education" className="nav-link">
                  <b>Education</b>
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <b>Skills</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <b>Internships</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <b>Contact me</b>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img src={logo} alt="logo" className="logo" />
          <NavLink className="navbar-brand" to="/portfolio">
            <b>Pranab Kumar Dwibedi</b>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <a
                  className="nav-link"
                  href="https://drive.google.com/file/d/1KQdbXuqjPmNOPdg1i9Z82Y5AHxqPwGt3/view?usp=sharing"
                >
                  <b>Resume</b>
                </a>
                <NavLink to="/portfolio/education" className="nav-link">
                  <b>Education</b>
                </NavLink>
              <a className="nav-link" href="#">
                <b>skills</b>
              </a>
              <NavLink to="/portfolio/internships" className="nav-link">
                  <b>Internships</b>
                </NavLink>
                <NavLink to="/portfolio/contactMe" className="nav-link">
                  <b>Contact me</b>
                </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
