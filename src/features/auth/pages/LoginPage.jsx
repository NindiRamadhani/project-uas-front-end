import './LoginPage.css';

import { Link, useNavigate } from 'react-router-dom';

import { useState } from 'react';

import api from '../../../services/api';

const LoginPage = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    email: '',
    password: '',

  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState('');

  // HANDLE INPUT
  const handleChange = (e) => {

    setFormData({

      ...formData,
      [e.target.name]: e.target.value,

    });

  };

  // HANDLE LOGIN
  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      setError('');

      // REQUEST LOGIN KE BACKEND
      const response = await api.post(

        '/login',
        formData

      );

      // AMBIL DATA DARI BACKEND
      const user = response.data.user;

      // SIMPAN TOKEN
      localStorage.setItem(
        'token',
        response.data.access_token
      );

      // SIMPAN DATA USER
      localStorage.setItem(
        'id',
        user.id
      );

      localStorage.setItem(
        'name',
        user.name
      );

      localStorage.setItem(
        'email',
        user.email
      );

      localStorage.setItem(
        'role',
        user.role
      );

      // OPTIONAL
      localStorage.setItem(
        'user',
        JSON.stringify(user)
      );

      // REDIRECT BERDASARKAN ROLE
      if(user.role === 'relawan'){

        navigate('/home-relawan');

      }else if(user.role === 'disabilitas'){

        navigate('/home-disabilitas');

      }else{

        navigate('/home');

      }

    } catch (err) {

      setError(

        err.response?.data?.message ||
        'Login gagal'

      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="login-container">

      <div className="login-card">

        {/* HEADER */}
        <div className="login-header">

          <h1>LOGIN</h1>

        </div>

        {/* FORM */}
        <form
          className="login-body"
          onSubmit={handleLogin}
        >

          {/* ERROR */}
          {error && (

            <p className="error-message">

              {error}

            </p>

          )}

          {/* EMAIL */}
          <div className="input-group">

            <label>Email :</label>

            <input
              type="email"
              name="email"
              placeholder="Masukkan email"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>

          {/* PASSWORD */}
          <div className="input-group">

            <label>Password :</label>

            <input
              type="password"
              name="password"
              placeholder="Masukkan password"
              value={formData.password}
              onChange={handleChange}
              required
            />

          </div>

          {/* LUPA PASSWORD */}
          <Link
            to="/lupasandi"
            className="forgot-password"
          >

            Lupa Kata Sandi?

          </Link>

          {/* BUTTON LOGIN */}
          <button
            type="submit"
            className="login-btn"
            disabled={loading}
          >

            {loading ? 'Loading...' : 'Masuk'}

          </button>

        </form>

      </div>

    </div>

  );

};

export default LoginPage;