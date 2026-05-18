// ProfilPenyandangDisabilitas.jsx

import { Link } from "react-router-dom";

import "./ProfilPenyandangDisabilitas.css";

import logoInkluSpace from "../../assets/logoinkluspace.png";

import {
  IoHomeOutline,
  IoChatbubbleOutline,
  IoLogOutOutline,
} from "react-icons/io5";

import { FaRegUser } from "react-icons/fa";

import {
  FaRegClock,
  FaCalendarAlt,
  FaHeart,
} from "react-icons/fa";

import { MdOutlineVolunteerActivism } from "react-icons/md";

export default function ProfilPenyandangDisabilitas() {

  return (

    <div className="profile-page">

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
          <Link
            to="/request-help"
            className="menu-item-link"
          >

            <MdOutlineVolunteerActivism className="nav-icon" />

            <span>Minta Bantuan</span>

          </Link>

          {/* CHAT */}
          <Link
            to="/chat"
            className="menu-item-link"
          >

            <IoChatbubbleOutline className="nav-icon" />

            <span>Chat</span>

          </Link>

          {/* PROFIL */}
          <div className="menu-item">

            <FaRegUser className="nav-icon" />

            <span>Profil</span>

          </div>

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

      {/* PROFILE HEADER */}
      <div className="profile-header">

        <div className="profile-avatar">

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="profile"
          />

        </div>

        <h2>Budi Prasetyo</h2>

        <p>Status : Aktif</p>

      </div>

      {/* CONTENT */}
      <div className="profile-content">

        {/* LEFT SIDE */}
        <div className="left-section">

          {/* LAYANAN */}
          <div className="service-card">

            <div className="card-title">

              <FaRegClock />

              <h2>Layanan Saat Ini:</h2>

            </div>

            <div className="service-item">

              <p>
                1. Pendampingan mobilitas - 22 Mar 2025
              </p>

              <span>✔ Selesai</span>

            </div>

            <div className="service-item">

              <p>
                2. Tutor Matematika - 20 Maret 2025
              </p>

              <span>✔ Selesai</span>

            </div>

          </div>

          {/* BANTUAN */}
          <div className="help-card">

            <div className="card-title">

              <FaHeart />

              <h2>Bantuan yang diminta:</h2>

            </div>

            <p className="help-count">
              Bantuan Diterima: 12
            </p>

            <button>Minta Bantuan Baru</button>

            <button>Hubungi Relawan</button>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="schedule-card">

          <div className="card-title">

            <FaCalendarAlt />

            <h2>Jadwal Terdekat:</h2>

          </div>

          <div className="schedule-item">

            <p>
              1. Pendampingan mobilitas - 28 Mar 2025
            </p>

            <button>Lihat Detail</button>

          </div>

          <div className="schedule-item">

            <p>
              2. Tutor Matematika - 27 Mar 2025
            </p>

            <button>Lihat Detail</button>

          </div>

          <div className="schedule-item">

            <p>
              3. Sesi terapi wicara - 26 Mar 2025
            </p>

            <button>Lihat Detail</button>

          </div>

          <div className="schedule-item">

            <p>
              4. Bimbingan IT (React) - 26 Mar 2025
            </p>

            <button>Lihat Detail</button>

          </div>

          <div className="schedule-item">

            <p>
              5. Konsultasi Psikologi - 24 Mar 2025
            </p>

            <button>Lihat Detail</button>

          </div>

        </div>

      </div>

    </div>

  );

}