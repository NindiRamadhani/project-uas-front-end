import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ResetPassword.css";

const ResetPassword = () => {
  const navigate = useNavigate();

  const [passwordBaru, setPasswordBaru] = useState("");
  const [konfirmasiPassword, setKonfirmasiPassword] = useState("");

  const handleSimpan = () => {
    if (!passwordBaru || !konfirmasiPassword) {
      alert("Semua field harus diisi!");
      return;
    }

    if (passwordBaru !== konfirmasiPassword) {
      alert("Konfirmasi password tidak cocok!");
      return;
    }

    alert("Password berhasil diubah!");
    navigate("/home");
  };

  return (
    <div className="reset-container">
      <div className="reset-card">

        {/* Tombol Back */}
        <button
          className="back-button"
          onClick={() => navigate("/Verifikasi")}
        >
          <span className="arrow-left"></span>
        </button>

        {/* Judul */}
        <h1 className="reset-title">Buat Kata Sandi Baru</h1>

        {/* Icon */}
        <div className="reset-icon-wrapper">
          <div className="reset-icon-circle">

            <div className="lock-refresh-icon">
              <div className="lock-top"></div>

              <div className="lock-body">
                <div className="lock-dot"></div>
              </div>

              <div className="refresh-arrow refresh-left"></div>
              <div className="refresh-arrow refresh-right"></div>
            </div>

          </div>
        </div>

        {/* Text */}
        <p className="reset-description">
          Buat kata sandi baru yang kuat untuk akun anda.
        </p>

        {/* Input Password Baru */}
        <div className="input-group-reset">
          <label>Kata Sandi Baru</label>

          <input
            type="password"
            value={passwordBaru}
            onChange={(e) => setPasswordBaru(e.target.value)}
          />
        </div>

        {/* Input Konfirmasi */}
        <div className="input-group-reset">
          <label>Konfirmasi Kata Sandi</label>

          <input
            type="password"
            value={konfirmasiPassword}
            onChange={(e) => setKonfirmasiPassword(e.target.value)}
          />
        </div>

        {/* Button */}
        <button className="save-button" onClick={handleSimpan}>
          Simpan
        </button>

      </div>
    </div>
  );
};

export default ResetPassword;