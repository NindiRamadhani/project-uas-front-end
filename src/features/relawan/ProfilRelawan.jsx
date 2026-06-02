import React, { useState, useEffect } from "react";
import "./ProfilRelawan.css";
import Navbar from "../components/Navbar/Navbar";
import { FaUserCircle } from "react-icons/fa";

function ProfilRelawan() {
  // 1. AMBIL DATA DARI LOCAL STORAGE (Sesuai dengan key yang disimpan saat login)
  const role = localStorage.getItem("role");
  const id = localStorage.getItem("id");
  const namaLogin = localStorage.getItem("nama") || localStorage.getItem("name"); 
  const emailLogin = localStorage.getItem("email");

  // STATE DATA PROFIL
  const [nama, setNama] = useState("Andi Saputra");
  const [email, setEmail] = useState("andi@gmail.com");
  const [telepon, setTelepon] = useState("081234567890");
  const [alamat, setAlamat] = useState("Malang, Jawa Timur");
  const [keahlian, setKeahlian] = useState("Pendampingan dan Konseling");

  // 2. MASUKKAN DATA LOGIN KE STATE SAAT HALAMAN DI-LOAD
  useEffect(() => {
    if (namaLogin) {
      setNama(namaLogin);
    }
    if (emailLogin) {
      setEmail(emailLogin);
    }
  }, [namaLogin, emailLogin]);

  // STATE EDIT
  const [isEdit, setIsEdit] = useState(false);

  // HANDLE BUTTON
  const handleEdit = () => {
    if (isEdit) {
      alert("Profil relawan berhasil disimpan!");
      // Jika nanti ada update ke API, bisa ditaruh di sini
    }
    setIsEdit(!isEdit);
  };

  return (
    <div className="relawan-container">
      {/* NAVBAR BARU */}
      <Navbar />

      {/* CONTENT */}
      <div className="relawan-content">
        {/* FOTO PROFIL */}
        <div className="relawan-image-section">
          <FaUserCircle className="relawan-icon" />
        </div>

        {/* INFO */}
        <div className="relawan-info">
          <h1>{nama}</h1>

          <p className="relawan-status">
            Status : {role || "Relawan"}
          </p>

          {/* FORM */}
          <div className="relawan-form">
            {/* NAMA */}
            <div className="input-group">
              <label>Nama Lengkap</label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                disabled={!isEdit}
              />
            </div>

            {/* EMAIL */}
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={!isEdit}
              />
            </div>

            {/* TELEPON */}
            <div className="input-group">
              <label>No Telepon</label>
              <input
                type="text"
                value={telepon}
                onChange={(e) => setTelepon(e.target.value)}
                disabled={!isEdit}
              />
            </div>

            {/* ALAMAT */}
            <div className="input-group">
              <label>Alamat</label>
              <textarea
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                disabled={!isEdit}
              />
            </div>

            {/* KEAHLIAN */}
            <div className="input-group">
              <label>Keahlian</label>
              <input
                type="text"
                value={keahlian}
                onChange={(e) => setKeahlian(e.target.value)}
                disabled={!isEdit}
              />
            </div>

            {/* BUTTON */}
            <button
              className="save-btn"
              onClick={handleEdit}
            >
              {isEdit ? "Simpan Profil" : "Edit Profil"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilRelawan;