import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./BerbagiCerita.css";

import { FiEdit2 } from "react-icons/fi";

import { BsThreeDotsVertical } from "react-icons/bs";

function BerbagiCerita() {

  // STATE INPUT
  const [cerita, setCerita] = useState("");

  // STATE DAFTAR CERITA
  const [daftarCerita, setDaftarCerita] = useState([
    {
      id: 1,
      judul: "Aku berhasil lebih percaya diri hari ini",
      tanggal: "21 Apr.2025",
    },

    {
      id: 2,
      judul: "Hari ini aku senang bisa berbagi cerita",
      tanggal: "21 Nov.2025",
    },
  ]);

  // FUNCTION UPLOAD
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

    setDaftarCerita([
      ceritaBaru,
      ...daftarCerita,
    ]);

    setCerita("");
  };

  // FUNCTION DELETE
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

    <div className="berbagi-container">

      {/* HEADER */}
      <div className="berbagi-header">

        <h1>Berbagi Cerita</h1>

      </div>

      {/* CONTENT */}
      <div className="berbagi-content">

        {/* INPUT CERITA */}
        <div className="cerita-box">

          <div className="cerita-header">

            <h2>Tulis Cerita...</h2>

            <FiEdit2 className="edit-icon" />

          </div>

          <textarea
            placeholder="Tulis cerita kamu di sini..."
            value={cerita}
            onChange={(e) =>
              setCerita(e.target.value)
            }
            className="cerita-input"
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

            <div
              className="story-item"
              key={item.id}
            >

              <div className="story-left">

                <div className="profile-icon">

                  <div className="head"></div>

                  <div className="body"></div>

                </div>

                <div>

                  <h3>{item.judul}</h3>

                  <p>{item.tanggal}</p>

                </div>

              </div>

              {/* BUTTON TITIK TIGA */}
              <button
                className="dot-btn"
                onClick={() =>
                  handleDelete(item.id)
                }
              >

                <BsThreeDotsVertical />

              </button>

            </div>

          ))}

        </div>

        {/* BUTTON KEMBALI */}
        <div className="kembali-wrapper">

          <Link
            to="/home"
            className="kembali-btn"
          >
            Kembali
          </Link>

        </div>

      </div>

    </div>

  );

}

export default BerbagiCerita;