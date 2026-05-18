// ==========================================
// TANDAI: PermintaanBantuanRelawan.jsx (FIXED ICON)
// ==========================================
import React from 'react';
import { Link } from 'react-router-dom';
import './PermintaanBantuanRelawan.css';

import logoInkluSpace from "../../../../assets/logoinkluspace.png";
import { IoHomeOutline, IoChatbubbleOutline, IoLogOutOutline } from "react-icons/io5";
import { FaRegUser, FaHandHoldingHeart } from "react-icons/fa"; // Ganti ke FaHandHoldingHeart disini

const PermintaanBantuanRelawan = () => {
  return (
    <div className="volunteer-container">
      
      {/* NAVBAR */}
      <div className="navbar">
        <div className="logo-section">
          <img src={logoInkluSpace} alt="logo" className="logo-img" />
          <p>InkluSpace</p>
        </div>

        <div className="menu-section">
          <Link to="/" className="menu-item-link">
            <IoHomeOutline className="nav-icon" />
            <span>Beranda</span>
          </Link>

          <div className="menu-item active">
            <span className="nav-icon-text">HELP</span>
            <span>Permintaan Bantuan</span>
          </div>

          <Link to="/chat" className="menu-item-link">
            <IoChatbubbleOutline className="nav-icon" />
            <span>Chat</span>
          </Link>

          <Link to="/profil-disabilitas" className="menu-item-link">
            <FaRegUser className="nav-icon" />
            <span>Profil</span>
          </Link>

          <Link to="/logout" className="menu-item-link">
            <IoLogOutOutline className="nav-icon" />
            <span>Logout</span>
          </Link>
        </div>
      </div>

      {/* HEADER KOTAK PERMINTAAN */}
      <div className="dashboard-header">
        <div className="header-icon-box">
          <FaHandHoldingHeart className="header-icon" /> {/* Menggunakan icon baru */}
        </div>
        <h2>Kotak Permintaan</h2>
        <p>Pilih permintaan bantuan yang ingin anda penuhi dan berikan dukungan bagi mereka yang membutuhkan</p>
      </div>

      {/* MAIN CONTENT SPLIT */}
      <div className="dashboard-content">
        
        {/* DETAIL CARD (KIRI) */}
        <div className="detail-section">
          <h3>Detail Permintaan Bantuan</h3>
          
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">Pemohon :</span>
              <span className="info-value">👤 Budi Santoso (Malang)</span>
            </div>
            <div className="info-item">
              <span className="info-label">Kategori Bantuan :</span>
              <span className="info-value">⚃ Pendidikan</span>
            </div>
          </div>

          <div className="deskripsi-box">
            <strong>Deskripsi Bantuan :</strong>
            <p>
              Kak...Boleh bantu aku ngisi formulir ga? bantu cek apakah yang saya buat sudah benar atau tidak.Terimakasih
            </p>
          </div>

          <div className="contact-box">
            <strong>Contact</strong>
            <p>Budiyono12@gmail.com</p>
          </div>
        </div>

        {/* CARA KERJA (KANAN) */}
        <div className="cara-kerja-section">
          <h3>Cara Kerja</h3>
          
          <div className="step-list">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-text">
                <h4>Lihat Permintaan Bantuan</h4>
                <p>Pilih permintaan bantuan yang masuk di sistem</p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-text">
                <h4>Validasi Data</h4>
                <p>Pilih permintaan bantuan yang masuk di sistem</p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-text">
                <h4>Konfirmasi Aksi</h4>
                <p>Setujui dan ambil tindakan untuk menyalurkan bantuan</p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">4</div>
              <div className="step-text">
                <h4>Salurkan Bantuan</h4>
                <p>Mulai bergerak dan salurkan bantuan langsung ke pemohon</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* FOOTER ACTION */}
      <div className="action-footer">
        <button className="btn-terima-bantuan">Terima Permintaan Bantuan</button>
        <div className="accessible-banner-box">
          <div className="accessible-badge">ACCESSIBLE</div>
        </div>
      </div>

      <p className="privacy-text">
        <span>Privasi Anda Terjamin:</span> Semua informasi yang Anda berikan akan dijaga kerahasiaannya dan hanya digunakan untuk proses verifikasi relawan.
      </p>

    </div>
  );
};

export default PermintaanBantuanRelawan;