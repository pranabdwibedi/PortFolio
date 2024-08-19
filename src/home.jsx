import React from 'react'
import './home.css';
import imagePath from './profile.jpg';

function Home() {
  return (
    <div className = "custom-container">
      <img src={imagePath} alt="profile" className='profilePhoto'/>
      <div className="CustomAbout">
        <p>Passionate about technology since childhood, I'm a dedicated Information Technology student from Barriada. Currently pursuing my Bachelor's degree, I excel in programming languages like Java, Python, and C, with a keen interest in cybersecurity and Web Development.</p>
      </div>
    </div>
  )
}

export default Home
