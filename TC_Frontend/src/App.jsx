import React, { useState } from 'react'
import LogIn from './pages/LogIn'
import HomeAdmin from './pages/admin/Home'
import HomeRH from './pages/RH/Home'
import HomeEmploye from './pages/employe/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <div className="flex  h-screen bg-color4">


    <Router>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/admin" element={<HomeAdmin />} />
        <Route path="/RH" element={<HomeRH />} />
        <Route path="/Employe" element={<HomeEmploye />} />
        {/* Add a default route if needed */}
        <Route path="/" element={<LogIn />} />
      </Routes>
    </Router>
    
    </div>
  )
}