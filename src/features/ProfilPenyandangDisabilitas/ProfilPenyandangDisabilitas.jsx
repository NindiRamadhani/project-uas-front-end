// ProfilPenyandangDisabilitas.jsx

import { Link } from "react-router-dom";

import "./ProfilPenyandangDisabilitas.css";

import logoInkluSpace from "../../assets/logoinkluspace.png";

import {
  FaHome,
  FaComments,
  FaUser,
  FaSignOutAlt,
  FaRegClock,
  FaCalendarAlt,
  FaHeart,
} from "react-icons/fa";

import { MdVolunteerActivism } from "react-icons/md";

export default function ProfilPenyandangDisabilitas() {

  return (

    <div className="profile-page">

      {/* NAVBAR */}
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

          {/* MINTA BANTUAN */}
          <Link
            to="/request-help"
            className="nav-item-link"
          >

            <MdVolunteerActivism />

            <span>Minta Bantuan</span>

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
          <div className="nav-item active">

            <FaUser />

            <span>Profil</span>

          </div>

          {/* LOGOUT */}
          <div className="nav-item">

            <FaSignOutAlt />

            <span>Logout</span>

          </div>

        </div>

      </nav>

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