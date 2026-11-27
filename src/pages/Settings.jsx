
import React from 'react'
import './Settings.css'

const Settings = () => {
  return (
    <div className="settings-page">

      <h1 className="settings-title">
        Settings
      </h1>

      <div className="settings-container">

        <div className="settings-header">
          <h2>Account Settings</h2>
          <p>Manage your account information</p>
        </div>

        <form className="settings-form">

          <div className="settings-input-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>

          <div className="settings-input-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="settings-input-group">
            <label>Phone Number</label>
            <input type="text" placeholder="Enter your phone number" />
          </div>

          <div className="settings-input-group">
            <label>Username</label>
            <input type="text" placeholder="Enter username" />
          </div>

          <div className="settings-input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter new password" />
          </div>

          <div className="settings-input-group">
            <label>Language</label>
            <select>
              <option>English</option>
              <option>Bangla</option>
            </select>
          </div>

          <div className="notification-setting">
            <input type="checkbox" id="notification" />
            <label htmlFor="notification">
              Enable Notifications
            </label>
          </div>

          <button type="submit" className="save-button">
            Save Changes
          </button>

        </form>

      </div>

    </div>
  )
}

export default Settings
