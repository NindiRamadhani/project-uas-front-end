// LoginPage.jsx

import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="page">

      <div className="login-box">

        <div className="login-header">
          <h1>LOGIN</h1>
        </div>

        <div className="login-content">

          <label>Username :</label>
          <input type="text" />

          <label>Password :</label>
          <input type="password" />

          <p className="forgot-password">
            Lupa Kata Sandi?
          </p>

          <button className="login-button">
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