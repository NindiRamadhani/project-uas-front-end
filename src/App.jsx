import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './features/landing/pages/LandingPage';
import RegisterPage from './features/auth/pages/RegisterPage';
import LoginPage from './features/auth/pages/LoginPage';
import LupaKataSandi from './features/auth/pages/LupaKataSandi';
import VerifikasiEmail from './features/auth/pages/VerifikasiEmail';
import ResetPassword from './features/auth/pages/ResetPassword';
import HomePage from './features/home/pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/lupasandi" element={<LupaKataSandi />} />
        <Route path="/Verifikasi" element={<VerifikasiEmail />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;