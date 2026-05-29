import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BerbagiCerita.css";
import { FiEdit2 } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";

function BerbagiCerita() {
  const [cerita, setCerita] = useState("");

  const [daftarCerita, setDaftarCerita] = useState([
    {
      id: 1,
      judul: "Tulis Cerita 1",
      tanggal: "21 Apr.2025",
    },
    {
      id: 2,
      judul: "Tulis Cerita 2",
      tanggal: "21 Nov.2025",
    },
  ]);

  const handleUpload = () => {
    if (cerita.trim() === "") {
      alert("Cerita tidak boleh kosong!");
      return;
    }

    const ceritaBaru = {
      id: Date.now(),
      judul: cerita,
      tanggal: new Date().toLocaleDateString("id-ID"),
    };

    setDaftarCerita([ceritaBaru, ...daftarCerita]);
    setCerita("");
  };

  const handleDelete = (id) => {
    const konfirmasi = window.confirm(
      "Yakin ingin menghapus cerita ini?"
    );

    if (konfirmasi) {
      const hasil = daftarCerita.filter(
        (item) => item.id !== id
      );

      setDaftarCerita(hasil);
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
            <h2>Tulis Cerita...</h2>
            <FiEdit2 className="edit-icon" />
          </div>

          <textarea
            className="cerita-input"
            placeholder=""
            value={cerita}
            onChange={(e) => setCerita(e.target.value)}
          ></textarea>

        </div>

        {/* BUTTON UPLOAD */}
        <div className="upload-wrapper">
          <button
            className="upload-btn"
            onClick={handleUpload}
          >
            Upload
          </button>
        </div>

        {/* DAFTAR CERITA */}
        <div className="daftar-cerita">
          <h2>Daftar Cerita</h2>

          {daftarCerita.map((item) => (
            <div className="story-item" key={item.id}>

              <div className="story-left">

                {/* ICON PROFILE */}
                <div className="profile-icon">
                  <div className="head"></div>
                  <div className="body"></div>
                </div>

                {/* TEXT */}
                <div className="story-text">
                  <h3>{item.judul}</h3>
                  <p>{item.tanggal}</p>
                </div>

              </div>

              {/* TITIK TIGA */}
              <button
                className="dot-btn"
                onClick={() => handleDelete(item.id)}
              >
                <BsThreeDotsVertical />
              </button>

            </div>
          ))}
        </div>

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