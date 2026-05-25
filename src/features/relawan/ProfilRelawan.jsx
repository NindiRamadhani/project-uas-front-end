import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./ProfilRelawan.css";

import logoInkluSpace from "../../assets/logoinkluspace.png";

import {
  IoHomeOutline,
  IoChatbubbleOutline,
  IoLogOutOutline,
} from "react-icons/io5";

import { MdOutlineVolunteerActivism } from "react-icons/md";

import { FaRegUser, FaUserCircle } from "react-icons/fa";

function ProfilRelawan() {

  // STATE DATA PROFIL
  const [nama, setNama] = useState("Andi Saputra");
  const [email, setEmail] = useState("andi@gmail.com");
  const [telepon, setTelepon] = useState("081234567890");
  const [alamat, setAlamat] = useState("Malang, Jawa Timur");
  const [keahlian, setKeahlian] = useState("Pendampingan dan Konseling");

  // STATE EDIT
  const [isEdit, setIsEdit] = useState(false);

  // HANDLE BUTTON
  const handleEdit = () => {

    if(isEdit){
      alert("Profil relawan berhasil disimpan!");
    }

    setIsEdit(!isEdit);
  };

  return (

    <div className="relawan-container">

      {/* NAVBAR */}
      <div className="relawan-navbar">

        {/* LOGO */}
        <div className="relawan-logo-section">

          <img
            src={logoInkluSpace}
            alt="logo"
            className="relawan-logo-img"
          />

          <p>InkluSpace</p>

        </div>

        {/* MENU */}
        <div className="relawan-menu-section">

          {/* BERANDA */}
          <Link
            to="/home"
            className="relawan-menu-item"
          >

            <IoHomeOutline className="relawan-nav-icon" />

            <span>Beranda</span>

          </Link>

          {/* PERMINTAAN BANTUAN */}
          <Link
            to="/PermintaanBantuan"
            className="relawan-menu-item"
          >

            <MdOutlineVolunteerActivism className="relawan-nav-icon" />

            <span>Permintaan Bantuan</span>

          </Link>

          {/* CHAT */}
          <Link
            to="/chat"
            className="relawan-menu-item"
          >

            <IoChatbubbleOutline className="relawan-nav-icon" />

            <span>Chat</span>

          </Link>

          {/* PROFIL */}
          <Link
            to="/profil-relawan"
            className="relawan-menu-item active-menu"
          >

            <FaRegUser className="relawan-nav-icon" />

            <span>Profil</span>

          </Link>

          {/* LOGOUT */}
          <Link
            to="/logout"
            className="relawan-menu-item"
          >

            <IoLogOutOutline className="relawan-nav-icon" />

            <span>Logout</span>

          </Link>

        </div>

      </div>

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
            Status : Relawan
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