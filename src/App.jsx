import React, { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Homepage1 from './pages/Homepage1'
import Homepage2 from './pages/Homepage2'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import VerificationPassword from './pages/VerificationPassword'
import ResetPassword from './pages/ResetPassword'

function App() {

  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === '/masuk' || location.pathname === '/daftar' || location.pathname === '/lupa-sandi' || location.pathname === '/verifikasi-sandi' || location.pathname === '/reset-sandi') {
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
        <Route path='/lupa-sandi' element={<ForgotPassword />} />
        <Route path='/verifikasi-sandi' element={<VerificationPassword />} />
        <Route path='/reset-sandi' element={<ResetPassword />} />
      </Routes>
    </>
  )
}

export default App
