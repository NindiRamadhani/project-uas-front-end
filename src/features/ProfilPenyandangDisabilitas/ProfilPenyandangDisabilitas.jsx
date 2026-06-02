import React, { useState, useEffect } from "react";
import "./ProfilPenyandangDisabilitas.css";
import Navbar from "../components/Navbar/Navbar";
import { FaUserCircle } from "react-icons/fa";

function ProfilPenyandangDisabilitas() {
  // Mengambil data autentikasi dari localStorage agar tidak error Inertia
  const role = localStorage.getItem("role");
  const namaLogin = localStorage.getItem("nama") || localStorage.getItem("name"); 
  const emailLogin = localStorage.getItem("email");

  // STATE DATA PROFIL (Default: Rohani)
  const [nama, setNama] = useState("Rohani");
  const [email, setEmail] = useState("rohani@gmail.com");
  const [telepon, setTelepon] = useState("081298765432");
  const [alamat, setAlamat] = useState("Jakarta Pusat, DKI Jakarta");

  // Sinkronisasi data saat komponen dimuat
  useEffect(() => {
    if (namaLogin) setNama(namaLogin);
    if (emailLogin) setEmail(emailLogin);
  }, [namaLogin, emailLogin]);

  // STATE EDIT MODE
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    if (isEdit) {
      alert("Profil penyandang disabilitas berhasil disimpan!");
    }
    setIsEdit(!isEdit);
  };

  return (
    <div className="profile-container">
      {/* NAVBAR */}
      <Navbar />

      {/* CONTENT CARD */}
      <div className="profile-content">
        {/* FOTO PROFIL */}
        <div className="profile-image-section">
          <FaUserCircle className="profile-icon" />
        </div>

        {/* INFO NAMA & STATUS */}
        <div className="profile-info">
          <h1>{nama}</h1>
          <p className="profile-status">
            Status : {role || "disabilitas"}
          </p>

          {/* FORM ISIAN DATA */}
          <div className="profile-form">
            {/* NAMA LENGKAP */}
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

            {/* NO TELEPON */}
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

            {/* ACTION BUTTON */}
            <button className="save-btn" onClick={handleEdit}>
              {isEdit ? "Simpan Profil" : "Edit Profil"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilPenyandangDisabilitas;