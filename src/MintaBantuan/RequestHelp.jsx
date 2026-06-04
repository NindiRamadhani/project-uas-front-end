import { useState, useEffect } from "react"; 
import axios from "axios"; 
import { useNavigate } from "react-router-dom"; 
import "./RequestHelp.css";
import Navbar from "../features/components/Navbar/Navbar";
import accessibleBanner from "../assets/accessible.jpeg";
import { MdOutlineVolunteerActivism } from "react-icons/md";

export default function RequestHelp() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    nama: "", 
    category: "",     
    description: "",  
    contact: "",      
  });

  const [isWaiting, setIsWaiting] = useState(false);
  const [createdRequestId, setCreatedRequestId] = useState(null);
  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // LOGIKA POLLING REAL-TIME STATUS ACC RELAWAN
  useEffect(() => {
    if (!isWaiting || !createdRequestId || !token) return;

    const checkRequestStatus = () => {
      axios
        .get(`http://127.0.0.1:9000/api/help-requests/${createdRequestId}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          const requestData = response.data?.data ? response.data.data : response.data;

          // Mendeteksi jika kolom relawan_id sudah berhasil di-update oleh relawan
          if (requestData && requestData.relawan_id) {
            setIsWaiting(false);

            // Munculkan pop-up pemberitahuan persetujuan
            alert("permintaan telah di setujui. buka chat");
            
            // Pindahkan penyandang otomatis ke kamar obrolan privat yang sinkron
            navigate(`/chat/${createdRequestId}`);
          }
        })
        .catch((error) => {
          console.error("Gagal polling status bantuan:", error);
        });
    };

    const idInterval = setInterval(checkRequestStatus, 3000);
    return () => clearInterval(idInterval);
  }, [isWaiting, createdRequestId, token, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    if (!token) {
      alert("Maaf, Anda harus login terlebih dahulu!");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:9000/api/help-requests", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      if (response.status === 201 || response.status === 200) {
        alert("Permintaan bantuan Anda berhasil terkirim! Mohon tunggu relawan di halaman ini.");
        
        const newId = response.data?.id || response.data?.data?.id;

        if (newId) {
          setCreatedRequestId(newId);
          localStorage.setItem("active_chat_id", newId); // Simpan ID baru ke penyimpanan lokal Navbar
          setIsWaiting(true); 
        }

        setFormData({ nama: "", category: "", description: "", contact: "" });
      }
    } catch (error) {
      console.error("Gagal mengirim data bantuan:", error);
      alert("Terjadi kesalahan sistem server saat mengirim permintaan.");
    }
  };

  return (
    <div className="request-page">
      <Navbar />
      <div className="content">
        <div className="header-section">
          <div className="help-icon"><MdOutlineVolunteerActivism /></div>
          <h1>Minta Bantuan</h1>
          <p>Ceritakan kebutuhan Anda. Kami siap membantu menghubungkan Anda dengan relawan yang tepat.</p>
        </div>

        {isWaiting && (
          <div style={{
            background: "#fff3cd", color: "#856404", padding: "15px",
            borderRadius: "8px", marginBottom: "20px", textAlign: "center",
            fontWeight: "bold", border: "1px solid #ffeeba"
          }}>
            ⏳ Sistem sedang mencarikan Relawan... Mohon jangan tutup atau refresh halaman ini.
          </div>
        )}

        <div className="main-section">
          <form onSubmit={handleSubmit} className="form-section">
            <h2>Isi Formulir</h2>
            <label>Nama</label>
            <input type="text" name="nama" value={formData.nama} onChange={handleChange} placeholder="Masukkan nama Anda" disabled={isWaiting} />

            <label>Kategori Bantuan</label>
            <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Pilih kategori" disabled={isWaiting} />

            <label>Deskripsi bantuan</label>
            <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Jelaskan detail bantuan" disabled={isWaiting}></textarea>

            <label>Contact</label>
            <input type="text" name="contact" value={formData.contact} onChange={handleChange} placeholder="Email atau No. HP" disabled={isWaiting} />

            <button type="submit" disabled={isWaiting} style={{ background: isWaiting ? "#aaa" : "" }}>
              {isWaiting ? "Sedang Menunggu Relawan..." : "Kirim Permintaan"}
            </button>
          </form>

          <div className="steps-card">
            <h2>Cara Kerja</h2>
            <div className="step"><div className="number">1</div><div><h3>Isi Formulir</h3><p>Lengkapi informasi kebutuhan Anda</p></div></div>
            <div className="step"><div className="number">2</div><div><h3>Verifikasi Tim</h3><p>Tim kami akan meninjau permintaan</p></div></div>
            <div className="step"><div className="number">3</div><div><h3>Koneksi Relawan</h3><p>Kami hubungkan dengan relawan yang sesuai</p></div></div>
            <div className="step"><div className="number">4</div><div><h3>Dapatkan Bantuan</h3><p>Relawan akan menghubungi Anda</p></div></div>
          </div>
        </div>

        <div className="accessible-banner"><img src={accessibleBanner} alt="accessible" /></div>
        <div className="privacy-text"><span>Privasi Anda Terjamin:</span> Semua informasi aman.</div>
      </div>
    </div>
  );
}