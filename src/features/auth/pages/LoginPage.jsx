import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <div className="login-header">
          <h1>LOGIN</h1>
        </div>

        <div className="login-body">

          <div className="input-group">
            <label>Username :</label>
            <input type="text" />
          </div>

          <div className="input-group">
            <label>Password :</label>
            <input type="password" />
          </div>

          <Link to="/lupasandi" className="forgot-password">
            Lupa Kata Sandi?
          </Link>

          <button
            className="login-btn"
            onClick={handleLogin}
          >
            Masuk
          </button>

          <button className="google-btn">
            Masuk dengan Google
          </button>

        </div>

      </div>

    </div>
  );
};

export default LoginPage;