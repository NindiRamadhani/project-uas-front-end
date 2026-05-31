// RequestHelp.jsx
import { useState } from "react"; 
import axios from "axios"; 
import "./RequestHelp.css";
import Navbar from "../features/components/Navbar/Navbar";
import accessibleBanner from "../assets/accessible.jpeg";
import { MdOutlineVolunteerActivism } from "react-icons/md";

export default function RequestHelp() {
  // State untuk data formulir (menggunakan nama bahasa inggris sesuai validasi Laravel)
  const [formData, setFormData] = useState({
    nama: "", // Opsional di frontend untuk interface
    category: "",     
    description: "",  
    contact: "",      
  });

  // Fungsi menangkap ketikan user
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Fungsi kirim data saat submit
  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Maaf, Anda harus login terlebih dahulu sebelum meminta bantuan!");
      return;
    }

    if (!formData.category || !formData.description) {
      alert("Harap isi Kategori Bantuan dan Deskripsi Bantuan terlebih dahulu!");
      return;
    }

    try {
      // Mengirim paket data ke proxy /api
      const response = await axios.post(
        "/api/help-requests", 
        formData, 
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );

      if (response.status === 201 || response.status === 200) {
        alert("Permintaan bantuan Anda berhasil terkirim langsung ke database relawan!");
        setFormData({
          nama: "",
          category: "",
          description: "",
          contact: "",
        });
      }
    } catch (error) {
      console.error("Gagal mengirim data:", error);
      
      // Mengambil status code error
      const status = error.response?.status;
      // Mengambil pesan text error asli dari laravel
      const serverMessage = error.response?.data?.message;

      if (status === 401) {
        alert("Sesi login Anda telah habis atau tidak valid, silakan login ulang.");
      } else if (status === 403) {
        // Ini akan memunculkan pesan "Hanya penyandang disabilitas..." di layar browser
        alert(`Akses Ditolak (403): ${serverMessage}`);
      } else if (status === 422) {
        alert("Validasi Gagal: Pastikan format data inputan sudah benar.");
      } else {
        alert(serverMessage || "Terjadi kesalahan sistem server.");
      }
    }
  };

  return (
    <div className="request-page">
      <Navbar />
      <div className="content">
        <div className="header-section">
          <div className="help-icon">
            <MdOutlineVolunteerActivism />
          </div>
          <h1>Minta Bantuan</h1>
          <p>Ceritakan kebutuhan Anda. Kami siap membantu menghubungkan Anda dengan relawan yang tepat.</p>
        </div>

        <div className="main-section">
          <form onSubmit={handleSubmit} className="form-section">
            <h2>Isi Formulir</h2>

            <label>Nama</label>
            <input
              type="text"
              name="nama" 
              value={formData.nama} 
              onChange={handleChange} 
              placeholder="Masukkan nama Anda"
            />

            <label>Kategori Bantuan</label>
            <input
              type="text"
              name="category" 
              value={formData.category}
              onChange={handleChange}
              placeholder="Pilih kategori (misal: pendidikan, mobilitas)"
            />

            <label>Deskripsi bantuan</label>
            <textarea
              name="description" 
              value={formData.description}
              onChange={handleChange}
              placeholder="Jelaskan secara detail bantuan yang Anda butuhkan"
            ></textarea>

            <label>Contact</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="email@example.com atau 08xxxxxxxx"
            />

            <button type="submit">Kirim Permintaan</button>
          </form>

          <div className="steps-card">
            <h2>Cara Kerja</h2>
            <div className="step"><div className="number">1</div><div><h3>Isi Formulir</h3><p>Lengkapi informasi kebutuhan Anda</p></div></div>
            <div className="step"><div className="number">2</div><div><h3>Verifikasi Tim</h3><p>Tim kami akan meninjau permintaan</p></div></div>
            <div className="step"><div className="number">3</div><div><h3>Koneksi Relawan</h3><p>Kami hubungkan dengan relawan yang sesuai</p></div></div>
            <div className="step"><div className="number">4</div><div><h3>Dapatkan Bantuan</h3><p>Relawan akan menghubungi Anda</p></div></div>
          </div>
        </div>

        <div className="accessible-banner">
          <img src={accessibleBanner} alt="accessible" />
        </div>
        <div className="privacy-text">
          <span>Privasi Anda Terjamin:</span> Semua informasi yang Anda berikan akan dijaga kerahasiaannya.
        </div>
      </div>
    </div>
  );
}