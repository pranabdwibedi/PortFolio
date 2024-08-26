import React from "react";
import "./CSS/project.css";
import {ProjectCard,ProjectCardSite} from "./projectCard";
import drdoLogo from "./assets/drdoLogo.svg";
import spotifyLogo from "./assets/SpotifyLogo.png";
import calculatorLogo from "./assets/CalculatorLogo.png";
import CCLogo from "./assets/CCLogo.png";
import TTTLogo from './assets/TTTLogo.png';
import SPSLogo from './assets/SPSLogo.png';
import pCheckerLogo from './assets/pCheckerLogo.png';
import pgeneratorLogo from './assets/pGeneratorLogo.png';

function Project({ isDark }) {
  const drdoCardAbout =
    "The Range Meeting Summarizer is a Python-based project that automatically transcribes audio and video recordings of meetings and generates concise summaries.";
  const spotifycardAbout = "The Spotify clone is a website built using HTML, CSS, JS which adds many functions like play, pause, previous, next song and theme is exact like spotify";
  const C_C_CardAbout = "The Currency Converter is a website built using HTML, CSS, JS which uses API to fetch real time values of the currencies and convert them accordingly.";
  const TTTCardAbout = "The Tic-Tac-Toe website is a game that is built using HTML, CSS, JS. It is Duo player game and players can play as many times they want.";
  const SPSCardAbout = "The Stone Paper Scissor is a game that is built using HTML, CSS, JS. It is a single player game, and the oponent player is machine.";
  const calcCardAbout = "The Calculator is a website that can do all your mathematical calculation in seconds which built using HTML, CSS, JS.";
  const pCheckerCardAbout = "The Password Strength Checker is a utility program that is built using java which check your password's Strength.";
  const pGeneratorCardAbout = "The Strong Password Generator is a utility program that is built using java which generates a strong password for you.";
  return (
    <div
      className={`Project-Parent-Container ${
        isDark ? "darkMode" : "lightMode"
      }`}
    >
      <div className="container">
        <h3 className="mb-5">Projects :</h3>
        <div className="projectCardContainer mb-5">
          <ProjectCard
            imgURL={drdoLogo}
            cardTitle={"Range Meeting Summarizer"}
            text={drdoCardAbout}
            githubLink={
              "https://github.com/pranabdwibedi/Range-Meeting-Summarizer"
            }
          />
          <ProjectCardSite
            imgURL={spotifyLogo}
            cardTitle={"Spotify Clone"}
            text={spotifycardAbout}
            githubLink="https://github.com/pranabdwibedi/Spotify-Clone"
            websiteLink="https://pranabdwibedi.github.io/Spotify-Clone/"
          />
          <ProjectCardSite imgURL={CCLogo}
            cardTitle="Currency Converter"
            text={C_C_CardAbout}
            githubLink={
              "https://github.com/pranabdwibedi/Currency-Converter"
            } websiteLink="https://pranabdwibedi.github.io/Currency-Converter/"/>
          <ProjectCardSite
            imgURL={TTTLogo}
            cardTitle={"Tic Tac Toe Game"}
            text={TTTCardAbout}
            githubLink="https://github.com/pranabdwibedi/Tic-Tac-Toe_Game"
            websiteLink="https://pranabdwibedi.github.io/Tic-Tac-Toe_Game/"
          />
          <ProjectCardSite
            imgURL={SPSLogo}
            cardTitle="Stone Paper Scissor Game"
            text={SPSCardAbout}
            githubLink={
              "https://github.com/pranabdwibedi/Stone-Paper-Scissors_Game"
            }
            websiteLink="https://pranabdwibedi.github.io/Stone-Paper-Scissors_Game/"
          />
          <ProjectCardSite
            imgURL={calculatorLogo}
            cardTitle={"Simple Calculator"}
            text={calcCardAbout}
            githubLink={
              "https://github.com/pranabdwibedi/CalCulator"
            }
            websiteLink={"https://pranabdwibedi.github.io/CalCulator/"}
          />
          <ProjectCard
            imgURL={pCheckerLogo}
            cardTitle="Password Strength Checker"
            text={pCheckerCardAbout}
            githubLink={
              "https://github.com/pranabdwibedi/Check-Password-Strength"
            }
          />
          <ProjectCard
            imgURL={pgeneratorLogo}
            cardTitle="Strong Password Generator"
            text={pGeneratorCardAbout}
            githubLink={
              "https://github.com/pranabdwibedi/Password-Generator-using-JAVA"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
