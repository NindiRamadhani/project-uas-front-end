import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Digunakan untuk menangkap ID dari URL browser
import ajax from "axios";
import "./Chat.css";

import Navbar from "../../components/Navbar/Navbar";
import { IoSend } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

function Chat() {
  const { help_request_id } = useParams(); // Mengambil ID bantuan yang dikirim dari halaman relawan

  const role = localStorage.getItem("role");
  const myId = localStorage.getItem("id"); // ID user yang sedang login (bisa relawan / disabilitas)
  const name = localStorage.getItem("name");
  const token = localStorage.getItem("token");

  const [message, setMessage] = useState("");
  const [chatInfo, setChatInfo] = useState(null); // Menyimpan info detail pemohon dari database
  const [chatMessages, setChatMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // 1. Ambil detail data bantuan & nama pengguna dari database backend
  useEffect(() => {
    if (!help_request_id) return;

    // Ambil detail data bantuan untuk tahu nama lawannya
    ajax
      .get(`http://127.0.0.1:9000/api/help-requests/${help_request_id}`, config)
      .then((response) => {
        setChatInfo(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Gagal memuat detail data chat pemohon:", error);
        setLoading(false);
      });

    // 2. Ambil riwayat chat asli yang sudah tersimpan di database
    ajax
      .get(`http://127.0.0.1:9000/api/chats/${help_request_id}`, config)
      .then((response) => {
        const dataPesan = Array.isArray(response.data) ? response.data : [];
        
        const formattedMessages = dataPesan.map((msg) => ({
          text: msg.message,
          // Jika sender_id sama dengan ID saya, berarti letaknya di kanan (user)
          sender: String(msg.sender_id) === String(myId) ? "user" : "other",
          time: msg.created_at ? new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : "",
        }));
        setChatMessages(formattedMessages);
      })
      .catch((error) => {
        console.error("Gagal memuat riwayat pesan chat:", error);
      });
  }, [help_request_id, myId]);

  // 3. Fungsi Kirim Pesan Asli ke Server Backend (DIPAKSA JADI NUMBER UNTUK BIGINT MYSQL)
  const sendMessage = () => {
    if (message.trim() === "") return;

    // PERBAIKAN TOTAL: Mengubah Teks menjadi Number murni agar singkron dengan BIGINT MySQL
    const payload = {
      help_request_id: Number(help_request_id),
      sender_id: Number(myId),
      message: String(message),
    };

    ajax
      .post("http://127.0.0.1:9000/api/chats", payload, config)
      .then((response) => {
        // Masukkan langsung ke layar chat setelah sukses tersimpan ke database
        setChatMessages([
          ...chatMessages,
          {
            text: message,
            sender: "user",
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ]);
        setMessage("");
      })
      .catch((error) => {
        console.error("Gagal mengirimkan pesan chat:", error);
        alert("Gagal mengirim pesan, silakan coba kembali.");
      });
  };

  if (loading) {
    return (
      <div className="chat-container">
        <Navbar />
        <p style={{ textAlign: "center", marginTop: "100px" }}>Membuka ruang obrolan privat...</p>
      </div>
    );
  }

  // Tentukan nama yang akan muncul di header chat secara otomatis
  const isSayaDisabilitas = String(myId) === String(chatInfo?.user_id);

  const lawanBicara = isSayaDisabilitas
    ? chatInfo?.relawan?.name || "Relawan Pendukung"
    : chatInfo?.user?.name || "Pengguna Disabilitas";

  return (
    <div className="chat-container">
      {/* NAVBAR */}
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
                <h3>{lawanBicara}</h3>
                <p>Online</p>
              </div>
            </div>
          </div>

          {/* MESSAGE AREA */}
          <div className="chat-messages">
            
            {/* Notifikasi Context Deskripsi Bantuan */}
            <div style={{ textAlign: "center", margin: "10px 0" }}>
              <small style={{ background: "#e9ecef", padding: "5px 10px", borderRadius: "10px", color: "#6c757d" }}>
                Kategori: {chatInfo?.category} - "{chatInfo?.description}"
              </small>
            </div>

            {chatMessages.map((msg, index) => (
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
            ))}
          </div>

          {/* INPUT */}
          <div className="chat-input-area">
            <input
              type="text"
              placeholder="Ketik Pesan..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()} // Bisa kirim pakai enter keyboard
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

