import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Chat.css';
import logoInkluSpace from "../../../assets/logoinkluspace.png";

// React Icons (Disamakan persis dengan HomePage.jsx)
import { IoHomeOutline, IoChatbubbleOutline, IoLogOutOutline } from "react-icons/io5";
import { FaRegUser, FaUserCircle } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { MdOutlineVolunteerActivism } from "react-icons/md"; 

export default function Chat() {
    const [activeUser, setActiveUser] = useState('Budi Santoso');

    const relawanList = [
        { id: 1, name: 'Budi Santoso' },
        { id: 2, name: 'Agus Susilo' },
        { id: 3, name: 'Siti Nuraini' },
        { id: 4, name: 'Rian Putra' },
    ];

    return (
        <div className="chat-page-container">
            {/* --- NAVBAR ATAS --- */}
            <div className="chat-navbar">
                <div className="chat-logo-section">
                    <img src={logoInkluSpace} alt="logo" className="chat-logo-img" />
                    <p className="chat-brand-name">InkluSpace</p>
                </div>

                <div className="chat-menu-section">
                    <Link to="/home" className="chat-menu-item">
                        <IoHomeOutline className="chat-nav-icon" />
                        <span>Beranda</span>
                    </Link>

                    <div className="chat-menu-item">
                        {/* Ikon Minta Bantuan yang sama dengan halaman Beranda */}
                        <MdOutlineVolunteerActivism className="chat-nav-icon" />
                        <span>Minta Bantuan</span>
                    </div>

                    <Link to="/chat" className="chat-menu-item active">
                        <IoChatbubbleOutline className="chat-nav-icon" />
                        <span>Chat</span>
                    </Link>

                    <div className="chat-menu-item">
                        <FaRegUser className="chat-nav-icon" />
                        <span>Profil</span>
                    </div>

                    <div className="chat-menu-item">
                        <IoLogOutOutline className="chat-nav-icon" />
                        <span>Logout</span>
                    </div>
                </div>
            </div>

            {/* --- BODY CONTENT UTAMA --- */}
            <div className="chat-main-content">
                
                {/* SIDEBAR KIRI (Relawan Aktif) */}
                <div className="chat-sidebar">
                    <h2 className="chat-sidebar-title">Relawan Aktif</h2>
                    <p className="chat-sidebar-status">3 Relawan Online</p>
                    
                    <div className="chat-user-list">
                        {/* Filter agar user yang aktif di kanan TIDAK muncul lagi di list kiri sesuai figma */}
                        {relawanList.filter(r => r.name !== activeUser).map((relawan) => (
                            <button
                                key={relawan.id}
                                onClick={() => setActiveUser(relawan.name)}
                                className="chat-user-card"
                            >
                                <div className="chat-avatar-wrapper">
                                    <FaUserCircle className="chat-sidebar-avatar-icon" />
                                    <span className="chat-online-dot" />
                                </div>
                                <span className="chat-card-name">{relawan.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* AREA WINDOW CHAT KANAN */}
                <div className="chat-window-area">
                    <div className="chat-box-container">
                        
                        {/* Header Box Profil Sesuai Gambar Figma dengan Ikon Outline Hitam */}
                        <div className="chat-box-header">
                            <div className="chat-avatar-wrapper">
                                <FaUserCircle className="chat-header-avatar-icon-outline" />
                                <span className="chat-online-dot header-dot" />
                            </div>
                            <span className="chat-header-name">{activeUser}</span>
                        </div>

                        {/* Area Isi Pesan */}
                        <div className="chat-messages-body">
                            <div className="chat-row sent">
                                <div className="chat-bubble">
                                    <p>Hai {activeUser} saya ingin bertanya</p>
                                    <span className="chat-timestamp">14:32</span>
                                </div>
                            </div>

                            <div className="chat-row received">
                                <div className="chat-bubble">
                                    <p>Selamat siang!, apa yang bisa saya bantu hari ini?</p>
                                    <span className="chat-timestamp">14:32</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Input Field Bagian Bawah */}
                    <div className="chat-input-wrapper">
                        <input
                            type="text"
                            placeholder="Ketik Pesan..."
                            className="chat-input-field"
                        />
                        <button className="chat-send-btn">
                            <IoPaperPlaneOutline className="chat-send-icon" />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}