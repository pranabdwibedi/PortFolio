import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";
import "./navbar.css";

function Navbar({isDark, setIsDark}) {
  let settingTheme = () =>{
    if(isDark){
      setIsDark(false);
    }
    else{
      setIsDark(true);
    }
  }
  return (
    <>
      <nav className={`navbar sticky-top navbar-expand-lg ${isDark? "customNavBlack" : "customNavWhite"}`}>
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
            <NavLink to="/portfolio" aria-current="page" className="nav-link active">
                <b>Home</b>
              </NavLink>
              <NavLink to="/portfolio/education" className="nav-link">
                <b>Education</b>
              </NavLink>
              <NavLink className="nav-link" to="/portfolio/skills">
                <b>skills</b>
              </NavLink>
              <NavLink to="/portfolio/internships" className="nav-link">
                <b>Internships</b>
              </NavLink>
              <NavLink to="/portfolio/contactMe" className="nav-link me-5">
                <b>Contact me</b>
              </NavLink>
              <div className="form-check form-switch ThemeChanger">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onClick={settingTheme}
                  role="switch"
                  id="flexSwitchCheckChecked"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckChecked"
                >
                  <b>Change Theme</b>
                </label>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
