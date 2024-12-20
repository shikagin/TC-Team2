import React, { useState } from 'react'
import LogIn from './pages/LogIn'
import HomeAdmin from './pages/admin/Home'
import HomeRH from './pages/RH/Home'
import HomeEmploye from './pages/employe/Home'

export default function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">

      
      <Navbar />
      <Routes>
        <Route path ="/login"  element={LogIn} />
        <Route path="/admin" element= {HomeAdmin}/>
        <Route path="/RH" element={HomeRH} />
        <Route path="/Employe" element={HomeEmploye} />

        {/* <Route path="/" element={} /> */}
        
      </Routes> 
      <Footer /> 
    </div>
  )
}