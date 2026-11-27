
import React from 'react'
import { Link } from 'react-router'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="notfound-page">

      <div className="notfound-container">

        <h1>404</h1>

        <h2>Page Not Found!</h2>

        <p>
          Sorry, the page you are looking for
          does not exist.
        </p>

        <Link to="/dashboard" className="notfound-button">
          Go to Dashboard
        </Link>

      </div>

    </div>
  )
}

export default NotFound
