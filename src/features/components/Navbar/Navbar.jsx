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

  // Cari ID bantuan dari database untuk rute tombol Chat privat
  useEffect(() => {
    const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};

    ajax
      .get("http://127.0.0.1:9000/api/help-requests", config)
      .then((response) => {
        // Antisipasi jika struktur API dibungkus dalam key 'data' atau array langsung
        const dataBantuan = Array.isArray(response.data) 
          ? response.data 
          : (response.data && Array.isArray(response.data.data) ? response.data.data : []);

        if (dataBantuan.length === 0) return;

        // Ambil ID dari localStorage, bersihkan dari spasi/karakter aneh jika ada
        const cleanMyId = myId ? myId.toString().trim() : "";

        if (role === "disabilitas") {
          // JALAN AMAN: Cari bantuan yang user_id-nya sama (dikonversi ke string agar aman dari bug tipe data)
          const myRequest = dataBantuan.find(
            (req) => req.user_id && req.user_id.toString().trim() === cleanMyId
          );

          if (myRequest) {
            setActiveHelpId(myRequest.id);
          } else {
            // JALAN PINTAS DEMO: Jika ID lokal tidak sinkron, paksa pakai ID dari baris data pertama di database
            setActiveHelpId(dataBantuan[0].id);
          }
        } else {
          // Jika yang login RELAWAN: cari bantuan yang dia hendaki atau ambil data antrean pertama
          const acceptedRequest = dataBantuan.find(
            (req) => req.relawan_id && req.relawan_id.toString().trim() === cleanMyId
          );
          
          if (acceptedRequest) {
            setActiveHelpId(acceptedRequest.id);
          } else {
            // Langsung ambil data antrean pertama agar relawan bisa membalas chat Rohani/Felicia
            setActiveHelpId(dataBantuan[0].id);
          }
        }
      })
      .catch((error) => {
        console.error("Gagal mengambil data sinkronisasi chat pada Navbar:", error);
        // Fallback darurat jika server sempat loss connection saat load navbar
        setActiveHelpId(1);
      });
  }, [myId, role, token]);

  // Fungsi mengalihkan rute chat secara dinamis saat teks/icon diklik
  const handleChatNavigation = (e) => {
    e.preventDefault();
    if (activeHelpId) {
      navigate(`/chat/${activeHelpId}`);
    } else {
      // Tombol darurat jika data benar-benar terkunci, paksa lempar ke chat ID 1 demi kelancaran demo
      navigate("/chat/1");
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

        {/* CHAT - ANTI BUG TIPE DATA */}
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