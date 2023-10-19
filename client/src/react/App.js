import React from "react"
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import Authentication from './Authentication/Auth'
import Dashboard from './Dashboard/Dashboard'

// Features
const Features = (props) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
// Export
export default Features