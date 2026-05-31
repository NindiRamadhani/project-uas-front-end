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
      const response = await api.post('/login', formData);

      // AMBIL DATA DARI BACKEND
      const user = response.data.user;

      // SIMPAN TOKEN KE LOCAL STORAGE
      localStorage.setItem('token', response.data.access_token);

      // SIMPAN DATA USER KE LOCAL STORAGE
      localStorage.setItem('id', user.id);
      localStorage.setItem('name', user.name);
      localStorage.setItem('email', user.email);
      localStorage.setItem('role', user.role);

      // OPTIONAL (SIMPAN SEMUA DATA USER DALAM BENTUK STRING JSON)
      localStorage.setItem('user', JSON.stringify(user));

      // REDIRECT BERDASARKAN ROLE
      if (user.role === 'relawan') {
        navigate('/home-relawan');
      } else if (user.role === 'disabilitas') {
        navigate('/home-disabilitas');
      } else if (user.role === 'admin') {
        // ✨ Khusus jika login sebagai admin, lempar ke halaman dashboard admin
        // Silakan ganti '/dashboard-admin' sesuai dengan nama path route admin kalian
        navigate('/dashboard-admin'); 
      } else {
        navigate('/home');
      }

    } catch (err) {
      // Menampilkan pesan error asli dari backend jika ada (misal: "Akun belum diverifikasi")
      setError(
        err.response?.data?.message || 'Login gagal. Periksa koneksi ke server.'
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
        <form className="login-body" onSubmit={handleLogin}>
          {/* ERROR MESSAGE */}
          {error && <p className="error-message">{error}</p>}

          {/* EMAIL INPUT */}
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

          {/* PASSWORD INPUT */}
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
          <Link to="/lupasandi" className="forgot-password">
            Lupa Kata Sandi?
          </Link>

          {/* BUTTON SUBMIT */}
          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? 'Loading...' : 'Masuk'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;