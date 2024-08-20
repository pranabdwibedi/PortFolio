import React from 'react'
import './home.css';
import Navbar from './navbar';
import imagePath from './profile.jpg';

function Home() {
  return (
    <div className='ParentContainer'>
    <Navbar/>
    <div className = "custom-container">
      <img src={imagePath} alt="profile" className='profilePhoto'/>
      <div className="CustomAbout">
        <h3>Pranab Kumar Dwibedi</h3>
        <p>Passionate about technology since childhood, I'm a dedicated Information Technology student from Baripada. Currently pursuing my Bachelor's degree, I excel in programming languages like Java, Python, and C, with a keen interest in cybersecurity and Web Development.</p>
      </div>
    </div>
    </div>
  )
}

export default Home
