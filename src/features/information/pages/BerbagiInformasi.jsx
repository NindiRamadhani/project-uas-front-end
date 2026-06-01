import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BerbagiInformasi.css";

const BerbagiInformasi = () => {

  const navigate = useNavigate();


  // AMBIL ROLE
  const role = localStorage.getItem("role");

  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");

  const [popup, setPopup] = useState("");

  // popup baca selengkapnya
  const [showDetail, setShowDetail] = useState(false);

  const [selectedInfo, setSelectedInfo] = useState({
    title: "",
    content: "",
  });

  const daftarInformasi = [
    {
      id: 1,
      title: "Lowongan pekerjaan bagi penyandang disabilitas",
      content:
        "Tersedia lowongan pekerjaan administrasi dan customer service ramah disabilitas di beberapa perusahaan nasional dengan sistem kerja hybrid dan fasilitas aksesibilitas lengkap.",
    },

    {
      id: 2,
      title: "Beasiswa bagi tunanetra",
      content:
        "Program beasiswa pendidikan penuh untuk mahasiswa tunanetra tahun 2026 telah dibuka dengan dukungan perangkat pembelajaran aksesibel.",
    },

    {
      id: 3,
      title: "Pelatihan desain grafis online",
      content:
        "Pelatihan desain grafis online gratis selama 3 bulan khusus penyandang disabilitas dengan mentor profesional.",
    },
  ];

  const handleKirim = () => {

    // CEK ROLE
    if (role !== "relawan") {

      setPopup(
        "Maaf, informasi hanya dapat dibagikan oleh relawan."
      );

      setTimeout(() => {
        setPopup("");
      }, 3000);

      return;
    }

    // VALIDASI INPUT
    if (!judul || !isi) {

      setPopup("Judul dan isi informasi wajib diisi!");

      setTimeout(() => {
        setPopup("");
      }, 3000);

      return;
    }

    setPopup("Informasi berhasil dibagikan!");

    setTimeout(() => {
      setPopup("");
    }, 3000);

    setJudul("");
    setIsi("");
  };

  const handleBaca = (item) => {

    setSelectedInfo(item);

    setShowDetail(true);
  };

  return (

    <div className="berbagi-page">

      {/* HEADER */}
      <div className="berbagi-header">

        <h1>Berbagi Informasi</h1>

      </div>

      {/* CONTENT */}
      <div className="berbagi-content">

        {/* DAFTAR INFORMASI */}
        <div className="daftar-informasi">

          <h2>Daftar Informasi</h2>

          {daftarInformasi.map((item) => (

            <div className="info-card" key={item.id}>

              <div className="info-left">

                <div className="info-icon"></div>

                <div className="info-text">

                  <p>{item.title}</p>

                </div>

              </div>

              <button
                className="info-button"
                onClick={() => handleBaca(item)}
              >
                Baca Selengkapnya
              </button>

            </div>

          ))}

        </div>

        {/* FORM */}
        <div className="form-area">

          <div className="form-card">

            <div className="form-group">

              <label>Judul</label>

              <input
                type="text"
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                className="input-judul"
              />

            </div>

            <div className="form-group">

              <label>Isi</label>

              <textarea
                value={isi}
                onChange={(e) => setIsi(e.target.value)}
                className="input-isi"
              ></textarea>

            </div>

            <div className="button-area">

              <button
                className="kembali-button"
                onClick={() => navigate("/home")}
              >
                Kembali
              </button>

              <button
                className="kirim-button"
                onClick={handleKirim}
              >
                Kirim
              </button>

            </div>

            {popup && (

              <div className="popup-message">

                {popup}

              </div>

            )}

          </div>

        </div>

      </div>

      {/* MODAL DETAIL */}
      {showDetail && (

        <div className="modal-overlay">

          <div className="modal-box">

            <h2>{selectedInfo.title}</h2>

            <p>{selectedInfo.content}</p>

            <button
              className="tutup-button"
              onClick={() => setShowDetail(false)}
            >
              Tutup
            </button>

          </div>

        </div>

      )}

    </div>
  );
};

export default BerbagiInformasi;