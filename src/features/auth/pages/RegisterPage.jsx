import React, { useState } from 'react';
import './Register.css';
import logo from './assets/logos/inkluspace-logo.png'; // Sesuaikan path logo kamu

const Register = () => {
  const [formData, setFormData] = useState({
    namaLengkap: '',
    nomorTelepon: '',
    email: '',
    username: '',
    password: '',
    konfirmasiPassword: '',
    role: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data Pendaftar:", formData);
    // Tambahkan logika registrasi di sini
  };

  return (
    <div className="register-container">
      <div className="header-purple">
        <img src={logo} alt="InkluSpace Logo" />
        <h2 style={{margin: 0}}>InkluSpace</h2>
      </div>

      <form className="form-body" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Nama lengkap :</label>
          <input type="text" name="namaLengkap" onChange={handleChange} />
        </div>

        <div className="input-group">
          <label>Nomor Telepon :</label>
          <input type="text" name="nomorTelepon" onChange={handleChange} />
        </div>

        <div className="input-group">
          <label>Email :</label>
          <input type="email" name="email" onChange={handleChange} />
        </div>

        <div className="input-group">
          <label>Username :</label>
          <input type="text" name="username" onChange={handleChange} />
        </div>

        <div className="input-group">
          <label>Password :</label>
          <input type="password" name="password" onChange={handleChange} />
        </div>

        <div className="input-group">
          <label>Konfirmasi password :</label>
          <input type="password" name="konfirmasiPassword" onChange={handleChange} />
        </div>

        <div className="role-selection">
          <strong>Masuk sebagai :</strong>
          <div className="radio-group">
            <label className="radio-item">
              <input type="radio" name="role" value="disabilitas" onChange={handleChange} />
              Penyandang Disabilitas
            </label>
            <label className="radio-item">
              <input type="radio" name="role" value="relawan" onChange={handleChange} />
              Relawan
            </label>
          </div>
        </div>

        <p className="terms-text">
          Dengan klik tombol daftar, saya telah menyetujui Ketentuan layanan InkluSpace
        </p>

        <div className="button-group">
          <button type="submit" className="btn btn-pink">Registrasi</button>
          <button type="button" className="btn btn-pink">Masuk</button>
        </div>

        <p className="footer-text">
          Sudah memiliki akun Inkluspace? <strong>Masuk</strong>
        </p>
      </form>
    </div>
  );
};

export default Register;