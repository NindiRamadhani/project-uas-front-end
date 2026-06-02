import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./BerbagiInformasi.css";

const BerbagiInformasi = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("user_id") || 1; 

  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");
  const [popup, setPopup] = useState("");
  const [showDetail, setShowDetail] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState({ title: "", content: "" });
  const [daftarInformasi, setDaftarInformasi] = useState([]);

  // PENTING: Pastikan port 9000 ini sama dengan yang tertera di terminal PHP Herd kamu!
  const API_URL = "http://127.0.0.1:9000/api/informations";

  useEffect(() => {
    fetchInformasi();
  }, []);

  const fetchInformasi = async () => {
    try {
      const response = await axios.get(API_URL);
      if (response.data.success) {
        setDaftarInformasi(response.data.data);
      }
    } catch (error) {
      console.error("Gagal mengambil data dari database:", error);
    }
  };

  const handleKirim = async () => {
    if (!judul.trim() || !isi.trim()) {
      setPopup("Judul dan isi informasi wajib diisi!");
      setTimeout(() => setPopup(""), 3000);
      return;
    }

    try {
      const dataDikirim = {
        user_id: userId, 
        title: judul.trim(),
        content: isi.trim()
      };

      console.log("Data yang mencoba dikirim:", dataDikirim);

      const response = await axios.post(API_URL, dataDikirim);

      if (response.data.success) {
        setPopup("Informasi berhasil disimpan ke database!");
        fetchInformasi(); 
        setJudul("");
        setIsi("");
      }
    } catch (error) {
      console.error("Error Detail saat kirim data:", error.response || error);
      setPopup("Gagal menyimpan! Periksa inspect console browser untuk melihat error.");
    }

    setTimeout(() => setPopup(""), 3000);
  };

  const handleBaca = (item) => {
    setSelectedInfo({
      title: item.title,
      content: item.content
    });
    setShowDetail(true);
  };

  return (
    <div className="berbagi-page">
      <div className="berbagi-header">
        <h1>Berbagi Informasi</h1>
      </div>

      <div className="berbagi-content">
        <div className="daftar-informasi">
          <h2>Daftar Informasi</h2>
          {daftarInformasi.length === 0 ? (
            <p style={{ fontSize: "18px", color: "#555" }}>Belum ada informasi tersedia.</p>
          ) : (
            daftarInformasi.map((item) => (
              <div className="info-card" key={item.id}>
                <div className="info-left">
                  <div className="info-icon"></div>
                  <div className="info-text">
                    <p>{item.title}</p>
                  </div>
                </div>
                <button className="info-button" onClick={() => handleBaca(item)}>
                  Baca Selengkapnya
                </button>
              </div>
            ))
          )}
        </div>

        <div className="form-area">
          <div className="form-card">
            <div className="form-group">
              <label>Judul</label>
              <input
                type="text"
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                className="input-judul"
                placeholder="Ketik judul..."
              />
            </div>

            <div className="form-group">
              <label>Isi</label>
              <textarea
                value={isi}
                onChange={(e) => setIsi(e.target.value)}
                className="input-isi"
                placeholder="Ketik isi informasi..."
              ></textarea>
            </div>

            <div className="button-area">
              <button className="kembali-button" onClick={() => navigate("/home")}>
                Kembali
              </button>
              <button className="kirim-button" onClick={handleKirim}>
                Kirim
              </button>
            </div>

            {popup && (
              <div 
                className="popup-message"
                style={{
                  backgroundColor: popup.includes("berhasil") ? "#e0f2fe" : "#fee2e2",
                  color: popup.includes("berhasil") ? "#0369a1" : "#b91c1c"
                }}
              >
                {popup}
              </div>
            )}
          </div>
        </div>
      </div>

      {showDetail && (
        <div className="modal-overlay" onClick={() => setShowDetail(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedInfo.title}</h2>
            <p style={{ whiteSpace: "pre-wrap" }}>{selectedInfo.content}</p>
            <button className="tutup-button" onClick={() => setShowDetail(false)}>
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BerbagiInformasi;