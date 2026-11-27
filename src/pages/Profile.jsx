
import React from 'react'
import './Profile.css'
import rayhan from '../assets/rayhan.png'

const Profile = () => {
  return (
    <div className="profile-page">

      <h1 className="profile-page-title">
        My Profile
      </h1>

      <div className="profile-container">

        <div className="profile-header">
          <div className="profile-image">
            <img src={rayhan} alt="Admin Photo" className='admin'/>
          </div>

          <h2>Admin User</h2>
          <p>Administrator</p>
        </div>

        <div className="profile-details">

          <h2>Personal Information</h2>

          <div className="profile-info-grid">

            <div className="profile-info">
              <p>Full Name</p>
              <h3>MD Abu Rayhan Asif</h3>
            </div>

            <div className="profile-info">
              <p>Email Address</p>
              <h3>asifmdaburayhan@gmail.com</h3>
            </div>

            <div className="profile-info">
              <p>Phone Number</p>
              <h3>01731471431</h3>
            </div>

            <div className="profile-info">
              <p>Address</p>
              <h3>Dhaka, Bangladesh</h3>
            </div>

          </div>

        </div>

        <div className="account-details">

          <h2>Account Information</h2>

          <div className="profile-info-grid">

            <div className="profile-info">
              <p>Username</p>
              <h3>rayhanasif10</h3>
            </div>

            <div className="profile-info">
              <p>Account Role</p>
              <h3>Administrator</h3>
            </div>

            <div className="profile-info">
              <p>Account Status</p>
              <h3 className="active-status">Active</h3>
            </div>

            <div className="profile-info">
              <p>Member Since</p>
              <h3>2026</h3>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Profile
