// HomePage.jsx

import React from "react";
import { Link } from "react-router-dom";

import "./HomePage.css";

import logoInkluSpace from "../../../assets/logoinkluspace.png";
import heroImage from "../../../assets/inkluspace.jpeg";

import galleryImage1 from "../../../assets/incluspace2.jpeg";
import galleryImage2 from "../../../assets/incluspace3.jpeg";

import {
  IoHomeOutline,
  IoChatbubbleOutline,
  IoLogOutOutline,
} from "react-icons/io5";

import { MdOutlineVolunteerActivism } from "react-icons/md";

import { FaRegUser } from "react-icons/fa";

import {
  HiOutlineUserGroup,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";

import { TbMessageHeart } from "react-icons/tb";

import {
  RiShieldCheckLine,
  RiHandHeartLine,
} from "react-icons/ri";

function HomePage() {

  return (

    <div className="home-container">

      {/* NAVBAR */}
      <div className="navbar">

        <div className="logo-section">

          <img
            src={logoInkluSpace}
            alt="logo"
            className="logo-img"
          />

          <p>InkluSpace</p>

        </div>

        <div className="menu-section">

          {/* BERANDA */}
          <div className="menu-item">

            <IoHomeOutline className="nav-icon" />

            <span>Beranda</span>

          </div>

          {/* MINTA BANTUAN */}
          <Link
            to="/request-help"
            className="menu-item-link"
          >

            <MdOutlineVolunteerActivism className="nav-icon" />

            <span>Minta Bantuan</span>

          </Link>

          {/* CHAT */}
          <Link
            to="/chat"
            className="menu-item-link"
          >

            <IoChatbubbleOutline className="nav-icon" />

            <span>Chat</span>

          </Link>

          {/* PROFIL */}
          <Link
            to="/profil-disabilitas"
            className="menu-item-link"
          >

            <FaRegUser className="nav-icon" />

            <span>Profil</span>

          </Link>

          {/* LOGOUT */}
          <div className="menu-item">

            <IoLogOutOutline className="nav-icon" />

            <span>Logout</span>

          </div>

        </div>

      </div>

      {/* HERO */}
      <div className="hero-section">

        <div className="hero-text">

          <h1>
            Bersama <br />
            Membangun <br />
            Masyarakat Inklusif
          </h1>

          <p>
            InkluSpace menghubungkan
            mereka yang membutuhkan
            dengan mereka yang ingin
            berbagi.
          </p>

        </div>

        <div className="hero-image">

          <img
            src={heroImage}
            alt="hero"
            className="hero-img"
          />

        </div>

      </div>

      {/* FITUR */}
      <h2 className="fitur-title">Fitur</h2>

      <div className="fitur-container">

        {/* MINTA BANTUAN */}
        <Link
          to="/request-help"
          className="fitur-card purple"
        >

          <MdOutlineVolunteerActivism className="fitur-icon" />

          <p>Minta Bantuan</p>

        </Link>

        {/* BERBAGI CERITA */}
        <div className="fitur-card red">

          <TbMessageHeart className="fitur-icon" />

          <p>Berbagi Cerita</p>

        </div>

        {/* CHAT */}
        <Link
          to="/chat"
          className="fitur-card green-link"
        >

          <HiOutlineChatBubbleLeftRight className="fitur-icon" />

          <p>Chat</p>

        </Link>

        {/* INFORMASI */}
        <Link
          to="/Informasi"
          className="fitur-card orange-link"
        >

          <HiOutlineUserGroup className="fitur-icon" />

          <p>Berbagi Informasi</p>

        </Link>

      </div>

      {/* GALLERY */}
      <div className="gallery-section">

        <div className="gallery-image-box">

          <img
            src={galleryImage1}
            alt="gallery1"
            className="gallery-img"
          />

        </div>

        <div className="gallery-image-box">

          <img
            src={galleryImage2}
            alt="gallery2"
            className="gallery-img"
          />

        </div>

      </div>

      {/* NILAI */}
      <div className="nilai-section">

        <h2>Nilai-Nilai Kami</h2>

        <p className="nilai-desc">
          Komitmen kami untuk menciptakan
          lingkungan yang inklusif
        </p>

        <div className="nilai-container">

          {/* CARD 1 */}
          <div className="nilai-card">

            <div className="nilai-icon pink">
              <RiHandHeartLine />
            </div>

            <h3>Inklusif</h3>

            <p>
              Setiap orang berhak
              mendapat dukungan
            </p>

          </div>

          {/* CARD 2 */}
          <div className="nilai-card">

            <div className="nilai-icon pink">
              <RiShieldCheckLine />
            </div>

            <h3>Aman dan Terpercaya</h3>

            <p>
              Privasi dan keamanan
              adalah prioritas
            </p>

          </div>

          {/* CARD 3 */}
          <div className="nilai-card">

            <div className="nilai-icon pink">
              <RiHandHeartLine />
            </div>

            <h3>Mudah Digunakan</h3>

            <p>
              Antarmuka yang ramah
              dan aksesibel
            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default HomePage;