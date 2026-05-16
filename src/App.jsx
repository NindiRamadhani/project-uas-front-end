// App.jsx

import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import LandingPage from './features/landing/pages/LandingPage';

import RegisterPage from './features/auth/pages/RegisterPage';

import LoginPage from './features/auth/pages/LoginPage';

import LupaKataSandi from './features/auth/pages/LupaKataSandi';

import VerifikasiEmail from './features/auth/pages/VerifikasiEmail';

import ResetPassword from './features/auth/pages/ResetPassword';

import HomePage from './features/home/pages/HomePage';

import Chat from './features/chat/pages/Chat';

import BerbagiInformasi from './features/Information/pages/BerbagiInformasi';

import RequestHelp from './MintaBantuan/RequestHelp';

import BerbagiCerita from './features/stories/pages/BerbagiCerita';

import Logout from './features/logout/pages/Logout';

/* IMPORT PROFIL */
import ProfilPenyandangDisabilitas from './features/ProfilPenyandangDisabilitas/ProfilPenyandangDisabilitas';

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* LANDING */}
        <Route
          path="/"
          element={<LandingPage />}
        />

        {/* REGISTER */}
        <Route
          path="/register"
          element={<RegisterPage />}
        />

        {/* LOGIN */}
        <Route
          path="/login"
          element={<LoginPage />}
        />

        {/* LUPA PASSWORD */}
        <Route
          path="/lupasandi"
          element={<LupaKataSandi />}
        />

        {/* VERIFIKASI */}
        <Route
          path="/Verifikasi"
          element={<VerifikasiEmail />}
        />

        {/* RESET PASSWORD */}
        <Route
          path="/reset"
          element={<ResetPassword />}
        />

        {/* HOME */}
        <Route
          path="/home"
          element={<HomePage />}
        />

        {/* CHAT */}
        <Route
          path="/chat"
          element={<Chat />}
        />

        {/* INFORMASI */}
        <Route
          path="/Informasi"
          element={<BerbagiInformasi />}
        />

        {/* MINTA BANTUAN */}
        <Route
          path="/request-help"
          element={<RequestHelp />}
        />

        {/* PROFIL DISABILITAS */}
        <Route
          path="/profil-disabilitas"
          element={<ProfilPenyandangDisabilitas />}
        />

        {/* BERBAGI CERITA */}
        <Route
          path="/berbagi cerita"
          element={<BerbagiCerita />}
        />

        {/* LOGOUT */}
        <Route
          path="/logout"
          element={<Logout />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;