import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ajax from "axios";

import "./Navbar.css";
import logoInkluSpace from "../../../assets/logoinkluspace.png";

import {
  IoHomeOutline,
  IoChatbubbleOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();

  // Ambil data session login
  const role = localStorage.getItem("role");
  const name = localStorage.getItem("name");
  const myId = localStorage.getItem("id");
  const token = localStorage.getItem("token");

  const [activeHelpId, setActiveHelpId] = useState(null);

  // Cari ID bantuan untuk rute tombol Chat privat
  useEffect(() => {
    // 1. CEK LOCALSTORAGE TERLEBIH DAHULU (Prioritas Utama agar tidak kembali ke /chat/1 saat refresh)
    const savedChatId = localStorage.getItem("active_chat_id");
    if (savedChatId) {
      setActiveHelpId(savedChatId);
    }

    // 2. TETAP LAKUKAN FETCH API SEBAGAI SYNC CADANGAN
    const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};

    ajax
      .get("http://127.0.0.1:9000/api/help-requests", config)
      .then((response) => {
        const dataBantuan = Array.isArray(response.data) 
          ? response.data 
          : (response.data && Array.isArray(response.data.data) ? response.data.data : []);

        const cleanMyId = myId ? myId.toString().trim() : "";

        if (role === "disabilitas") {
          const myRequest = dataBantuan.find(
            (req) => req.user_id && req.user_id.toString().trim() === cleanMyId
          );

          if (myRequest) {
            setActiveHelpId(myRequest.id);
            localStorage.setItem("active_chat_id", myRequest.id); // Kunci ID ke lokal browser
          } else if (!savedChatId && dataBantuan.length > 0) {
            // Jika di localstorage kosong, baru gunakan fallback antrean database
            setActiveHelpId(dataBantuan[0].id);
            localStorage.setItem("active_chat_id", dataBantuan[0].id);
          }
        } else {
          // JIKA YANG LOGIN RELAWAN
          const acceptedRequest = dataBantuan.find(
            (req) => req.relawan_id && req.relawan_id.toString().trim() === cleanMyId
          );
          
          if (acceptedRequest) {
            setActiveHelpId(acceptedRequest.id);
            localStorage.setItem("active_chat_id", acceptedRequest.id); // Kunci ID ke lokal browser
          } else if (!savedChatId && dataBantuan.length > 0) {
            setActiveHelpId(dataBantuan[0].id);
            localStorage.setItem("active_chat_id", dataBantuan[0].id);
          }
        }
      })
      .catch((error) => {
        console.error("Gagal mengambil data sinkronisasi chat pada Navbar:", error);
      });
  }, [myId, role, token]);

  // Fungsi mengalihkan rute chat secara dinamis saat teks/icon diklik
  const handleChatNavigation = (e) => {
    e.preventDefault();
    
    // Ambil data real-time terakhir dari localstorage sebelum navigasi dijalankan
    const currentSavedId = localStorage.getItem("active_chat_id");

    if (currentSavedId) {
      navigate(`/chat/${currentSavedId}`);
    } else if (activeHelpId) {
      navigate(`/chat/${activeHelpId}`);
    } else {
      // Jika benar-benar belum membuat/meng-ACC bantuan sama sekali sepanjang sesi
      alert("Anda belum memiliki obrolan chat aktif yang terhubung.");
      navigate("/home"); 
    }
  };

  return (
    <div className="navbar">

      {/* LOGO */}
      <div className="logo-section">
        <img
          src={logoInkluSpace}
          alt="logo"
          className="logo-img"
        />
        <p>InkluSpace</p>
      </div>

      {/* MENU */}
      <div className="menu-section">

        {/* BERANDA */}
        <Link
          to="/home"
          className="menu-item-link"
        >
          <IoHomeOutline className="nav-icon" />
          <span>Beranda</span>
        </Link>

        {/* ROLE DISABILITAS */}
        {role === "disabilitas" && (
          <Link
            to="/request-help"
            className="menu-item-link"
          >
            <MdOutlineVolunteerActivism className="nav-icon" />
            <span>Minta Bantuan</span>
          </Link>
        )}

        {/* ROLE RELAWAN */}
        {role === "relawan" && (
          <Link
            to="/PermintaanBantuan"
            className="menu-item-link"
          >
            <MdOutlineVolunteerActivism className="nav-icon" />
            <span>Permintaan Bantuan</span>
          </Link>
        )}

        {/* CHAT - PERBAIKAN SINKRONISASI DINAMIS */}
        <a
          href="#chat"
          onClick={handleChatNavigation}
          className="menu-item-link"
          style={{ textDecoration: "none" }}
        >
          <IoChatbubbleOutline className="nav-icon" />
          <span>Chat</span>
        </a>

        {/* PROFIL DISABILITAS */}
        {role === "disabilitas" && (
          <Link
            to="/profil-disabilitas"
            className="menu-item-link"
          >
            <FaRegUser className="nav-icon" />
            <span>Profil</span>
          </Link>
        )}

        {/* PROFIL RELAWAN */}
        {role === "relawan" && (
          <Link
            to="/ProfilRelawan"
            className="menu-item-link"
          >
            <FaRegUser className="nav-icon" />
            <span>Profil</span>
          </Link>
        )}

        {/* LOGOUT */}
        <Link
          to="/logout"
          onClick={() => localStorage.removeItem("active_chat_id")} // Bersihkan jejak chat saat user logout
          className="menu-item-link"
        >
          <IoLogOutOutline className="nav-icon" />
          <span>Logout</span>
        </Link>

      </div>

    </div>
  );
}

export default Navbar;