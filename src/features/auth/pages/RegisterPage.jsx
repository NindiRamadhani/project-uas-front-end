import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './RegisterPage.css';
import logo from '../../../assets/logoinkluspace.png';
import api from '../../../services/api';

const RegisterPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    username: '',
    password: '',
    password_confirmation: '',
    role: 'disabilitas',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});

  // HANDLE INPUT
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // HAPUS ERROR SAAT MENGETIK
    if(fieldErrors[name]){
      setFieldErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  // VALIDASI
  const validateForm = () => {
    const errors = {};

    if(!formData.name.trim()){
      errors.name = 'Nama lengkap wajib diisi';
    }

    if(!formData.phone.trim()){
      errors.phone = 'Nomor telepon wajib diisi';
    }

    if(!formData.email.trim()){
      errors.email = 'Email wajib diisi';
    }else if(
      !/\S+@\S+\.\S+/.test(formData.email)
    ){
      errors.email = 'Email tidak valid';
    }

    if(!formData.username.trim()){
      errors.username = 'Username wajib diisi';
    }

    if(!formData.password){
      errors.password = 'Password wajib diisi';
    }else if(formData.password.length < 6){
      errors.password = 'Password minimal 6 karakter';
    }

    if(
      formData.password !==
      formData.password_confirmation
    ){
      errors.password_confirmation = 'Konfirmasi password tidak cocok';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // HANDLE REGISTER
  const handleRegister = async (e) => {
    e.preventDefault();

    // VALIDASI FRONTEND
    if(!validateForm()) return;

    try {
      setLoading(true);
      setError('');
      setFieldErrors({});

      // MINTA TIKET KEAMANAN DARI PHP SERVER PORT 9000
      await api.get('http://127.0.0.1:9000/sanctum/csrf-cookie');

      // REQUEST KE BACKEND
      const response = await api.post(
        '/register',
        formData
      );

      console.log(
        'Register success:',
        response.data
      );

      alert(
        'Registrasi berhasil! Silakan login.'
      );

      navigate('/login');

    } catch (err) {
      console.error(
        'Register error:',
        err.response?.data
      );

      // VALIDASI DARI LARAVEL
      if(err.response?.data?.errors){
        setFieldErrors(
          err.response.data.errors
        );
        setError(
          'Mohon periksa kembali data yang diisi.'
        );
      }else if(
        err.response?.data?.message
      ){
        setError(
          err.response.data.message
        );
      }else{
        setError(
          'Terjadi kesalahan pada server.'
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="floating-wrapper">
      <div className="register-card">
        {/* HEADER */}
        <div className="card-header">
          <img
            src={logo}
            alt="InkluSpace Logo"
            className="logo-img"
          />
          <h1>InkluSpace</h1>
        </div>

        {/* FORM */}
        <form
          className="card-body"
          onSubmit={handleRegister}
        >
          {/* ERROR */}
          {error && (
            <p className="error-message">
              {error}
            </p>
          )}

          {/* NAMA */}
          <div className="input-group">
            <label>Nama lengkap :</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {fieldErrors.name && (
              <span className="field-error">
                {fieldErrors.name}
              </span>
            )}
          </div>

          {/* PHONE */}
          <div className="input-group">
            <label>Nomor Telepon :</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            {fieldErrors.phone && (
              <span className="field-error">
                {fieldErrors.phone}
              </span>
            )}
          </div>

          {/* EMAIL */}
          <div className="input-group">
            <label>Email :</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {fieldErrors.email && (
              <span className="field-error">
                {fieldErrors.email}
              </span>
            )}
          </div>

          {/* USERNAME */}
          <div className="input-group">
            <label>Username :</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            {fieldErrors.username && (
              <span className="field-error">
                {fieldErrors.username}
              </span>
            )}
          </div>

          {/* PASSWORD */}
          <div className="input-group">
            <label>Password :</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {fieldErrors.password && (
              <span className="field-error">
                {fieldErrors.password}
              </span>
            )}
          </div>

          {/* KONFIRMASI PASSWORD */}
          <div className="input-group">
            <label>Konfirmasi password :</label>
            <input
              type="password"
              name="password_confirmation"
              value={formData.password_confirmation}
              onChange={handleChange}
              required
            />
            {fieldErrors.password_confirmation && (
              <span className="field-error">
                {fieldErrors.password_confirmation}
              </span>
            )}
          </div>

          {/* ROLE */}
          <div className="role-selection">
            <strong>Masuk sebagai :</strong>
            <div className="radio-container">
              {/* DISABILITAS */}
              <label className="radio-item">
                <input
                  type="radio"
                  name="role"
                  value="disabilitas"
                  checked={
                    formData.role === 'disabilitas'
                  }
                  onChange={handleChange}
                />
                Penyandang Disabilitas
              </label>

              {/* RELAWAN */}
              <label className="radio-item">
                <input
                  type="radio"
                  name="role"
                  value="relawan"
                  checked={
                    formData.role === 'relawan'
                  }
                  onChange={handleChange}
                />
                Relawan
              </label>
            </div>
          </div>

          {/* AGREEMENT */}
          <p className="agreement-text">
            Dengan klik tombol daftar, saya telah menyetujui <br />
            <strong>
              Ketentuan layanan InkluSpace
            </strong>
          </p>

          {/* BUTTON */}
          <div className="button-row">
            <button
              type="submit"
              className="btn-pink"
              disabled={loading}
            >
              {
                loading
                ? 'Loading...'
                : 'Registrasi'
              }
            </button>

            <Link to="/login">
              <button
                type="button"
                className="btn-pink"
              >
                Masuk
              </button>
            </Link>
          </div>

          {/* FOOTER */}
          <p className="footer-login">
            Sudah memiliki akun InkluSpace?{' '}
            <Link to="/login">
              <strong>Masuk</strong>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;