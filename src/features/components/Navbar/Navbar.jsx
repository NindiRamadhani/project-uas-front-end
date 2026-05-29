import React from "react";
import { Link } from "react-router-dom";

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

  // TEST ROLE SEMENTARA
  const role = localStorage.getItem("role");
  const name = localStorage.getItem("name");

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

        {/* CHAT */}
        <Link
          to="/chat"
          className="menu-item-link"
        >

          <IoChatbubbleOutline className="nav-icon" />

          <span>Chat</span>

        </Link>

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