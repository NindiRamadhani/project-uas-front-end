import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = () => {
    alert(
      `Login dengan:\nUsername: ${formData.username}\nPassword: ${formData.password}`
    );

    navigate('/');
  };

  return (
    <div className="page">
      <div className="login-box">

        <div className="login-header">
          <h1>LOGIN</h1>
        </div>

        <div className="login-content">
          <label>Username :</label>

          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />

          <label>Password :</label>

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <p className="forgot-password">
            <Link to="/lupasandi">Lupa Kata Sandi?</Link>
          </p>

          <button
            className="login-button"
            onClick={handleLogin}
          >
            Masuk
          </button>

          <button className="google-button">
            Masuk dengan Google
          </button>
        </div>

      </div>
    </div>
  );
}

export default LoginPage;