import React, { useState } from 'react';
import './LupaKataSandi.css';

const LupaKataSandi = () => {
  const [dataInput, setDataInput] = useState('');

  const tanganiKirim = () => {
    alert("Instruksi pemulihan telah dikirim ke: " + dataInput);
    // Logika pengiriman data ke server bisa diletakkan di sini
  };

  return (
    <div className="wadah-utama">
      <div className="kartu-pemulihan">
        {/* Tombol Kembali */}
        <button className="tombol-kembali" onClick={() => window.history.back()}>
          <span className="panah-kiri"></span>
        </button>

        {/* Bagian Ikon */}
        <div className="area-ikon">
          <div className="lingkaran-abu">
            <div className="gembok-visual">
              <div className="gagang-gembok"></div>
              <div className="badan-gembok">
                <span className="titik-sandi">***</span>
              </div>
            </div>
          </div>
        </div>

        <h2 className="judul-halaman">Lupa Kata Sandi</h2>
        
        <p className="teks-instruksi">
          Masukkan email atau nomor ponsel anda untuk memulihkan kata sandi anda.
        </p>

        {/* Kolom Input */}
        <div className="grup-input">
          <div className="pembungkus-input">
            <div className="ikon-amplop">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div className="area-ketik">
              <label>Email atau No. Ponsel</label>
              <input 
                type="text" 
                placeholder="Contoh@gmail.com" 
                value={dataInput}
                onChange={(e) => setDataInput(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Tombol Aksi */}
        <button className="tombol-kirim" onClick={tanganiKirim}>
          Kirim
        </button>
      </div>
    </div>
  );
};

export default LupaKataSandi;