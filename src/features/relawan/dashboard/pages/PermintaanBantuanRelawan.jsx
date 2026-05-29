import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./PermintaanBantuanRelawan.css";

import Navbar from "../../../components/Navbar/Navbar";

import {
  FaUser,
  FaBook,
  FaCheckCircle,
} from "react-icons/fa";

import { MdOutlineVolunteerActivism } from "react-icons/md";

function PermintaanBantuanRelawan() {

  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
  };

  return (

    <div className="relawan-page">

      {/* NAVBAR BARU */}
      <Navbar />

      {/* CONTENT */}
      <div className="permintaan-container">

        {/* ICON */}
        <div className="permintaan-header-icon">

          <MdOutlineVolunteerActivism />

        </div>

        <h1>Kotak Permintaan</h1>

        <p className="permintaan-desc">
          Pilih permintaan bantuan yang ingin anda penuhi
          dan berikan dukungan bagi mereka yang membutuhkan
        </p>

        {/* CARD WRAPPER */}
        <div className="permintaan-card-wrapper">

          {/* LEFT CARD */}
          <div className="permintaan-card">

            <h2>Detail Permintaan Bantuan</h2>

            {/* TOP INFO */}
            <div className="permintaan-top">

              <div>

                <p className="label">
                  Pemohon :
                </p>

                <span>
                  <FaUser /> Budi Santoso (Malang)
                </span>

              </div>

              <div>

                <p className="label">
                  Kategori Bantuan :
                </p>

                <span>
                  <FaBook /> Pendidikan
                </span>

              </div>

            </div>

            {/* DESKRIPSI */}
            <div className="deskripsi-box">

              <h3>Deskripsi Bantuan :</h3>

              <p>
                Kak...Boleh bantu aku ngisi formulir ga?
                bantu cek apakah yang saya buat sudah benar
                atau tidak. Terimakasih
              </p>

            </div>

            {/* CONTACT */}
            <div className="contact-box">

              <h3>Contact</h3>

              <p>Budiyono12@gmail.com</p>

            </div>

            {/* BUTTON */}
            {!accepted ? (

              <button
                className="terima-btn"
                onClick={handleAccept}
              >

                Terima Permintaan Bantuan

              </button>

            ) : (

              <div className="success-box">

                <FaCheckCircle className="success-icon" />

                <h3>Permintaan Berhasil Diterima!</h3>

                <p>
                  Anda sekarang terhubung dengan pemohon.
                  Silakan lanjutkan komunikasi melalui fitur chat.
                </p>

                <Link
                  to="/chat"
                  className="chat-btn"
                >

                  Buka Chat

                </Link>

              </div>

            )}

            {/* PRIVACY */}
            <p className="privacy-text">

              <span>Privasi Anda Terjamin:</span>
              Semua informasi yang Anda berikan akan dijaga
              kerahasiaannya dan hanya digunakan untuk proses
              verifikasi relawan.

            </p>

          </div>

          {/* RIGHT CARD */}
          <div className="cara-kerja-card">

            <h2>Cara Kerja</h2>

            {/* STEP 1 */}
            <div className="step-item">

              <div className="step-number">
                1
              </div>

              <div>

                <h4>Lihat Permintaan Bantuan</h4>

                <p>
                  Pilih permintaan bantuan yang masuk di sistem
                </p>

              </div>

            </div>

            {/* STEP 2 */}
            <div className="step-item">

              <div className="step-number">
                2
              </div>

              <div>

                <h4>Validasi Data</h4>

                <p>
                  Pastikan data bantuan sesuai kebutuhan pemohon
                </p>

              </div>

            </div>

            {/* STEP 3 */}
            <div className="step-item">

              <div className="step-number">
                3
              </div>

              <div>

                <h4>Konfirmasi Aksi</h4>

                <p>
                  Ambil tindakan untuk membantu pemohon
                </p>

              </div>

            </div>

            {/* STEP 4 */}
            <div className="step-item">

              <div className="step-number">
                4
              </div>

              <div>

                <h4>Salurkan Bantuan</h4>

                <p>
                  Berikan bantuan secara aman dan nyaman
                </p>

              </div>

            </div>

            {/* ACCESSIBLE */}
            <div className="accessible-box">

              <FaCheckCircle />

              <span>ACCESSIBLE</span>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default PermintaanBantuanRelawan;