// RequestHelp.jsx

import { Link } from "react-router-dom";

import "./RequestHelp.css";

import logoInkluSpace from "../assets/logoinkluspace.png";
import accessibleBanner from "../assets/accessible.jpeg";

import {
  IoHomeOutline,
  IoChatbubbleOutline,
  IoLogOutOutline,
} from "react-icons/io5";

import { FaRegUser } from "react-icons/fa";

import { MdOutlineVolunteerActivism } from "react-icons/md";

export default function RequestHelp() {

  return (

    <div className="request-page">

      {/* NAVBAR */}
      <div className="navbar">

        <div className="logo-section">

          <img
            src={logoInkluSpace}
            alt="logo"
            className="logo-img"
          />

          <p>InkluSpace</p>

        </div>

        <div className="menu-section">

          {/* BERANDA */}
          <Link
            to="/home"
            className="menu-item-link"
          >

            <IoHomeOutline className="nav-icon" />

            <span>Beranda</span>

          </Link>

          {/* MINTA BANTUAN */}
          <div className="menu-item">

            <MdOutlineVolunteerActivism className="nav-icon" />

            <span>Minta Bantuan</span>

          </div>

          {/* CHAT */}
          <Link
            to="/chat"
            className="menu-item-link"
          >

            <IoChatbubbleOutline className="nav-icon" />

            <span>Chat</span>

          </Link>

          {/* PROFIL */}
          <Link
            to="/profil-disabilitas"
            className="menu-item-link"
          >

            <FaRegUser className="nav-icon" />

            <span>Profil</span>

          </Link>

          {/* LOGOUT */}
          <Link
            to="/logout"
            className="menu-item-link"
          >

            <IoLogOutOutline className="nav-icon" />

            <span>Logout</span>

          </Link>

        </div>

      </div>

      {/* CONTENT */}
      <div className="content">

        {/* HEADER */}
        <div className="header-section">

          <div className="help-icon">

            <MdOutlineVolunteerActivism />

          </div>

          <h1>Minta Bantuan</h1>

          <p>
            Ceritakan kebutuhan Anda.
            Kami siap membantu menghubungkan
            Anda dengan relawan yang tepat.
          </p>

        </div>

        {/* MAIN */}
        <div className="main-section">

          {/* FORM */}
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

          {/* STEPS */}
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

        {/* BANNER */}
        <div className="accessible-banner">

          <img
            src={accessibleBanner}
            alt="accessible"
          />

        </div>

        {/* FOOTER */}
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