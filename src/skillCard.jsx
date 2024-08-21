import React from "react";
import "./skills.css";
function SkillCard({ imgSrc, cardTitle, percentCovered }) {
  return (
    <div>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={imgSrc}
              className="img-fluid rounded-start customImage"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{cardTitle}</h5>
              <div
                className="progress"
                role="progressbar"
                aria-label="Example with label"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className={`progress-bar w-${percentCovered} width-${percentCovered}`}>
                    {percentCovered}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
