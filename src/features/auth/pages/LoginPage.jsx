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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError('');

      const response = await api.post('/login', formData);

      localStorage.setItem('token', response.data.access_token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      navigate('/home');
    } catch (err) {
      setError(err.response?.data?.message || 'Login gagal');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>LOGIN</h1>
        </div>

        <form className="login-body" onSubmit={handleLogin}>
          {error && <p className="error-message">{error}</p>}

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

          <Link to="/lupasandi" className="forgot-password">
            Lupa Kata Sandi?
          </Link>

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