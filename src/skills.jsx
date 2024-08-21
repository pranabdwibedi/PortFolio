import React from "react";
import SkillCard from "./skillCard";
import reactLogo from "./assets/reactLogo.svg";
import htmlLogo from "./assets/html-5.png";
import cssLogo from "./assets/css-3.png";
import jsLogo from "./assets/js.png"
import javalogo from "./assets/java.png"
import cLogo from "./assets/letter-c.png"
import pythonLogo from "./assets/python.png"
import "./skills.css";

function Skills({isDark}) {
  return (
    <div className={`${isDark ? "skill-parent-containerBlack" : "skill-parent-containerWhite"}`}>
      <div className="cardContainer">
        <div className="cardBoxes">
          <SkillCard
            imgSrc={htmlLogo}
            cardTitle={"HTML 5"}
            percentCovered={80}
          />
        </div>
        <div className="cardBoxes">
          <SkillCard
            imgSrc={cssLogo}
            cardTitle={"CSS 3"}
            percentCovered={80}
          />
        </div>
        <div className="cardBoxes">
          <SkillCard
            imgSrc={jsLogo}
            cardTitle={"JavaScript"}
            percentCovered={75}
          />
        </div>

        <div className="cardBoxes">
          <SkillCard
            imgSrc={reactLogo}
            cardTitle={"React"}
            percentCovered={60}
          />
        </div>
        <div className="cardBoxes">
          <SkillCard
            imgSrc={javalogo}
            cardTitle={"Java"}
            percentCovered={80}
          />
        </div>

        <div className="cardBoxes">
          <SkillCard
            imgSrc={cLogo}
            cardTitle={"C"}
            percentCovered={70}
          />
        </div>
        <div className="cardBoxes">
          <SkillCard
            imgSrc={pythonLogo}
            cardTitle={"Python"}
            percentCovered={50}
          />
        </div>
      </div>
      {/* <div className="container">
        <h2>CertifiCates :</h2>

      </div> */}
    </div>
  );
}

export default Skills;
