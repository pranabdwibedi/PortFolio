import React from "react";
import "./CSS/home.css";
import imagePath from "./assets/profileImage.jpg";

function Home({ isDark }) {
  let theme = {
    theme: "white",
  };
  return (
    <div
      className={`ParentContainer ${isDark ? "darkMode" : "lightMode"}`}
    >
      <div className="home-custom-container">
        <img src={imagePath} alt="profile" className="profilePhoto" />
        <div className="CustomAbout">
          <h3>Pranab Kumar Dwibedi</h3>
          <p>
            Passionate about technology since childhood, I'm a dedicated
            Information Technology student from Baripada. Currently pursuing my
            Bachelor's degree, I excel in programming languages like Java,
            Python, and C, with a keen interest in cybersecurity and Web
            Development.
          </p>
        </div>
        <a href="https://drive.google.com/file/d/1qoGfu4NQ7eBouPCPsu8glwXNHfUeem0V/view?usp=sharing" target="_blank">
        <button type="button" className="btn btn-outline-primary customBtn">
            Resume
          </button>
        </a>
      </div>
    </div>
  );
}

export default Home;
