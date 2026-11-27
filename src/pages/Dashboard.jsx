
import React from 'react'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className="dashboard">

      <h1 className="dashboard-title">
        Dashboard Overview
      </h1>

      <div className="stats-container">

        <div className="stats-card">
          <h3>Total Users</h3>
          <h1>1,000</h1>
          <p>Registered Users</p>
        </div>

        <div className="stats-card">
          <h3>Total Products</h3>
          <h1>350</h1>
          <p>Available Products</p>
        </div>

      </div>

      
      <div className="revenue-section">
        
        <h2 className="section-title">
          Revenue Overview
        </h2>
        
        <div className="revenue-container">
        
          <div className="revenue-card">
            <p>Total Revenue</p>
            <h2>$25,000</h2>
            <span>Overall Earnings</span>
          </div>
        
          <div className="revenue-card">
            <p>Monthly Revenue</p>
            <h2>$5,000</h2>
            <span>This Month's Earnings</span>
          </div>
        
        </div>
        
      </div>
        

      
      <div className="recent-reports">
        
        <h2>Recent Reports</h2>
        
        <table className="recent-table">
        
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Category</th>
              <th>Sales</th>
              <th>Revenue</th>
            </tr>
          </thead>
        
          <tbody>
            <tr>
              <td>Laptop</td>
              <td>Electronics</td>
              <td>25</td>
              <td>$12,500</td>
            </tr>
        
            <tr>
              <td>Mobile</td>
              <td>Electronics</td>
              <td>40</td>
              <td>$8,000</td>
            </tr>
        
            <tr>
              <td>Keyboard</td>
              <td>Accessories</td>
              <td>30</td>
              <td>$1,500</td>
            </tr>
        
            <tr>
              <td>Mouse</td>
              <td>Accessories</td>
              <td>50</td>
              <td>$2,000</td>
            </tr>
          </tbody>
        
        </table>
        
      </div>
        
        
    </div>
  )
}

export default Dashboard
