import React, { useState } from "react";
import SkillCard from "./skillCard";
import reactLogo from "./assets/reactLogo.svg";
import htmlLogo from "./assets/html-5.png";
import cssLogo from "./assets/css-3.png";
import jsLogo from "./assets/js.png";
import javalogo from "./assets/java.png";
import cLogo from "./assets/letter-c.png";
import pythonLogo from "./assets/python.png";
import Certificate_c from "./assets/C.jpg";
import certificateJS from "./assets/JavaScript_page-0001.jpg";
import certificatePython from "./assets/Python Quiz_page-0001.jpg";
import certificateJava from "./assets/Java_page-0001.jpg";
import certificateleader from "./assets/LeaderShip.png";
import certificateParticipate from "./assets/Participation Certificate.jpg";
import "./skills.css";

function Skills({ isDark }) {
  const [show, setShow] = useState(true);
  setTimeout(() => {
    setShow(false);
  }, 4000);

  return (
    <div
      className={`${
        isDark ? "skill-parent-containerBlack" : "skill-parent-containerWhite"
      }`}
    >
      <div
        className={`alert alert-warning alert-dismissible fade sticky-top ${
          show ? "show" : "visually-hidden"
        }`}
        role="alert"
      >
        <strong>Note :</strong> Scroll down to see the certificates
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={() => setShow(false)}
        ></button>
      </div>
      <h2 className={`container ${isDark ? "text-white" : "text-dark"}`}>
        Technical skills :
      </h2>
      <div className="cardContainer mb-2">
        <div
          className={`cardBoxes ${
            isDark ? "cardBoxesBlack" : "cardBoxesWhite"
          }`}
        >
          <SkillCard
            imgSrc={htmlLogo}
            cardTitle={"HTML 5"}
            percentCovered={80}
          />
        </div>
        <div
          className={`cardBoxes ${
            isDark ? "cardBoxesBlack" : "cardBoxesWhite"
          }`}
        >
          <SkillCard imgSrc={cssLogo} cardTitle={"CSS 3"} percentCovered={80} />
        </div>
        <div
          className={`cardBoxes ${
            isDark ? "cardBoxesBlack" : "cardBoxesWhite"
          }`}
        >
          <SkillCard
            imgSrc={jsLogo}
            cardTitle={"JavaScript"}
            percentCovered={75}
          />
        </div>

        <div
          className={`cardBoxes ${
            isDark ? "cardBoxesBlack" : "cardBoxesWhite"
          }`}
        >
          <SkillCard
            imgSrc={reactLogo}
            cardTitle={"React"}
            percentCovered={60}
          />
        </div>
        <div
          className={`cardBoxes ${
            isDark ? "cardBoxesBlack" : "cardBoxesWhite"
          }`}
        >
          <SkillCard imgSrc={javalogo} cardTitle={"Java"} percentCovered={80} />
        </div>

        <div
          className={`cardBoxes ${
            isDark ? "cardBoxesBlack" : "cardBoxesWhite"
          }`}
        >
          <SkillCard imgSrc={cLogo} cardTitle={"C"} percentCovered={70} />
        </div>
        <div
          className={`cardBoxes ${
            isDark ? "cardBoxesBlack" : "cardBoxesWhite"
          }`}
        >
          <SkillCard
            imgSrc={pythonLogo}
            cardTitle={"Python"}
            percentCovered={50}
          />
        </div>
      </div>
      <div className="container">
        <h2 className={`${isDark ? "text-white" : "text-dark"}`}>
          CertifiCates :
        </h2>
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide slideBar mb-4"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={certificateJS} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Certificate_c} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={certificateJava} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={certificatePython} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={certificateleader} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={certificateParticipate} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev nav-buttons"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next nav-buttons"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <h3>View or Download all Certificates :</h3>
        <div className="container d-flex w-75 justify-content-between mb-3">
          <a href="https://drive.google.com/file/d/1G796e3wA-HSbw6seXpqYWPZTpyno77ok/view?usp=sharing" target="_blank">
            <button type="button" className="btn btn-outline-primary">
              JavaScript
            </button>
          </a>
          <a href="https://drive.google.com/file/d/1iZO1iOrxEkaaXDXSw1i-1zMfpMuhEN0K/view?usp=sharing" target="_blank">
            <button type="button" className="btn btn-outline-primary">
              C Language
            </button>
          </a>
          <a href="https://drive.google.com/file/d/1hmYNbyAoFSf5FgszFoYXTpPu49UEetxw/view?usp=sharing" target="_blank">
            <button type="button" className="btn btn-outline-primary">
              Java
            </button>
          </a>
          <a href="https://drive.google.com/file/d/1ZnOdvQmlkHv5A-qkzRP2AzYepVCt2rZL/view?usp=sharing" target="_blank">
            <button type="button" className="btn btn-outline-primary">
              Python Quiz
            </button>
          </a>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}

export default Skills;
