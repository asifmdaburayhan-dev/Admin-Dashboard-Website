
import React from 'react'
import './Help.css'

const Help = () => {
  return (
    <div className="help-page">

      <h1 className="help-title">
        Help Center
      </h1>

      <div className="help-welcome">
        <h2>How Can We Help You?</h2>
        <p>
          Find answers to your questions and get support
          for using the Admin Dashboard.
        </p>
      </div>

      <div className="faq-section">

        <h2>Frequently Asked Questions</h2>

        <div className="faq-container">

          <div className="faq-card">
            <h3>01. How can I update my profile?</h3>
            <p>
              Go to the Profile page to view your
              personal and account information.
            </p>
          </div>

          <div className="faq-card">
            <h3>02. How can I change my password?</h3>
            <p>
              Visit the Settings page to update
              your account information.
            </p>
          </div>

          <div className="faq-card">
            <h3>03. Where can I see reports?</h3>
            <p>
              Open the Reports page to view
              product sales and revenue information.
            </p>
          </div>

          <div className="faq-card">
            <h3>04. How can I access Dashboard?</h3>
            <p>
              Click Dashboard from the Sidebar
              navigation menu.
            </p>
          </div>

        </div>

      </div>

      <div className="contact-section">

        <h2>Contact Support</h2>

        <p>
          If you need more help, contact our support team.
        </p>

        <div className="contact-card">
          <h3>Email Support</h3>
          <p>support@example.com</p>
        </div>

        <div className="contact-card">
          <h3>Support Hours</h3>
          <p>Saturday - Thursday, 9 AM - 5 PM</p>
        </div>

      </div>

    </div>
  )
}

export default Help
