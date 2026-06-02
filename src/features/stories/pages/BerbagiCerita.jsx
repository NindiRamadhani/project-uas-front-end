import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BerbagiCerita.css";
import { FiEdit2 } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";

function BerbagiCerita() {
  const [judul, setJudul] = useState(""); // State baru khusus untuk Judul
  const [cerita, setCerita] = useState(""); // State untuk Isi Cerita
  const [ceritaTerpilih, setCeritaTerpilih] = useState(null);

  const [daftarCerita, setDaftarCerita] = useState([
    {
      id: 1,
      judul: "Pengalaman Pertama jadi Volunteer",
      isi: "Hari ini seru banget! Aku ikutan jadi volunteer di acara penanaman pohon. Ketemu banyak teman baru yang satu visi dan kerjanya kompak abis.",
      tanggal: "4 Juni 2026",
    },
    {
      id: 2,
      judul: "Senang Banget Hari Ini",
      isi: "Akhirnya projek aplikasi React-ku kelar juga setelah begadang 2 hari. Desainnya rapi dan fiturnya jalan semua tanpa error. Lega rasanya!",
      tanggal: "5 Juni 2025",
    },
  ]);

  const handleUpload = () => {
    if (judul.trim() === "" || cerita.trim() === "") {
      alert("Judul dan Isi cerita tidak boleh kosong!");
      return;
    }

    const ceritaBaru = {
      id: Date.now(),
      judul: judul.trim(),
      isi: cerita.trim(),
      tanggal: new Date().toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    };

    setDaftarCerita([ceritaBaru, ...daftarCerita]);
    setJudul("");  // Reset input judul
    setCerita(""); // Reset input isi cerita
  };

  const handleDelete = (e, id) => {
    e.stopPropagation(); 
    const konfirmasi = window.confirm("Yakin ingin menghapus cerita ini?");

    if (konfirmasi) {
      const hasil = daftarCerita.filter((item) => item.id !== id);
      setDaftarCerita(hasil);
      if (ceritaTerpilih?.id === id) setCeritaTerpilih(null);
    }
  };

  return (
    <div className="berbagi-cerita-container">
      {/* HEADER */}
      <div className="berbagi-cerita-header">
        <h1>Berbagi Cerita</h1>
      </div>

      {/* CONTENT */}
      <div className="berbagi-cerita-content">
        
        {/* BOX CERITA */}
        <div className="cerita-box">
          <div className="cerita-box-header">
            <h2>Ketik Cerita Dibawah : </h2>
            <FiEdit2 className="edit-icon" />
          </div>

          {/* Form Input Group */}
          <div className="inputs-wrapper">
            {/* INPUT JUDUL */}
            <input
              type="text"
              className="judul-input"
              placeholder="Masukkan Judul Cerita..."
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
            />
            
            {/* INPUT ISI CERITA */}
            <textarea
              className="cerita-input"
              placeholder="Tuliskan pengalaman atau ceritamu di sini..."
              value={cerita}
              onChange={(e) => setCerita(e.target.value)}
            ></textarea>
          </div>
        </div>

        {/* BUTTON UPLOAD */}
        <div className="upload-wrapper">
          <button className="upload-btn" onClick={handleUpload}>
            Upload
          </button>
        </div>

        {/* DAFTAR CERITA */}
        <div className="daftar-cerita">
          <h2>Daftar Cerita</h2>

          {daftarCerita.map((item) => (
            <div 
              className="story-item" 
              key={item.id}
              onClick={() => setCeritaTerpilih(item)}
              style={{ cursor: "pointer" }}
            >
              <div className="story-left">
                <div className="profile-icon">
                  <div className="head"></div>
                  <div className="body"></div>
                </div>

                <div className="story-text">
                  <h3>{item.judul}</h3>
                  <p>{item.tanggal}</p>
                </div>
              </div>

              <button
                className="dot-btn"
                onClick={(e) => handleDelete(e, item.id)}
              >
                <BsThreeDotsVertical />
              </button>
            </div>
          ))}
        </div>

        {/* MODAL DETAIL CERITA */}
        {ceritaTerpilih && (
          <div className="modal-overlay" onClick={() => setCeritaTerpilih(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>{ceritaTerpilih.judul}</h2> {/* Menampilkan Judul Asli di Modal */}
                <button className="close-btn" onClick={() => setCeritaTerpilih(null)}>×</button>
              </div>
              <div className="modal-body">
                <span className="modal-date">{ceritaTerpilih.tanggal}</span>
                <p className="modal-text">{ceritaTerpilih.isi}</p>
              </div>
            </div>
          </div>
        )}

        {/* BUTTON KEMBALI */}
        <div className="kembali-wrapper">
          <Link to="/home" className="kembali-btn">
            Kembali
          </Link>
        </div>

      </div>
    </div>
  );
}

export default BerbagiCerita;