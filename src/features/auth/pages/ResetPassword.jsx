// ResetPassword.jsx

import "./ResetPassword.css";
import { IoChevronBack } from "react-icons/io5";

function ResetPassword() {
  return (
    <div className="reset-page">

      <div className="reset-container">

        <div className="header">

          <IoChevronBack className="back-icon" />

          <h1>Buat Kata Sandi Baru</h1>

        </div>

        <div className="icon-wrapper">

          <img
            src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png"
            alt="lock"
          />

        </div>

        <h2>
          Buat kata sandi baru yang kuat untuk akun anda.
        </h2>

        <div className="input-group">

          <label>Kata Sandi Baru</label>

          <input type="password" />

        </div>

        <div className="input-group">

          <label>Konfirmasi Kata Sandi</label>

          <input type="password" />

        </div>

        <button className="save-btn">
          Simpan
        </button>

      </div>

    </div>
  );
}

export default ResetPassword;