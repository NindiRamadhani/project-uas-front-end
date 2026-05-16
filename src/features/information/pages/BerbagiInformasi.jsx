import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BerbagiInformasi.css";

function BerbagiInformasi() {
  const navigate = useNavigate();

  // State form input
  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");

  // State modal "Baca Selengkapnya..."
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeInfo, setActiveInfo] = useState({ judul: "", detail: "" });

  const daftarInformasi = [
    {
      id: 1,
      judul: "Lowongan pekerjaan bagi penyandang disabilitas",
      detail: "PT InkluSpace Mandiri membuka lowongan kerja untuk posisi Admin Support dan Data Entry khusus bagi rekan-rekan penyandang disabilitas. Kualifikasi: Mampu mengoperasikan komputer dasar, teliti, dan berkomitmen tinggi."
    },
    {
      id: 2,
      judul: "Beasiswa bagi tunanetra",
      detail: "Program beasiswa penuh untuk mahasiswa tunanetra berprestasi di bidang Teknologi Informasi mencakup biaya kuliah penuh hingga 8 semester dan uang saku bulanan."
    },
    {
      id: 3,
      judul: "Pelatihan Keterampilan Digital Inkubasi",
      detail: "Kelas pelatihan gratis mengenai UI/UX Design dan Web Development dasar untuk remaja disabilitas guna meningkatkan daya saing di dunia kerja digital."
    }
  ];

  const handleKirim = (e) => {
    e.preventDefault();
    if (!judul || !isi) {
      alert("Harap isi Judul dan Isi informasi terlebih dahulu ya, bes!");
      return;
    }
    alert(`Informasi Berhasil Dikirim!\n\nJudul: ${judul}\nIsi: ${isi}`);
    setJudul("");
    setIsi("");
  };

  const bukaDetail = (item) => {
    setActiveInfo({ judul: item.judul, detail: item.detail });
    setIsModalOpen(true);
  };

  return (
    <div className="pure-white-page">
      
      {/* BANNER UNGU UTAMA */}
      <div className="pure-purple-banner">
        <h2>Berbagi Informasi</h2>
      </div>

      {/* AREA UTAMA YANG BISA DI-SCROLL */}
      <div className="pure-scrollable-content">
        
        {/* LAYOUT SPLIT: KIRI & KANAN */}
        <div className="pure-main-grid">
          
          {/* SIDEBAR KIRI: Daftar Informasi */}
          <div className="pure-left-sidebar">
            <h3 className="pure-sidebar-title">Daftar Informasi :</h3>
            
            <div className="pure-list-wrapper">
              {daftarInformasi.map((item) => (
                <div className="pure-info-card" key={item.id}>
                  <div className="pure-avatar-circle">
                    <span className="pure-avatar-icon">👤</span>
                  </div>
                  <div className="pure-card-body">
                    <p className="pure-card-text">{item.judul}</p>
                    <button 
                      type="button" 
                      className="pure-readmore-btn"
                      onClick={() => bukaDetail(item)}
                    >
                      Baca Selengkapnya...
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SISI KANAN: Form Input Kotak Oranye */}
          <form className="pure-right-form" onSubmit={handleKirim}>
            <div className="pure-form-group">
              <label className="pure-form-label">Judul :</label>
              <input
                type="text"
                className="pure-input-title"
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                placeholder="Ketik judul informasi di sini..."
              />
            </div>

            <div className="pure-form-group">
              <label className="pure-form-label">Isi :</label>
              <textarea 
                className="pure-textarea-content"
                value={isi}
                onChange={(e) => setIsi(e.target.value)}
                placeholder="Ketik isi informasi di sini..."
              ></textarea>
            </div>

            {/* Tombol Kirim */}
            <div className="pure-action-row">
              <button type="submit" className="pure-btn-submit">Kirim</button>
            </div>
          </form>

        </div>

        {/* FOOTER BAWAH: Tombol Kembali */}
        <div className="pure-footer-row">
          <button 
            type="button" 
            className="pure-btn-back" 
            onClick={() => navigate("/home")}
          >
            Kembali
          </button>
        </div>

      </div>

      {/* MODAL POP-UP */}
      {isModalOpen && (
        <div className="pure-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="pure-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="pure-modal-header">
              <h3>Detail Informasi</h3>
              <button className="pure-modal-close-x" onClick={() => setIsModalOpen(false)}>×</button>
            </div>
            <div className="pure-modal-body">
              <h4>{activeInfo.judul}</h4>
              <p>{activeInfo.detail}</p>
            </div>
            <div className="pure-modal-footer">
              <button className="pure-modal-close-btn" onClick={() => setIsModalOpen(false)}>Tutup</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default BerbagiInformasi;