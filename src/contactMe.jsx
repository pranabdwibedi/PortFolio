import React from "react";
import "./CSS/contactMe.css";
import linkedInLogo from "./assets/linkedInLogo.svg";
import gitHubLogo from "./assets/gitHub.svg";
import instaLogo from "./assets/instaLogo.svg";
import fbLogo from "./assets/fbLogo.svg";
import profilePic from "./assets/profile.jpg";

function ContactMe({ isDark }) {
  return (
    <div
      className={`contactMe-parent-container ${
        isDark ? "darkMode" : "lightMode"
      }`}
    >
      {/* <div className="card mt-5">
         <h2 className='text-center'><b><u>CONTACT ME</u></b></h2>
         <div className="socialLinks">
         <a href="https://www.linkedin.com/in/pranab-dwibedi/"><img src={linkedInLogo} height={40}/></a>
         <a href="https://github.com/pranabdwibedi"><img src={gitHubLogo} height={40}/></a>
         <a href="https://www.instagram.com/pranab_dwibedi/"><img src={instaLogo} alt="" height={50}/></a>
         <a href="https://www.facebook.com/pranab.kumar.dwibedi"><img src={fbLogo} alt="" /></a>
         </div>
         <p className='m-auto'>Email me at :- <b>pranabkumardwiedi@gmail.com</b></p>
      </div> */}
      <div className="d-flex width-80 m-auto height-90vh">
        <img src={profilePic} alt="" className="w-50 profileImage" />
        <div className="rightBox w-50 w-100 d-flex flex-column">
          <div className="rightupBox h-40 d-flex">
            <p className="heading ps-5">Contact Me</p>
          </div>
          <div className="rightDownBox h-60 w-100">
            <div className="socialLinks">
              <a href="https://www.linkedin.com/in/pranab-dwibedi/">
                <img src={linkedInLogo} height={40} className={`${isDark?"filter-invert":""}`} />
              </a>
              <a href="https://github.com/pranabdwibedi">
                <img src={gitHubLogo} height={40} className={`${isDark?"filter-invert":""}`}/>
              </a>
              <a href="https://www.instagram.com/pranab_dwibedi/">
                <img src={instaLogo} alt="" height={50} />
              </a>
              <a href="https://www.facebook.com/pranab.kumar.dwibedi">
                <img src={fbLogo} alt="" />
              </a>
            </div>
            <p className="email">Email me at : pranabkumardwibedi@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
