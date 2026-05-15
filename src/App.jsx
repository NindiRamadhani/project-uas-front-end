import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './features/landing/pages/LandingPage';
import RegisterPage from './features/auth/pages/RegisterPage';
import LoginPage from './features/auth/pages/LoginPage';
import LupaKataSandi from './features/auth/pages/LupaKataSandi';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/lupasandi" element={<LupaKataSandi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;