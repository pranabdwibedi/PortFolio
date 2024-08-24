import React from 'react'
import './CSS/internship.css';
import drdoLogo from "./assets/DRDOLogo.png"
import drdoawardImage from "./assets/DRDO Award.jpg";

function Internship({isDark}) {
  return (
    <div className={`Internship-parent-container ${isDark?"darkMode":"LightMode"}`}>
      <div className="internships-container">
        <h3 className='mt-3'>Internships :</h3>
        <div className="DRDOInternShip mt-3">
          <div className="internshipHeader d-flex justify-content-between">
          <h4>Defence Research and Development Organisation (DRDO) : </h4>
          <img src={drdoLogo} alt="DRDO Logo"/>
          </div>
          <p>I have done a One Month Internship from a prestigious organization like <a href="https://www.drdo.gov.in/drdo/labs-and-establishments/proof-experimental-establishment-pxe" target='_blank' className={`${isDark?"darkMode":"LightMode"}`}><b>Proof & Experimental Establishment (PXE)</b> which is a lab/estalishment of <a href="https://www.drdo.gov.in/drdo/what-is-full-form-drdo#:~:text=What%20is%20the%20full%20form,of%20Defence%2C%20Government%20of%20India" className={`${isDark?"darkMode":"LightMode"}`}><b>Defence Research and Development Organisation</b></a></a> which is situated at the Chandipur, Balasore, Odisha. During my internship, I developed the <b>"Range Meeting Summarizer"</b>, a utility that converts video or audio meeting files into summarized text format, highlighting all key points. This project enhanced my technical expertise and contributed to streamlining communication processes within the organization.</p>
          <h5>View or Download Certificate and Project Report :</h5>
            <div className="d-flex justify-content-center gap-5">
            <a class="btn btn-outline-primary" href="https://drive.google.com/file/d/1DSrezGRg_XEwL-FeVStMM6w53rCWZQYK/view?usp=sharing" role="button" target='_blank'>Certificate</a>
            <a class="btn btn-outline-primary" href="https://drive.google.com/file/d/11wHLxCUhbv_zfToeH5ore9pxU5w1A7AG/view?usp=sharing" role="button" target='_blank'>Project Report</a>
            </div>
            <div className="photos">
              <h5>Photo Galery :</h5>
              <img src={drdoawardImage} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Internship
