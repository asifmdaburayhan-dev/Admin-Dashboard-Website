
import React from 'react'
import './Navbar.css'
import rayhan from '../assets/rayhan.png'

const Navbar = () => {
  return (
    <div className="navbar">

      <div>
        <h2 className="navbar-title">
          Admin Dashboard
        </h2>
        <p className="navbar-welcome">
          Welcome back, MD Abu Rayhan Asif!
        </p>
      </div>

      <div className="navbar-profile">
        <div className="profile-avatar">
          <img src={rayhan} alt="Admin Photo" className='admin0'/>
        </div>

        <div>
          <h4>MD Abu Rayhan Asif</h4>
          <p>Administrator</p>
        </div>
      </div>

    </div>
  )
}

export default Navbar
