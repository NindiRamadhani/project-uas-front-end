import React from 'react';
import './ProfilRelawan.css';

// Path import logo (Pastikan file ini ada di folder assets Anda)
import logoInklu from '../../assets/logoinkluspace.png'; 

// Import react-icons penyesuaian figma (Ikon Putih Solid & Outline)
import { FiHome, FiMessageSquare, FiUser, FiLogOut, FiSearch, FiHeart } from 'react-icons/fi';
import { FaAward, FaRegClock, FaHandHoldingHeart, FaUsers } from 'react-icons/fa';
import { MdOutlineDone, MdLocationOn } from 'react-icons/md';

const ProfilRelawan = () => {
  return (
    <div className="pr-wrapper">
      
      {/* NAVBAR */}
      <nav className="pr-navbar">
        {/* LOGO DI ATAS TULISAN INKLUSPACE */}
        <div className="pr-nav-brand-box">
          <img 
            src={logoInklu} 
            alt="Logo InkluSpace" 
            className="pr-nav-logo-img" 
          />
          <div className="pr-nav-logo-text">InkluSpace</div>
        </div>

        <div className="pr-nav-menu">
          <div className="pr-nav-item">
            <FiHome size={28} />
            <span>Beranda</span>
          </div>
          <div className="pr-nav-item">
            <FiMessageSquare size={28} />
            <span>Chat</span>
          </div>
          <div className="pr-nav-item active">
            <FiUser size={28} />
            <span>Profil</span>
          </div>
          <div className="pr-nav-item">
            <FiLogOut size={28} />
            <span>Logout</span>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="pr-container">
        
        {/* HERO USER PROFILE */}
        <div className="pr-user-section">
          <div className="pr-avatar-box">
            {/* SVG Ilustrasi Cowok Figma (Aman dari eror import lokal) */}
            <svg viewBox="0 0 100 100" className="pr-avatar-img">
              <circle cx="50" cy="50" r="40" fill="#E0F2FE" stroke="#000" strokeWidth="2"/>
              <path d="M50 30 o 12 0 12 12 o 0 12-12 12 o-12 0-12-12 o 0-12 12-12 Z" fill="#FDBA74" stroke="#000" strokeWidth="2"/>
              <path d="M50 32 c-8 0-10-5-10-5 s2-5 10-5 10 5 10 5 s-2 5-10 5 Z" fill="#2563EB" stroke="#000" strokeWidth="2"/>
              <path d="M30 75 c0-15 10-18 20-18 s20 3 20 18 Z" fill="#2563EB" stroke="#000" strokeWidth="2"/>
              <path d="M44 57 h12 v10 h-12 Z" fill="#FDBA74" stroke="#000" strokeWidth="2"/>
            </svg>
          </div>
          <h2 className="pr-user-name">Agustina</h2>
          <p className="pr-user-status">Status : Aktif</p>
        </div>

        {/* GARIS BIRU MUDA SEPERTI DI FIGMA */}
        <div className="pr-profile-line"></div>

        {/* 4 STATS TOP CARDS (SEMUA IKON DAN TEKS WARNA PUTIH) */}
        <div className="pr-stats-grid">
          <div className="pr-stat-card card-red">
            <div className="pr-stat-icon"><FaAward size={32} /></div>
            <div className="pr-stat-label">Pencapaian</div>
            <div className="pr-stat-sub">+ 2</div>
          </div>
          <div className="pr-stat-card card-pink">
            <div className="pr-stat-icon"><FaRegClock size={32} /></div>
            <div className="pr-stat-label">Jam Kontribusi</div>
            <div className="pr-stat-sub">10 Jam minggu ini</div>
          </div>
          <div className="pr-stat-card card-green">
            <div className="pr-stat-icon"><FaHandHoldingHeart size={32} /></div>
            <div className="pr-stat-label">Bantuan Diberikan</div>
            <div className="pr-stat-sub">+3 bulan ini</div>
          </div>
          <div className="pr-stat-card card-orange">
            <div className="pr-stat-icon"><FaUsers size={32} /></div>
            <div className="pr-stat-label">Orang Terbantu</div>
            <div className="pr-stat-sub">+ 1 bulan ini</div>
          </div>
        </div>

        {/* TWO COLUMN ROW: AKTIVITAS & JADWAL */}
        <div className="pr-columns-row">
          
          {/* LEFT SIDE: AKTIVITAS TERKINI */}
          <div className="pr-column-left">
            <div className="pr-panel-section">
              <div className="pr-panel-header bg-pink-header">Aktivitas Terkini</div>
              <div className="pr-panel-body bg-grey-body">
                
                <div className="pr-activity-item">
                  <div className="pr-act-icon-user">👤</div>
                  <div className="pr-act-details">
                    <p className="pr-act-title">Membantu Mobilitas</p>
                    <p className="pr-act-sub">Ibu Ani</p>
                    <p className="pr-act-date">10 Februari 2026</p>
                  </div>
                  <span className="pr-badge-done"><MdOutlineDone /> Selesai</span>
                </div>

                <div className="pr-activity-item">
                  <div className="pr-act-icon-user">👤</div>
                  <div className="pr-act-details">
                    <p className="pr-act-title">Pendampingan Event</p>
                    <p className="pr-act-sub">Pak Rudi</p>
                    <p className="pr-act-date">15 Maret 2026</p>
                  </div>
                  <span className="pr-badge-done"><MdOutlineDone /> Selesai</span>
                </div>

                <div className="pr-activity-item">
                  <div className="pr-act-icon-user">👤</div>
                  <div className="pr-act-details">
                    <p className="pr-act-title">Konsultasi Online</p>
                    <p className="pr-act-sub">Siti</p>
                    <p className="pr-act-date">10 April 2026</p>
                  </div>
                  <span className="pr-badge-done"><MdOutlineDone /> Selesai</span>
                </div>

              </div>
            </div>

            {/* PENCAPAIAN BADGES */}
            <div className="pr-panel-section mt-20">
              <div className="pr-panel-header bg-pink-header">Pencapaian</div>
              <div className="pr-panel-body bg-grey-body badges-flex">
                <div className="pr-badge-card badge-red-dark">
                  <span className="badge-icon">☀</span>
                  <p>Konsisten 1 bulan</p>
                </div>
                <div className="pr-badge-card badge-red-medium">
                  <span className="badge-icon"><FaRegClock /></span>
                  <p>10 Jam kontribusi</p>
                </div>
                <div className="pr-badge-card badge-red-light">
                  <span className="badge-icon">💡</span>
                  <p>Relawan Pemula</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: JADWAL & AKSI CEPAT */}
          <div className="pr-column-right">
            <div className="pr-panel-section">
              <div className="pr-panel-header bg-pink-header">Jadwal Mendatang</div>
              <div className="pr-panel-body bg-grey-body pd-20">
                
                <div className="pr-schedule-card">
                  <p className="pr-sched-title">Pendampingan Mobilitas</p>
                  <p className="pr-sched-date">28 Mar 2026</p>
                  <p className="pr-sched-name">Pak Ahmad</p>
                  <p className="pr-sched-info"><FaRegClock /> 09:00 - 11:00</p>
                  <p className="pr-sched-info"><MdLocationOn /> Jakarta Selatan</p>
                </div>

                <div className="pr-schedule-card mt-15">
                  <p className="pr-sched-title">Tutor bahasa inggris</p>
                  <p className="pr-sched-date">19 April 2026</p>
                  <p className="pr-sched-name">Maya</p>
                  <p className="pr-sched-info"><FaRegClock /> 08:00 - 10:50</p>
                  <p className="pr-sched-info"><MdLocationOn /> Malang</p>
                </div>

              </div>
            </div>

            <button className="pr-btn-action-cepat">Aksi Cepat</button>
          </div>

        </div>

        {/* PROGRAM RELAWAN INFO & COUNTERS */}
        <div className="pr-program-section">
          <div className="pr-program-icon-box">👥</div>
          <h3 className="pr-program-title">Program Relawan</h3>
          <p className="pr-program-sub">
            Bergabunglah dengan relawan kami dan buat perbedaan nyata dalam kehidupan orang lain
          </p>

          <div className="pr-program-counter-grid">
            <div className="pr-counter-box">
              <span className="counter-num color-coral">241</span>
              <span className="counter-lbl">Relawan Aktif</span>
            </div>
            <div className="pr-counter-box">
              <span className="counter-num color-coral">1453</span>
              <span className="counter-lbl">Jam Kontribusi</span>
            </div>
            <div className="pr-counter-box">
              <span className="counter-num color-coral">132</span>
              <span className="counter-lbl">Orang Terbantu</span>
            </div>
          </div>
        </div>

        {/* SEARCH BAR */}
        <div className="pr-search-container">
          <div className="pr-search-box">
            <FiSearch className="search-icon" />
            <input 
              type="text" 
              placeholder="Cari berdasarkan Lokasi, Jenis, atau Kata Kunci" 
              className="pr-search-input"
            />
          </div>
        </div>

        {/* KESEMPATAN TERSEDIA LIST */}
        <div className="pr-available-section">
          <h3 className="pr-available-title">Kesempatan Tersedia :</h3>
          
          <div className="pr-cards-grid">
            <div className="pr-opportunity-card">
              <div className="opportunity-header">
                <h4>Pendamping Mobilitas</h4>
                <FiHeart className="heart-icon" />
              </div>
              <p className="opportunity-desc">
                Membantu mobilitas harian individu dengan keterbatasan fisik
              </p>
              <div className="opportunity-tags">
                <span className="tag-purple">Mobilitas</span>
                <span className="tag-purple">Fisik</span>
              </div>
              <div className="opportunity-meta">
                <p><MdLocationOn /> Jakarta Selatan</p>
                <div className="meta-footer">
                  <p><FaUsers /> 5 Relawan</p>
                  <button className="pr-btn-daftar">Daftar</button>
                </div>
              </div>
            </div>

            <div className="pr-opportunity-card">
              <div className="opportunity-header">
                <h4>Tutor Pendidikan Inklusif</h4>
                <FiHeart className="heart-icon" />
              </div>
              <p className="opportunity-desc">
                Memberikan bimbingan belajar untuk anak berkebutuhan khusus
              </p>
              <div className="opportunity-tags">
                <span className="tag-purple">Pendidikan</span>
                <span className="tag-purple">Anak</span>
              </div>
              <div className="opportunity-meta">
                <p><MdLocationOn /> Bandung</p>
                <div className="meta-footer">
                  <p><FaUsers /> 12 Relawan</p>
                  <button className="pr-btn-daftar">Daftar</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default ProfilRelawan;