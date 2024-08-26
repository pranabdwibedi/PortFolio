import React from 'react'

function ProjectCardSite({imgURL, cardTitle, text, githubLink, websiteLink}) {
  return (
    <div className="card text-center p-3 customCard">
        <img src={imgURL} className="card-img-top" alt="..." height={100}/>
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
  )
}

export default ProjectCardSite
