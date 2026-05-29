import React from "react";
import { Link } from "react-router-dom";

import "./HomePage.css";

/* NAVBAR BARU */
import Navbar from "../../components/Navbar/Navbar";

import heroImage from "../../../assets/inkluspace.jpeg";

import galleryImage1 from "../../../assets/incluspace2.jpeg";
import galleryImage2 from "../../../assets/incluspace3.jpeg";

import { MdOutlineVolunteerActivism } from "react-icons/md";

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

  // ROLE
  const role = localStorage.getItem("role");
  const name = localStorage.getItem("name");

  return (

    <div className="home-container">

      {/* NAVBAR BARU */}
      <Navbar />

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

        {/* ROLE DISABILITAS */}
        {role === "disabilitas" && (
          <Link
            to="/request-help"
            className="fitur-card purple"
          >

            <MdOutlineVolunteerActivism className="fitur-icon" />

            <p>Minta Bantuan</p>

          </Link>
        )}

        {/* ROLE RELAWAN */}
        {role === "relawan" && (
          <Link
            to="/PermintaanBantuan"
            className="fitur-card purple"
          >

            <MdOutlineVolunteerActivism className="fitur-icon" />

            <p>Permintaan Bantuan</p>

          </Link>
        )}

        {/* BERBAGI CERITA */}
        <Link
          to="/berbagi cerita"
          className="fitur-card red-link"
        >

          <TbMessageHeart className="fitur-icon" />

          <p>Berbagi Cerita</p>

        </Link>

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