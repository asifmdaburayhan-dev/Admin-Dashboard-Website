
import React from 'react'
import { Routes, Route } from 'react-router'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Report from './pages/Report'
import Help from './pages/Help'
import NotFound from './pages/NotFound'
import './App.css'

const App = () => {
  return (
    <div className="app-layout">

      <Sidebar />

      <div className="main-layout">

        <Navbar />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/reports" element={<Report />} />
            <Route path="/help" element={<Help />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

      </div>

    </div>
  )
}

export default App
