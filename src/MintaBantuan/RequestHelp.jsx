// RequestHelp.jsx

import { Link } from "react-router-dom";

import "./RequestHelp.css";

import logoInkluSpace from "../assets/logoinkluspace.png";
import accessibleBanner from "../assets/accessible.jpeg";

import {
  FaHome,
  FaComments,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

import { MdVolunteerActivism } from "react-icons/md";

export default function RequestHelp() {
  return (
    <div className="request-page">

      {/* Navbar */}
      <nav className="navbar">

        <div className="logo">

          <img
            src={logoInkluSpace}
            alt="logo"
          />

          <span>InkluSpace</span>

        </div>

        <div className="nav-menu">

          {/* BERANDA */}
          <Link
            to="/home"
            className="nav-item-link"
          >

            <FaHome />

            <span>Beranda</span>

          </Link>

          {/* CHAT */}
          <Link
            to="/chat"
            className="nav-item-link"
          >

            <FaComments />

            <span>Chat</span>

          </Link>

          {/* PROFIL */}
          <Link
            to="/profil-disabilitas"
            className="nav-item-link"
          >

            <FaUser />

            <span>Profil</span>

          </Link>

          {/* LOGOUT */}
          <div className="nav-item">

            <FaSignOutAlt />

            <span>Logout</span>

          </div>

        </div>

      </nav>

      {/* Content */}
      <div className="content">

        {/* Header */}
        <div className="header-section">

          <div className="help-icon">
            <MdVolunteerActivism />
          </div>

          <h1>Minta Bantuan</h1>

          <p>
            Ceritakan kebutuhan Anda.
            Kami siap membantu menghubungkan
            Anda dengan relawan yang tepat.
          </p>

        </div>

        {/* Main */}
        <div className="main-section">

          {/* Form */}
          <div className="form-section">

            <h2>Isi Formulir</h2>

            <label>Nama</label>

            <input
              type="text"
              placeholder="Masukkan nama Anda"
            />

            <label>Kategori Bantuan</label>

            <input
              type="text"
              placeholder="Pilih kategori"
            />

            <label>Deskripsi bantuan</label>

            <textarea
              placeholder="Jelaskan secara detail bantuan yang Anda butuhkan"
            ></textarea>

            <label>Contact</label>

            <input
              type="text"
              placeholder="email@example.com atau 08xxxxxxxx"
            />

            <button>Kirim Permintaan</button>

          </div>

          {/* Cara Kerja */}
          <div className="steps-card">

            <h2>Cara Kerja</h2>

            <div className="step">

              <div className="number">1</div>

              <div>

                <h3>Isi Formulir</h3>

                <p>
                  Lengkapi informasi kebutuhan Anda
                </p>

              </div>

            </div>

            <div className="step">

              <div className="number">2</div>

              <div>

                <h3>Verifikasi Tim</h3>

                <p>
                  Tim kami akan meninjau permintaan
                </p>

              </div>

            </div>

            <div className="step">

              <div className="number">3</div>

              <div>

                <h3>Koneksi Relawan</h3>

                <p>
                  Kami hubungkan dengan relawan yang sesuai
                </p>

              </div>

            </div>

            <div className="step">

              <div className="number">4</div>

              <div>

                <h3>Dapatkan Bantuan</h3>

                <p>
                  Relawan akan menghubungi Anda
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Banner */}
        <div className="accessible-banner">

          <img
            src={accessibleBanner}
            alt="accessible"
          />

        </div>

        {/* Footer */}
        <div className="privacy-text">

          <span>Privasi Anda Terjamin:</span>

          Semua informasi yang Anda
          berikan akan dijaga kerahasiaannya
          dan hanya digunakan untuk
          menghubungkan Anda dengan
          bantuan yang tepat.

        </div>

      </div>

    </div>
  );
}