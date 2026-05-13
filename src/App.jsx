import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './features/landing/pages/LandingPage';
// 1. Tambahkan import RegisterPage di bawah ini
import RegisterPage from './features/auth/pages/RegisterPage'; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman utama tetap LandingPage */}
        <Route path="/" element={<LandingPage />} />
        
        {/* 2. Tambahkan route baru untuk halaman Register */}
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;