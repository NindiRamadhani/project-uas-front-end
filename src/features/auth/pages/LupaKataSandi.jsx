import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LupaKataSandi.css';

const LupaKataSandi = () => {

  const [emailOrPhone, setEmailOrPhone] = useState('');
  const navigate = useNavigate();

  const handleKirim = () => {

    if (!emailOrPhone) {
      alert("Masukkan email atau nomor ponsel!");
      return;
    }

    // Simulasi proses kirim kode
    alert(`Kode verifikasi berhasil dikirim ke ${emailOrPhone}`);

    // Pindah ke halaman verifikasi
    navigate('/Verifikasi');
  };

  return (

    <div className="wadah-utama">

      <div className="kartu-pemulihan">

        {/* TOMBOL KEMBALI */}
        <button
          className="tombol-kembali"
          onClick={() => navigate('/login')}
        >
          <span className="panah-kiri"></span>
        </button>

        {/* ICON GEMBOK */}
        <div className="area-ikon">

          <div className="lingkaran-abu">

            <div className="gembok-visual">

              <div className="gagang-gembok"></div>

              <div className="badan-gembok">

                <span className="titik-sandi">
                  ***
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* JUDUL */}
        <h2 className="judul-halaman">
          Lupa Kata Sandi
        </h2>

        {/* DESKRIPSI */}
        <p className="teks-instruksi">
          Masukkan email atau nomor ponsel anda
          untuk memulihkan kata sandi anda.
        </p>

        {/* INPUT */}
        <div className="grup-input">

          <div className="pembungkus-input">

            {/* ICON EMAIL */}
            <div className="ikon-amplop">

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >

                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>

                <polyline points="22,6 12,13 2,6"></polyline>

              </svg>

            </div>

            {/* INPUT AREA */}
            <div className="area-ketik">

              <label>
                Email atau No. Ponsel
              </label>

              <input
                type="text"
                placeholder="Contoh@gmail.com"
                value={emailOrPhone}
                onChange={(e) =>
                  setEmailOrPhone(e.target.value)
                }
              />

            </div>

          </div>

        </div>

        {/* BUTTON */}
        <button
          className="tombol-kirim"
          onClick={handleKirim}
        >
          Kirim
        </button>

      </div>

    </div>

  );
};

export default LupaKataSandi;