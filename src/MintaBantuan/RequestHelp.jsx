// RequestHelp.jsx

import "./RequestHelp.css";

import Navbar from "../features/components/Navbar/Navbar";

import accessibleBanner from "../assets/accessible.jpeg";

import { MdOutlineVolunteerActivism } from "react-icons/md";

export default function RequestHelp() {

  return (

    <div className="request-page">

      {/* NAVBAR BARU */}
      <Navbar />

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