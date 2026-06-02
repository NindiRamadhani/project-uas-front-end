import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ajax from "axios"; 

import "./PermintaanBantuanRelawan.css";
import Navbar from "../../../components/Navbar/Navbar";
import { FaUser, FaBook, FaCheckCircle } from "react-icons/fa";
import { MdOutlineVolunteerActivism } from "react-icons/md";

function PermintaanBantuanRelawan() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [acceptedId, setAcceptedId] = useState(null);

  // Mengambil token login dari localStorage jika ada
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // 1. Ambil data dari PHP Server Port 9000
  useEffect(() => {
    ajax
      .get("http://127.0.0.1:9000/api/help-requests", config)
      .then((response) => {
        setRequests(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Gagal memuat kotak permintaan:", error);
        setLoading(false);
      });
  }, []);

  // 2. Fungsi Tombol "Terima Permintaan Bantuan"
  const handleAccept = (id) => {
    ajax
      .post(`http://127.0.0.1:9000/api/help-requests/${id}/accept`, {}, config)
      .then((response) => {
        alert(response.data.message || "Permintaan berhasil disetujui!");
        setAcceptedId(id); // Menyimpan ID bantuan yang sukses diterima
        
        // Sembunyikan card yang sudah di-ACC agar list bersih
        setRequests(requests.filter((req) => req.id !== id));
      })
      .catch((error) => {
        console.error("Gagal menyetujui bantuan:", error);
        alert(error.response?.data?.message || "Terjadi kesalahan sistem saat menyetujui.");
      });
  };

  return (
    <div className="relawan-page">
      <Navbar />

      <div className="permintaan-container">
        <div className="permintaan-header-icon">
          <MdOutlineVolunteerActivism />
        </div>

        <h1>Kotak Permintaan</h1>
        <p className="permintaan-desc">
          Pilih permintaan bantuan yang ingin anda penuhi dan berikan dukungan bagi mereka yang membutuhkan
        </p>

        <div className="permintaan-card-wrapper">
          
          {/* LEFT COLUMN: LIST DATA DARI DATABASE */}
          <div className="permintaan-list" style={{ flex: 1, display: "flex", flexDirection: "column", gap: "20px" }}>
            
            {loading && <p style={{ textAlign: "center" }}>Memuat data dari database internal...</p>}

            {/* Loop Data Kartu Bantuan */}
            {!loading && requests.map((item) => (
              <div className="permintaan-card" key={item.id} style={{ marginBottom: "0px" }}>
                <h2>Detail Permintaan Bantuan</h2>

                <div className="permintaan-top">
                  <div>
                    <p className="label">Pemohon :</p>
                    <span>
                      <FaUser /> {item.user?.name}
                    </span>
                  </div>

                  <div>
                    <p className="label">Kategori Bantuan :</p>
                    <span>
                      <FaBook /> {item.category}
                    </span>
                  </div>
                </div>

                <div className="deskripsi-box">
                  <h3>Deskripsi Bantuan :</h3>
                  <p>{item.description}</p>
                </div>

                <div className="contact-box">
                  <h3>Contact</h3>
                  <p>{item.user?.email}</p>
                </div>

                <button className="terima-btn" onClick={() => handleAccept(item.id)}>
                  Terima Permintaan Bantuan
                </button>

                <p className="privacy-text" style={{ marginTop: "15px" }}>
                  <span>Privasi Anda Terjamin:</span> Semua informasi yang Anda berikan akan dijaga kerahasiaannya dan hanya digunakan untuk proses verifikasi relawan.
                </p>
              </div>
            ))}

            {/* CARD POPUP CHAT JIKA BERHASIL ACC (SUDAH DIPERBAIKIN DINAMIS) */}
            {acceptedId && (
              <div className="permintaan-card" style={{ border: "2px solid #28a745" }}>
                <div className="success-box" style={{ textAlign: "center", padding: "10px 0" }}>
                  <FaCheckCircle style={{ color: "#28a745", fontSize: "2.5rem" }} />
                  <h3 style={{ marginTop: "10px" }}>Permintaan Berhasil Diterima!</h3>
                  <p style={{ margin: "10px 0 20px 0" }}>
                    Anda sekarang terhubung dengan pemohon. Silakan lanjutkan komunikasi melalui fitur chat privat.
                  </p>
                  
                  {/* Diarahkan dinamis menggunakan ID bantuan yang di-ACC */}
                  <Link to={`/chat/${acceptedId}`} className="chat-btn" style={{ display: "inline-block", background: "#6f42c1", color: "#fff", padding: "10px 20px", borderRadius: "5px", textDecoration: "none", fontWeight: "bold" }}>
                    Buka Chat
                  </Link>
                </div>
              </div>
            )}

            {/* KONDISI JIKA TIDAK ADA DATA PENDING */}
            {!loading && requests.length === 0 && !acceptedId && (
              <div className="permintaan-card">
                <p className="permintaan-desc" style={{ textAlign: "center", padding: "20px 0", margin: 0 }}>
                  Belum ada permintaan bantuan baru dari penyandang disabilitas saat ini.
                </p>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: CARA KERJA */}
          <div className="cara-kerja-card" style={{ height: "fit-content" }}>
            <h2>Cara Kerja</h2>

            <div className="step-item">
              <div className="step-number">1</div>
              <div>
                <h4>Lihat Permintaan Bantuan</h4>
                <p>Pilih permintaan bantuan yang masuk di sistem</p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">2</div>
              <div>
                <h4>Validasi Data</h4>
                <p>Pastikan data bantuan sesuai kebutuhan pemohon</p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">3</div>
              <div>
                <h4>Konfirmasi Aksi</h4>
                <p>Ambil tindakan untuk membantu pemohon</p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">4</div>
              <div>
                <h4>Salurkan Bantuan</h4>
                <p>Berikan bantuan secara aman dan nyaman</p>
              </div>
            </div>

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
