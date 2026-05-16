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

          <div className="menu-item">
            <IoHomeOutline className="nav-icon" />
            <span>Beranda</span>
          </div>

          <div className="menu-item">
            <MdOutlineVolunteerActivism className="nav-icon" />
            <span>Minta Bantuan</span>
          </div>

          {/* CHAT MENU */}
          <Link to="/chat" className="menu-item-link">
            <IoChatbubbleOutline className="nav-icon" />
            <span>Chat</span>
          </Link>

          <div className="menu-item">
            <FaRegUser className="nav-icon" />
            <span>Profil</span>
          </div>

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

        <div className="fitur-card purple">
          <MdOutlineVolunteerActivism className="fitur-icon" />
          <p>Minta Bantuan</p>
        </div>

        <div className="fitur-card red">
          <TbMessageHeart className="fitur-icon" />
          <p>Berbagi Cerita</p>
        </div>

        {/* CARD CHAT YANG BISA DIKLIK */}
        <Link to="/chat" className="fitur-card green-link">
          <HiOutlineChatBubbleLeftRight className="fitur-icon" />
          <p>Chat dan Call</p>
        </Link>

        {/* CARD BERBAGI INFORMASI YANG BISA DIKLIK */}
        <Link to="/informasi" className="fitur-card orange-link">
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