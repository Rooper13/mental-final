 import React, { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Homepage1 from './pages/Homepage1'
import Homepage2 from './pages/Homepage2'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import VerificationPassword from './pages/VerificationPassword'
import ResetPassword from './pages/ResetPassword'
import OnlineConsultation from './pages/OnlineConsultation'
import DoctorSchedule from './pages/DoctorSchedule'
import ProfileWebsite from './pages/ProfileWebsite'
import DiseaseDirectory from './pages/DiseaseDirectory'
import DiseaseDetail1 from './pages/DiseaseDetail1'
import DiseaseDetail2 from './pages/DiseaseDetail2'
import DiseaseDetail3 from './pages/DiseaseDetail3'
import DiseaseDetail4 from './pages/DiseaseDetail4'
import DiseaseDetail5 from './pages/DiseaseDetail5'
import DiseaseDetail6 from './pages/DiseaseDetail6'
import MedicineDirectory from './pages/MedicineDirectory'

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
        <Route path='/konsultasi-online' element={<OnlineConsultation />} />
        <Route path='/jadwal-dokter' element={<DoctorSchedule />} />
        <Route path='/profil-website' element={<ProfileWebsite />} />
        <Route path='/direktori-penyakit' element={<DiseaseDirectory />} />
        <Route path='/direktori-penyakit/1' element={<DiseaseDetail1 />} />
        <Route path='/direktori-penyakit/2' element={<DiseaseDetail2 />} />
        <Route path='/direktori-penyakit/3' element={<DiseaseDetail3 />} />
        <Route path='/direktori-penyakit/4' element={<DiseaseDetail4 />} />
        <Route path='/direktori-penyakit/5' element={<DiseaseDetail5 />} />
        <Route path='/direktori-penyakit/6' element={<DiseaseDetail6 />} />
        <Route path='/direktori-obat' element={<MedicineDirectory />} />
      </Routes>
    </>
  )
}

export default App
