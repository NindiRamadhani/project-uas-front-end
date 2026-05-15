import React, { useState } from 'react';
import './RegisterPage.css';
// Pastikan path ini benar: keluar 3 folder (pages, auth, features) baru ke assets
import logo from '../../../assets/logoinkluspace.png'; 

const RegisterPage = () => {
  const [role, setRole] = useState('disabilitas');

  return (
    <div className="floating-wrapper">
      <div className="register-card">
        {/* Header Ungu */}
        <div className="card-header">
          <img src={logo} alt="InkluSpace Logo" className="logo-img" />
          <h1>InkluSpace</h1>
        </div>

        <form className="card-body" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <label>Nama lengkap :</label>
            <input type="text" name="namaLengkap" />
          </div>
          
          <div className="input-group">
            <label>Nomor Telepon :</label>
            <input type="tel" name="nomorTelepon" />
          </div>

          <div className="input-group">
            <label>Email :</label>
            <input type="email" name="email" />
          </div>

          <div className="input-group">
            <label>Username :</label>
            <input type="text" name="username" />
          </div>

          <div className="input-group">
            <label>Password :</label>
            <input type="password" name="password" />
          </div>

          <div className="input-group">
            <label>Konfirmasi password :</label>
            <input type="password" name="konfirmasiPassword" />
          </div>

          <div className="role-selection">
            <strong>Masuk sebagai :</strong>
            <div className="radio-container">
              <label className="radio-item">
                <input 
                  type="radio" 
                  name="role" 
                  checked={role === 'disabilitas'} 
                  onChange={() => setRole('disabilitas')}
                />
                Penyandang Disabilitas
              </label>
              <label className="radio-item">
                <input 
                  type="radio" 
                  name="role" 
                  checked={role === 'relawan'} 
                  onChange={() => setRole('relawan')}
                />
                Relawan
              </label>
            </div>
          </div>

          <p className="agreement-text">
            Dengan klik tombol daftar, saya telah menyetujui <br/>
            <strong>Ketentuan layanan InkluSpace</strong>
          </p>

          <div className="button-row">
            <button type="submit" className="btn-pink">Registrasi</button>
            <button type="button" className="btn-pink">Masuk</button>
          </div>

          <p className="footer-login">
            Sudah memiliki akun Inkluspace? <strong>Masuk</strong>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;