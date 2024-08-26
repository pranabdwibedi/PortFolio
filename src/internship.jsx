import React from "react";
import "./CSS/internship.css";
import drdoLogo from "./assets/drdoLogo.svg";
import drdoawardImage from "./assets/DRDO Award.jpg";
import groupImage from "./assets/Group Image.JPG";

function Internship({ isDark }) {
  return (
    <div
      className={`Internship-parent-container ${
        isDark ? "darkMode" : "LightMode"
      }`}
    >
      <div className="internships-container">
        <h3 className="mt-3">Internships :</h3>
        <div className="DRDOInternShip mt-3">
          <div className="internshipHeader d-flex justify-content-between align-items-center mb-5">
            <h4>Defence Research and Development Organisation (DRDO) : </h4>
            <div className="logoContainer">
              <img src={drdoLogo} alt="DRDO Logo" />
            </div>
          </div>
          <p>
            I have done a One Month Internship from a prestigious organization
            like{" "}
            <a
              href="https://www.drdo.gov.in/drdo/labs-and-establishments/proof-experimental-establishment-pxe"
              target="_blank"
              className={`${isDark ? "darkMode" : "LightMode"}`}
            >
              <b>Proof & Experimental Establishment (PXE)</b></a> which is a
              lab/estalishment of
              <a
                href="https://www.drdo.gov.in/drdo/what-is-full-form-drdo#:~:text=What%20is%20the%20full%20form,of%20Defence%2C%20Government%20of%20India"
                className={`${isDark ? "darkMode" : "LightMode"}`}
              >
                <b>Defence Research and Development Organisation</b>
              </a>
            which is situated at the Chandipur, Balasore, Odisha. During my
            internship, I developed the <b>"Range Meeting Summarizer"</b>, a
            utility that converts video or audio meeting files into summarized
            text format, highlighting all key points. This project enhanced my
            technical expertise and contributed to streamlining communication
            processes within the organization.
          </p>
          <h5>View or Download Certificate and Project Report :</h5>
          <div className="d-flex justify-content-center gap-5">
            <a
              className="btn btn-outline-primary"
              href="https://drive.google.com/file/d/1DSrezGRg_XEwL-FeVStMM6w53rCWZQYK/view?usp=sharing"
              role="button"
              target="_blank"
            >
              Certificate
            </a>
            <a
              className="btn btn-outline-primary"
              href="https://drive.google.com/file/d/11wHLxCUhbv_zfToeH5ore9pxU5w1A7AG/view?usp=sharing"
              role="button"
              target="_blank"
            >
              Project Report
            </a>
          </div>
          <div className="photosContainer d-flex flex-column ">
            <h5 className="mb-3">Photo Galery :</h5>
            <img src={drdoawardImage} alt="" className="awardImage" />
            <p className="mb-5">
              In this photo, I am honored to receive a certificate from the{" "}
              <b>Shri Subodha Kumar Nayak sir</b>, Scientist 'G' has been
              appointed as Director, PXE with effect from 19 Jan 2024,
              acknowledging my successful completion of an internship. Standing
              beside the Director, on his right, is the HRD Head and Additional
              director <b>Dr. SankarSan Padhy sir</b> who oversaw the internship
              program. Also present in the photo are Additional Director and
              Associate Director, who provided invaluable guidance throughout
              the project.
            </p>
            <img src={groupImage} alt="" className="groupImage" />
            <p className="mb-5 text-wrap">
              This photo captures a memorable moment with all my batch mates
              from the PXE DRDO Summer Internship Program. After the certificate
              distribution, we gathered for a group photo with the Director of
              PXE DRDO, seated in the center, along with the Additional
              Directors and Associate Director. This internship was an enriching
              experience, allowing us to collaborate, learn, and contribute to
              real-world projects under the guidance of distinguished
              professionals.
              <br />
              The camaraderie and knowledge shared during this program have been
              invaluable, marking a significant chapter in my journey towards
              becoming a tech expert in the ever-evolving field of technology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Internship;
