import React from 'react';
import './LandingPage.css';

// Sesuaikan path assets di project InkluSpace kamu
import logoInklu from '../../../assets/logoinkluspace.png';
import heroInklu from '../../../assets/inkluspace.jpeg';

const LandingPage = () => {
  return (
    <div className="inklu-wrapper">
      {/* HEADER: Disesuaikan dengan image_39c2ef.png */}
      <header className="inklu-header">
        <div className="inklu-container header-flex">
          <div className="inklu-logo-box">
            <img src={logoInklu} alt="Logo" className="inklu-img-main" />
            <h1 className="inklu-brand-text">InkluSpace</h1>
          </div>
          <button className="inklu-btn-pill">Masuk</button>
        </div>
      </header>

      <main className="inklu-main">
        {/* HERO SECTION */}
        <section className="inklu-card hero-section">
          <div className="hero-content">
            <h2 className="inklu-title-purple">
              Bersama Membangun Masyarakat Inklusif
            </h2>
            <p className="inklu-p-large">
              InkluSpace menghubungkan mereka yang membutuhkan dengan mereka yang ingin berbagi.
            </p>
          </div>
          <div className="hero-img-box">
            <img src={heroInklu} alt="Taman Inklusi Kita" className="hero-img" />
          </div>
        </section>

        {/* VALUES SECTION */}
        <section className="inklu-card values-section">
          <h2 className="inklu-title-purple center">Nilai-Nilai Kami</h2>
          <p className="inklu-p-sub center">
            Komitmen kami untuk menciptakan lingkungan yang inklusif
          </p>
          <div className="values-grid">
            <div className="value-item">
              <div className="icon-pink-box">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="white">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <span className="value-label">Inklusif</span>
            </div>
            <div className="value-item">
              <div className="icon-pink-box">
                <svg width="70" height="70" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1 14.5l-4-4 1.41-1.41L11 13.67l4.59-4.59L17 10.5l-6 6z"/>
                </svg>
              </div>
              <span className="value-label">Aman dan Terpercaya</span>
            </div>
            <div className="value-item">
              <div className="icon-pink-box">
                <svg width="70" height="70" viewBox="0 0 24 24" fill="white">
                  <path d="M13.63 11.02L12.01 5c-.15-.55-.65-.94-1.22-.94-.57 0-1.07.39-1.22.94L7.96 11.02c-.14.52.05 1.08.47 1.4l3.57 2.68 3.57-2.68c.42-.32.61-.88.47-1.4z"/>
                </svg>
              </div>
              <span className="value-label">Mudah Digunakan</span>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="about-section">
          <div className="about-blob">
            <p className="blob-quote">
              "Menciptakan ruang di mana setiap orang, tanpa terkecuali, memiliki kesempatan yang sama untuk berkembang."
            </p>
          </div>
          <div className="about-content">
            <h2 className="inklu-title-purple align-right">TENTANG KAMI</h2>
            <div className="about-text-p">
              <p>InkluSpace adalah platform digital yang dirancang khusus untuk memperkuat ekosistem inklusif di Indonesia.</p>
              <p>Kami mengutamakan keamanan, kenyamanan, dan kemudahan akses bagi setiap pengguna.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;