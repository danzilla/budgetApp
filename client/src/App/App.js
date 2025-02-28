import React from "react"
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import Authentication from './Authentication/Auth'
import Dashboard from './Dashboard/Dashboard'

// App
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

