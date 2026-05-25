import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./VerifikasiEmail.css";

const VerifikasiEmail = () => {
  const navigate = useNavigate();

  const [kode, setKode] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);

  const handleChange = (value, index) => {
    if (isNaN(value)) return;

    const newKode = [...kode];
    newKode[index] = value;
    setKode(newKode);

    // pindah otomatis ke kotak berikutnya
    if (value && index < 3) {
      document.getElementById(`kode-${index + 1}`).focus();
    }
  };

  const handleVerifikasi = () => {
    const fullKode = kode.join("");

    if (fullKode.length < 4) {
      alert("Masukkan kode verifikasi!");
      return;
    }

    navigate("/reset");
  };

  const handleKirimUlang = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Kode berhasil dikirim ulang!");
    }, 2000);
  };

  return (
    <div className="verifikasi-container">
      <div className="verifikasi-card">

        {/* Tombol Back */}
        <button
          className="back-button"
          onClick={() => navigate("/lupasandi")}
        >
          <span className="back-arrow"></span>
        </button>

        {/* Judul */}
        <h1 className="verifikasi-title">Verifikasi Email</h1>

        {/* Icon */}
        <div className="icon-wrapper">
          <div className="icon-circle">
            <svg
              className="mail-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 7.5v9A2.25 2.25 0 0119.5 18.75h-15A2.25 2.25 0 012.25 16.5v-9m19.5 0A2.25 2.25 0 0019.5 5.25h-15A2.25 2.25 0 002.25 7.5m19.5 0v.243a2.25 2.25 0 01-.876 1.78l-7.5 5.625a2.25 2.25 0 01-2.698 0L3.126 9.523a2.25 2.25 0 01-.876-1.78V7.5"
              />
            </svg>
          </div>
        </div>

        {/* Text */}
        <p className="verifikasi-text">
          Kode verifikasi telah terkirim ke email anda.
          <br />
          Silahkan masukkan kode
        </p>

        {/* Input Kode */}
        <div className="kode-container">
          {kode.map((item, index) => (
            <input
              key={index}
              id={`kode-${index}`}
              type="text"
              maxLength="1"
              value={item}
              onChange={(e) => handleChange(e.target.value, index)}
              className="kode-input"
            />
          ))}
        </div>

        {/* Tombol */}
        <button
          className="verifikasi-button"
          onClick={handleVerifikasi}
        >
          Verifikasi
        </button>

        {/* Kirim ulang */}
        <p className="resend-text">
          Tidak menerima kode?{" "}
          <span
            className="resend-link"
            onClick={handleKirimUlang}
          >
            {loading ? "Mengirim ulang..." : "Kirim Ulang"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default VerifikasiEmail;