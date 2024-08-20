import React from "react";
import "./education.css";
import Navbar from "./navbar";
function Education() {
  return (
    <div className="ParentContainer">
    <Navbar/>
    <div className="custom-container">
      <h3>Education : </h3>
      <table className="tableClass">
        <thead>
          <tr>
            <th>Course</th>
            <th>College Name</th>
            <th>Mark secured</th>
            <th>Certificates</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>B.Tech</td>
            <td>
              <a href="https://bcetodisha.ac.in/">
                Balasore College of Engineering and Technology
              </a>{" "}
              (2021 - 2025)
            </td>
            <td>8.3</td>
            <td>
              <a
                href="https://drive.google.com/file/d/1xpvNAwOp9I0tKqHF_hZA4dkL5jBev6l_/view?usp=drive_link"
                target="_blank"
              >
                <button type="button" className="btn btn-success">
                  View Marksheet
                </button>
              </a>
            </td>
          </tr>
          <tr>
            <td>Intermediate</td>
            <td>
              <a href="http://www.jietorissa.org/">
                Jhadeswar +2 Sc. Residential Higher Secondary School
              </a>{" "}
              (2019 - 2021)
            </td>
            <td>80 %</td>
            <td>
              <a
                href="https://drive.google.com/file/d/1ZYPPx1QZkYcXybpywA5RCQSktlO_bSvc/view?usp=sharing"
                target="_blank"
              >
                <button type="button" className="btn btn-success">
                  View Marksheet
                </button>
              </a>
            </td>
          </tr>
          <tr>
            <td>High School</td>
            <td>
              <p>Raghunath High School, Raikoma, Mayurbhanj (2016-2019)</p>
            </td>
            <td>75 %</td>
            <td>
              <a
                href="https://drive.google.com/file/d/1ixO-z57nZwAQ_2NugyXvwDsYXP_UYrnE/view?usp=sharing"
                target="_blank"
              >
                <button type="button" className="btn btn-success">
                  View Marksheet
                </button>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="aboutMyEducation">
        <h3>About My College : </h3>
        <p>I have done my Bachelor's degree at Balasore College of Engineering and Technology in Information Technology(IT). My college is situated near the national highway 5(NH5) at sergarh, balasore and which is a very prestigious college for engineering studies in northen Odisha. In my college time I was the Class Representative of our class which taught me alot about the team building and managing people. I was also a ISTE(Indian Society for Technical Education) volunter when my college hosted the 25th ISTE student convention in the year 2024.</p>
      </div>
    </div>
    </div>
  );
}

export default Education;
