import React from "react";
import "./home.css";
import imagePath from "./assets/profile.jpg";
import { NavLink } from "react-router-dom";

function Home({ isDark }) {
  let theme = {
    theme: "white",
  };
  return (
    <div
      className={`${isDark ? "ParentContainerBlack" : "ParentContainerWhite"}`}
    >
      <div className="home-custom-container">
        <img src={imagePath} alt="profile" className="profilePhoto" />
        <div className={`${isDark ? "CustomAboutBlack" : "CustomAboutWhite"}`}>
          <h3>Pranab Kumar Dwibedi</h3>
          <p>
            Passionate about technology since childhood, I'm a dedicated
            Information Technology student from Baripada. Currently pursuing my
            Bachelor's degree, I excel in programming languages like Java,
            Python, and C, with a keen interest in cybersecurity and Web
            Development.
          </p>
        </div>
        <a href="https://drive.google.com/file/d/1KQdbXuqjPmNOPdg1i9Z82Y5AHxqPwGt3/view?usp=sharing" target="_blank">
        <button type="button" className="btn btn-outline-primary customBtn">
            Click to view or download my Resume
          </button>
        </a>
      </div>
    </div>
  );
}

export default Home;
