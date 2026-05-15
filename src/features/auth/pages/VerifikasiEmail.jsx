import React, { useState } from 'react';
import './VerifikasiEmail.css';

const VerifikasiEmail = () => {
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleChange = (value, index) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== "" && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  return (
    <div className="v-page-container">
      <div className="v-card-exact">
        <button className="v-back-btn" onClick={() => window.history.back()}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <h2 className="v-title-text">Verifikasi Email</h2>

        <div className="v-icon-wrapper">
          <div className="v-icon-circle">
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 40 L12 85 L88 85 L88 40" stroke="black" strokeWidth="5.5" strokeLinejoin="round"/>
              <rect x="25" y="22" width="50" height="45" fill="white" stroke="black" strokeWidth="5.5"/>
              <line x1="35" y1="36" x2="65" y2="36" stroke="black" strokeWidth="4.5" />
              <line x1="35" y1="48" x2="55" y2="48" stroke="black" strokeWidth="4.5" />
              <path d="M12 40 L50 72 L88 40" fill="white" stroke="black" strokeWidth="5.5" strokeLinejoin="round"/>
              <path d="M12 85 L50 72 L88 85" stroke="black" strokeWidth="5.5" strokeLinejoin="round"/>
              <circle cx="78" cy="25" r="16" fill="white" stroke="black" strokeWidth="4.5"/>
              <path d="M68 36 L62 46 L76 39" fill="white" stroke="black" strokeWidth="4.5" strokeLinejoin="round"/>
              <circle cx="71" cy="25" r="2.2" fill="black"/>
              <circle cx="78" cy="25" r="2.2" fill="black"/>
              <circle cx="85" cy="25" r="2.2" fill="black"/>
            </svg>
          </div>
        </div>

        <div className="v-msg-box">
          <p>Kode verifikasi telah terkirim ke email anda.</p>
          <p>Silahkan masukkan kode</p>
        </div>

        <div className="v-otp-inputs">
          {otp.map((data, index) => (
            <input 
              key={index} id={`otp-${index}`} type="text" maxLength="1" value={data}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)} 
              className="v-otp-box" 
            />
          ))}
        </div>

        <button className="v-submit-pink">Verifikasi</button>

        <p className="v-footer-msg">
          Tidak menerima kode? <span className="v-resend-link">Kirim Ulang</span>
        </p>
      </div>
    </div>
  );
};

export default VerifikasiEmail;