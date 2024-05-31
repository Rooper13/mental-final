import React, { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Homepage1 from './pages/Homepage1'
import Homepage2 from './pages/Homepage2'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === '/masuk') {
      document.body.style.backgroundColor = 'white';
    } else if (location.pathname === '/daftar') {
      document.body.style.backgroundColor = 'white';
    } else {
      document.body.style.backgroundColor = '#EEF7FF';
    }
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage1 />} />
        <Route path='/home' element={<Homepage2 />} />
        <Route path='/masuk' element={<Login />} />
        <Route path='/daftar' element={<Register />} />
      </Routes>
    </>
  )
}

export default App
