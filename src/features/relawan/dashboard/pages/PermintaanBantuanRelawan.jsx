import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ajax from "axios"; 

import "./PermintaanBantuanRelawan.css";
import Navbar from "../../../components/Navbar/Navbar";
import { FaUser, FaBook } from "react-icons/fa";
import { MdOutlineVolunteerActivism } from "react-icons/md";

function PermintaanBantuanRelawan() {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

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

  const handleAccept = (id) => {
    ajax
      .post(`http://127.0.0.1:9000/api/help-requests/${id}/accept`, {}, config)
      .then((response) => {
        alert(response.data.message || "Permintaan berhasil disetujui!");
        
        // Kunci ID bantuan aktif ke local browser milik Relawan
        localStorage.setItem("active_chat_id", id); 
        setRequests(requests.filter((req) => req.id !== id));

        // Langsung lompat otomatis ke ruang obrolan dengan ID bantuan yang sesuai
        navigate(`/chat/${id}`);
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
          <div className="permintaan-list" style={{ flex: 1, display: "flex", flexDirection: "column", gap: "20px" }}>
            {loading && <p style={{ textAlign: "center" }}>Memuat data dari database internal...</p>}

            {!loading && requests.map((item) => (
              <div className="permintaan-card" key={item.id} style={{ marginBottom: "0px" }}>
                <h2>Detail Permintaan Bantuan</h2>

                <div className="permintaan-top">
                  <div>
                    <p className="label">Pemohon :</p>
                    <span><FaUser /> {item.user?.name}</span>
                  </div>
                  <div>
                    <p className="label">Kategori Bantuan :</p>
                    <span><FaBook /> {item.category}</span>
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
              </div>
            ))}

            {!loading && requests.length === 0 && (
              <div className="permintaan-card">
                <p className="permintaan-desc" style={{ textAlign: "center", padding: "20px 0", margin: 0 }}>
                  Belum ada permintaan bantuan baru dari penyandang disabilitas saat ini.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PermintaanBantuanRelawan;