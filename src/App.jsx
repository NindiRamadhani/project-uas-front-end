import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Komponen (Pastikan path folder sudah sesuai dengan struktur di sidebar kamu)
import LandingPage from './features/landing/pages/LandingPage';
import RegisterPage from './features/auth/pages/RegisterPage'; 

function App() {
  return (
    <Router>
      <Routes>
        {/* 
            Path "/" adalah halaman utama. 
            Akses di browser: localhost:5173/
        */}
        <Route path="/" element={<LandingPage />} />
        
        {/* 
            Path "/register" adalah halaman daftar. 
            Akses di browser: localhost:5173/register
        */}
        <Route path="/register" element={<RegisterPage />} />

        {/* 
            Tips: Jika ingin menambah halaman login nanti, 
            tinggal tambah <Route path="/login" element={<LoginPage />} /> di bawah sini
        */}
      </Routes>
    </Router>
  );
}

export default App;