
import React from 'react'
import './Report.css'

const Report = () => {

  const Reports = [
    {
      id: 1,
      name: 'Laptop',
      category: 'Electronics',
      sales: 25,
      revenue: '$12,500',
      status: 'Completed'
    },
    {
      id: 2,
      name: 'Mobile',
      category: 'Electronics',
      sales: 40,
      revenue: '$8,000',
      status: 'Completed'
    },
    {
      id: 3,
      name: 'Keyboard',
      category: 'Accessories',
      sales: 30,
      revenue: '$1,500',
      status: 'Pending'
    },
    {
      id: 4,
      name: 'Mouse',
      category: 'Accessories',
      sales: 50,
      revenue: '$2,000',
      status: 'Completed'
    }
  ]

  return (
    <div className="report-page">

      <h1 className="report-title">
        Reports
      </h1>

      <div className="report-container">

        <div className="report-header">
          <h2>Sales Reports</h2>
          <p>View your product sales and revenue information</p>
        </div>

        <div className="report-table-wrapper">

          <table className="report-table">

            <thead>
              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Category</th>
                <th>Sales</th>
                <th>Revenue</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {Reports.map((report) => (
                <tr key={report.id}>
                  <td>{report.id}</td>
                  <td>{report.name}</td>
                  <td>{report.category}</td>
                  <td>{report.sales}</td>
                  <td>{report.revenue}</td>
                  <td>
                    <span className={
                      report.status === 'Completed'
                        ? 'status-completed'
                        : 'status-pending'
                    }>
                      {report.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </div>

    </div>
  )
}

export default Report
