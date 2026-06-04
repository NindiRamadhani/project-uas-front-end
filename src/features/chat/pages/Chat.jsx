import React, { useEffect, useState, useRef, useMemo } from "react";
import { useParams } from "react-router-dom"; 
import ajax from "axios";
import "./Chat.css";

import Navbar from "../../components/Navbar/Navbar";
import { IoSend } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

function Chat() {
  const { help_request_id } = useParams(); 

  // Ambil data session aktif dari browser masing-masing
  const myId = localStorage.getItem("id"); 
  const myRole = localStorage.getItem("role"); // Mengambil role (misal: 'relawan' atau 'disabilitas')
  const token = localStorage.getItem("token");

  const [message, setMessage] = useState("");
  const [chatInfo, setChatInfo] = useState(null); 
  const [chatMessages, setChatMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const messagesEndRef = useRef(null);

  // Memoize config agar token tidak memicu re-render tak terbatas
  const config = useMemo(() => {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }, [token]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (chatMessages.length > 0) {
      scrollToBottom();
    }
  }, [chatMessages]);

  // 1. Ambil detail info bantuan (untuk kategori & deskripsi saja)
  useEffect(() => {
    if (!help_request_id || !token) return;

    ajax
      .get(`http://127.0.0.1:9000/api/help-requests/${help_request_id}`, config)
      .then((response) => {
        setChatInfo(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Gagal memuat detail data chat:", error);
        setLoading(false); // Tetap matikan loading agar halaman tidak freeze jika API error
      });
  }, [help_request_id, config, token]);

  // 2. Ambil riwayat chat & Polling berkala
  useEffect(() => {
    if (!help_request_id || !myId || !token) return;

    const fetchRiwayatChat = () => {
      ajax
        .get(`http://127.0.0.1:9000/api/chats/${help_request_id}`, config)
        .then((response) => {
          const dataPesan = Array.isArray(response.data) ? response.data : [];
          
          const formattedMessages = dataPesan.map((msg) => ({
            text: msg.message,
            // Jika sender_id di database cocok dengan ID saya di browser, berarti saya pengirimnya (Kanan)
            sender: String(msg.sender_id) === String(myId) ? "user" : "other",
            time: msg.created_at 
              ? new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
              : "",
          }));

          setChatMessages((prev) => {
            if (JSON.stringify(prev) === JSON.stringify(formattedMessages)) return prev;
            return formattedMessages;
          });
        })
        .catch((error) => {
          console.error("Gagal memuat riwayat pesan chat:", error);
        });
    };

    fetchRiwayatChat();
    const intervalChat = setInterval(fetchRiwayatChat, 2000); 

    return () => clearInterval(intervalChat);
  }, [help_request_id, myId, config, token]);

  // 3. Fungsi Kirim Pesan
  const sendMessage = () => {
    if (message.trim() === "") return;

    const payload = {
      help_request_id: Number(help_request_id),
      sender_id: Number(myId), 
      message: String(message),
    };

    ajax
      .post("http://127.0.0.1:9000/api/chats", payload, config)
      .then(() => {
        setChatMessages((prev) => [
          ...prev,
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

  // SOLUSI TAKTIS: Tentukan nama lawan bicara murni berdasarkan ROLE di localStorage kamu
  // Sesuaikan tulisan "relawan" di bawah dengan nilai string role yang kamu simpan saat login
  const lawanBicara = String(myRole).toLowerCase() === "relawan"
    ? "Pengguna Disabilitas"
    : "Relawan Pendukung";

  return (
    <div className="chat-container">
      <Navbar />

      <div className="chat-content">
        <div className="chat-main">
          
          {/* HEADER CHAT */}
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
            <div style={{ textAlign: "center", margin: "10px 0" }}>
              <small style={{ background: "#e9ecef", padding: "5px 10px", borderRadius: "10px", color: "#6c757d" }}>
                Kategori: {chatInfo?.category || "-"} {chatInfo?.description ? `- "${chatInfo.description}"` : ""}
              </small>
            </div>

            {chatMessages.length === 0 ? (
              <div style={{ textAlign: "center", color: "#9e9e9e", marginTop: "40px" }}>
                <p>Belum ada obrolan di sini.</p>
              </div>
            ) : (
              chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={msg.sender === "user" ? "message-right" : "message-left"}
                >
                  <div className="message-bubble">
                    <p>{msg.text}</p>
                    <small>{msg.time}</small>
                  </div>
                </div>
              ))
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* INPUT CHAT */}
          <div className="chat-input-area">
            <input
              type="text"
              placeholder="Ketik Pesan..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()} 
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