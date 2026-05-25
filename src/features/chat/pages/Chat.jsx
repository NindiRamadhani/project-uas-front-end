import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Chat.css";

import logoInkluSpace from "../../../assets/logoinkluspace.png";

import {
  IoHomeOutline,
  IoChatbubbleOutline,
  IoLogOutOutline,
  IoSend,
} from "react-icons/io5";

import { MdOutlineVolunteerActivism } from "react-icons/md";

import { FaRegUser, FaUserCircle } from "react-icons/fa";

/*
========================================
UBAH ROLE DISINI
========================================

"disabilitas"
atau
"relawan"

*/

function Chat() {

  const role = "disabilitas";

  const [message, setMessage] = useState("");

  const [chatMessages, setChatMessages] = useState([
    {
      text: "Hai Budi Santoso saya ingin bertanya",
      sender: "user",
      time: "14:32",
    },

    {
      text: "Selamat siang!, apa yang bisa saya bantu hari ini?",
      sender: "other",
      time: "14:33",
    },
  ]);

  const sendMessage = () => {

    if (message.trim() === "") return;

    setChatMessages([
      ...chatMessages,
      {
        text: message,
        sender: "user",
        time: "14:35",
      },
    ]);

    setMessage("");
  };

  return (

    <div className="chat-container">

      {/* NAVBAR */}

      <div className="chat-navbar">

        {/* LOGO */}

        <div className="chat-logo-section">

          <img
            src={logoInkluSpace}
            alt="logo"
            className="chat-logo-img"
          />

          <p>InkluSpace</p>

        </div>

        {/* MENU */}

        <div className="chat-menu-section">

          {/* BERANDA */}

          <Link
            to="/home"
            className="chat-menu-item"
          >

            <IoHomeOutline className="chat-nav-icon" />

            <span>Beranda</span>

          </Link>

          {/* ROLE MENU */}

          {
            role === "disabilitas" ? (

              <Link
                to="/request-help"
                className="chat-menu-item"
              >

                <MdOutlineVolunteerActivism className="chat-nav-icon" />

                <span>Minta Bantuan</span>

              </Link>

            ) : (

              <Link
                to="/PermintaanBantuan"
                className="chat-menu-item"
              >

                <MdOutlineVolunteerActivism className="chat-nav-icon" />

                <span>Permintaan Bantuan</span>

              </Link>

            )
          }

          {/* CHAT */}

          <Link
            to="/chat"
            className="chat-menu-item active-chat"
          >

            <IoChatbubbleOutline className="chat-nav-icon" />

            <span>Chat</span>

          </Link>

          {/* PROFIL */}

          {
            role === "disabilitas" ? (

              <Link
                to="/profil-disabilitas"
                className="chat-menu-item"
              >

                <FaRegUser className="chat-nav-icon" />

                <span>Profil</span>

              </Link>

            ) : (

              <Link
                to="/ProfilRelawan"
                className="chat-menu-item"
              >

                <FaRegUser className="chat-nav-icon" />

                <span>Profil</span>

              </Link>

            )
          }

          {/* LOGOUT */}

          <Link
            to="/logout"
            className="chat-menu-item"
          >

            <IoLogOutOutline className="chat-nav-icon" />

            <span>Logout</span>

          </Link>

        </div>

      </div>

      {/* CHAT CONTENT */}

      <div className="chat-content">

        {/* CHAT BOX */}

        <div className="chat-main">

          {/* HEADER */}

          <div className="chat-header">

            <div className="chat-header-user">

              <div className="user-icon-wrapper">

                <FaUserCircle className="user-icon-header" />

                <div className="online-dot"></div>

              </div>

              <div>

                <h3>Budi Santoso</h3>

                <p>Online</p>

              </div>

            </div>

          </div>

          {/* MESSAGE AREA */}

          <div className="chat-messages">

            {
              chatMessages.map((msg, index) => (

                <div
                  key={index}
                  className={
                    msg.sender === "user"
                    ? "message-right"
                    : "message-left"
                  }
                >

                  <div className="message-bubble">

                    <p>{msg.text}</p>

                    <small>{msg.time}</small>

                  </div>

                </div>

              ))
            }

          </div>

          {/* INPUT */}

          <div className="chat-input-area">

            <input
              type="text"
              placeholder="Ketik Pesan..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button onClick={sendMessage}>

              <IoSend />

            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Chat;