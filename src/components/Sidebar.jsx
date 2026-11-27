
import React from 'react'
import { NavLink } from 'react-router'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">

      <h2 className="sidebar-title">
        Admin Panel
      </h2>

      <div className="sidebar-menu">
        <NavLink to="/dashboard" className="sidebar-link">
          Dashboard
        </NavLink>

        <NavLink to="/profile" className="sidebar-link">
          Profile
        </NavLink>

        <NavLink to="/settings" className="sidebar-link">
          Settings
        </NavLink>

        <NavLink to="/reports" className="sidebar-link">
          Reports
        </NavLink>

        <NavLink to="/help" className="sidebar-link">
          Help
        </NavLink>
      </div>

    </div>
  )
}

export default Sidebar
