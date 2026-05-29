import React, { useState } from "react";

import "./ProfilPenyandangDisabilitas.css";

import Navbar from "../components/Navbar/Navbar";

import { FaUserCircle } from "react-icons/fa";

function ProfilPenyandangDisabilitas() {

  // ROLE DARI LOCAL STORAGE
  const role = localStorage.getItem("role");
  const id = localStorage.getItem("id");

  // STATE DATA PROFIL
  const [nama, setNama] = useState("Budi Prasetyo");
  const [email, setEmail] = useState("budi@gmail.com");
  const [telepon, setTelepon] = useState("081234567890");
  const [alamat, setAlamat] = useState("Blitar, Jawa Timur");
  const [disabilitas, setDisabilitas] = useState("Tunanetra");

  // STATE EDIT
  const [isEdit, setIsEdit] = useState(false);

  // HANDLE BUTTON
  const handleEdit = () => {

    if(isEdit){
      alert("Profil berhasil disimpan!");
    }

    setIsEdit(!isEdit);
  };

  return (

    <div className="profile-container">

      {/* NAVBAR BARU */}
      <Navbar />

      {/* CONTENT */}
      <div className="profile-content">

        {/* FOTO PROFIL */}
        <div className="profile-image-section">

          <FaUserCircle className="profile-icon" />

        </div>

        {/* INFO */}
        <div className="profile-info">

          <h1>{nama}</h1>

          <p className="profile-status">
            Status : {role || "Penyandang Disabilitas"}
          </p>

          {/* FORM */}
          <div className="profile-form">

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

            {/* DISABILITAS */}
            <div className="input-group">

              <label>Jenis Disabilitas</label>

              <input
                type="text"
                value={disabilitas}
                onChange={(e) => setDisabilitas(e.target.value)}
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

export default ProfilPenyandangDisabilitas;