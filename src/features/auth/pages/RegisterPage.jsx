import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterPage.css';
import logo from '../../../assets/logoinkluspace.png';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    namaLengkap: '',
    nomorTelepon: '',
    email: '',
    username: '',
    password: '',
    konfirmasiPassword: '',
    role: 'disabilitas'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRoleChange = (role) => {
    setFormData({ ...formData, role });
  };

  const handleRegister = () => {
    alert(`Data Registrasi:\n
Nama: ${formData.namaLengkap}\n
No. Telepon: ${formData.nomorTelepon}\n
Email: ${formData.email}\n
Username: ${formData.username}\n
Password: ${formData.password}\n
Konfirmasi: ${formData.konfirmasiPassword}\n
Role: ${formData.role}`);
    // Di sini bisa tambahkan POST ke backend
  };

  return (
    <div className="floating-wrapper">
      <div className="register-card">
        <div className="card-header">
          <img src={logo} alt="InkluSpace Logo" className="logo-img" />
          <h1>InkluSpace</h1>
        </div>

        <form className="card-body" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <label>Nama lengkap :</label>
            <input type="text" name="namaLengkap" value={formData.namaLengkap} onChange={handleChange} />
          </div>
          
          <div className="input-group">
            <label>Nomor Telepon :</label>
            <input type="tel" name="nomorTelepon" value={formData.nomorTelepon} onChange={handleChange} />
          </div>

          <div className="input-group">
            <label>Email :</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </div>

          <div className="input-group">
            <label>Username :</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} />
          </div>

          <div className="input-group">
            <label>Password :</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
          </div>

          <div className="input-group">
            <label>Konfirmasi password :</label>
            <input type="password" name="konfirmasiPassword" value={formData.konfirmasiPassword} onChange={handleChange} />
          </div>

          <div className="role-selection">
            <strong>Masuk sebagai :</strong>
            <div className="radio-container">
              <label className="radio-item">
                <input 
                  type="radio" 
                  name="role" 
                  checked={formData.role === 'disabilitas'} 
                  onChange={() => handleRoleChange('disabilitas')}
                />
                Penyandang Disabilitas
              </label>
              <label className="radio-item">
                <input 
                  type="radio" 
                  name="role" 
                  checked={formData.role === 'relawan'} 
                  onChange={() => handleRoleChange('relawan')}
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
            <button type="button" className="btn-pink" onClick={handleRegister}>Registrasi</button>
            <Link to="/login">
              <button type="button" className="btn-pink">Masuk</button>
            </Link>
          </div>

          <p className="footer-login">
            Sudah memiliki akun Inkluspace? <Link to="/login"><strong>Masuk</strong></Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

