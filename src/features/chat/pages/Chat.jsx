import React, { useState } from "react";
import "./Chat.css";

import Navbar from "../../components/Navbar/Navbar";

import { IoSend } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

function Chat() {

  const role = localStorage.getItem("role");
  const id = localStorage.getItem("id");
  const name = localStorage.getItem("name");

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

      {/* NAVBAR BARU */}
      <Navbar />

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