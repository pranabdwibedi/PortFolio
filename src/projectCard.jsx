import React, { createElement } from "react";
import "./CSS/project.css"

function ProjectCard({imgURL, cardTitle, text, githubLink}) {
  return (
      <div className="card text-center p-3 customCard">
        <img src={imgURL} className="card-img-top CardImage" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{cardTitle}</h5>
          <p className="card-text">
            {text}
          </p>
          <a href={githubLink} className="btn btn-primary m-auto" target="_blank">
            Github
          </a>
        </div>
      </div>
  );
}
function ProjectCardSite({imgURL, cardTitle, text, githubLink, websiteLink}) {
  return (
    <div className="card text-center p-3 customCard">
        <img src={imgURL} className="card-img-top CardImage" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{cardTitle}</h5>
          <p className="card-text">
            {text}
          </p>
          <div className="m-auto d-flex justify-content-evenly">
          <a href={githubLink} className="btn btn-primary" target="_blank">
            Github
          </a>
          <a href={websiteLink} className="btn btn-primary" target="_blank">Website</a>
          </div>
        </div>
      </div>
  )
}

export {ProjectCard,ProjectCardSite};
