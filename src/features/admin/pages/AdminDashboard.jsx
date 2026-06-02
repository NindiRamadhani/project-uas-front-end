import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminDashboard.css";
import { FaUsers, FaHandsHelping, FaInfoCircle, FaTimes, FaCheck, FaBan } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

function AdminDashboard() {
  const [stats, setStats] = useState({
    total_users: 0,
    total_helps: 0,
    total_informations: 0,
  });
  const [latestUsers, setLatestUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // STATE UNTUK POP-UP MODAL
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); 
  const [modalTitle, setModalTitle] = useState("");
  const [modalData, setModalData] = useState([]);
  const [loadingModal, setLoadingModal] = useState(false);

  const API_URL = "http://127.0.0.1:9000/api/admin/dashboard-stats";

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await axios.get(API_URL);
      if (response.data.success) {
        setStats(response.data.stats);
        setLatestUsers(response.data.latest_users);
      }
    } catch (error) {
      console.error("Gagal mengambil data dashboard:", error);
    } finally {
      setLoading(false);
    }
  };

  // FUNGSI MEMBUKA POP-UP DAN FETCH DATA DETAIL
  const openModalDetail = async (type, title) => {
    setModalType(type);
    setModalTitle(title);
    setIsModalOpen(true);
    setLoadingModal(true);
    setModalData([]);

    try {
      const endpoint = type === "informations" ? "informations" : "help-requests";
      const response = await axios.get(`http://127.0.0.1:9000/api/${endpoint}`);
      
      if (response.data.success || Array.isArray(response.data)) {
        const dataReal = response.data.data || response.data;
        setModalData(dataReal);
      }
    } catch (error) {
      console.error(`Gagal mengambil data detail ${type}:`, error);
      setModalData([]);
    } finally {
      setLoadingModal(false);
    }
  };

  // FUNGSI BARU: EKSEKUSI VERIFIKASI INFORMASI LANGSUNG DARI POP-UP
  const handleVerifyInformation = async (id, statusVerifikasi) => {
    try {
      // Menembak route PATCH: /api/admin/informations/{id}/verify sesuai api.php kamu
      // Catatan: Karena route ini di dalam middleware auth, pastikan menyertakan token jika dipasang.
      // Jika rute masih digabung di public, Axios akan langsung menembak dengan aman.
      const token = localStorage.getItem("token"); // Ambil token jika login admin pakai token
      
      const response = await axios.patch(
        `http://127.0.0.1:9000/api/admin/informations/${id}/verify`,
        { is_verified: statusVerifikasi },
        {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        }
      );

      alert(response.data.message || "Status verifikasi informasi berhasil diperbarui!");
      
      // Update data di dalam modal secara real-time tanpa perlu close popup
      setModalData((prevData) =>
        prevData.map((info) =>
          info.id === id ? { ...info, is_verified: statusVerifikasi } : info
        )
      );

      // Segarkan juga angka statistik total di dashboard utama
      fetchDashboardData();

    } catch (error) {
      console.error("Gagal melakukan verifikasi:", error);
      alert(error.response?.data?.message || "Gagal memperbarui status verifikasi. Pastikan akses admin valid.");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalData([]);
  };

  const dataGrafik = [
    { name: "Total Pengguna", Jumlah: stats.total_users },
    { name: "Total Bantuan", Jumlah: stats.total_helps },
    { name: "Total Informasi", Jumlah: stats.total_informations },
  ];

  if (loading) {
    return (
      <div className="admin-loading">
        <h2>Memuat Data Dashboard...</h2>
      </div>
    );
  }

  return (
    <div className="admin-container">
      {/* HEADER */}
      <div className="admin-header">
        <div>
          <h1>Dashboard Admin</h1>
          <p>Selamat datang kembali Admin InkluSpace</p>
        </div>
      </div>

      {/* CARD SECTION */}
      <div className="admin-card-container">
        {/* PENGGUNA */}
        <div className="admin-card">
          <div className="card-icon purple-card"><FaUsers /></div>
          <div>
            <h3>Total Pengguna</h3>
            <h2>{stats.total_users.toLocaleString("id-ID")}</h2>
            <span className="card-link-disabled">Terdaftar di Sistem</span>
          </div>
        </div>

        {/* BANTUAN */}
        <div className="admin-card clickable-card" onClick={() => openModalDetail("helps", "Daftar Permintaan Bantuan (Relawan)")}>
          <div className="card-icon green-card"><FaHandsHelping /></div>
          <div>
            <h3>Total Bantuan</h3>
            <h2>{stats.total_helps.toLocaleString("id-ID")}</h2>
            <span className="card-link-active">Klik Detail Pop-up →</span>
          </div>
        </div>

        {/* INFORMASI */}
        <div className="admin-card clickable-card" onClick={() => openModalDetail("informations", "Daftar Berbagi Informasi Publik")}>
          <div className="card-icon orange-card"><FaInfoCircle /></div>
          <div>
            <h3>Total Informasi</h3>
            <h2>{stats.total_informations.toLocaleString("id-ID")}</h2>
            <span className="card-link-active">Klik Detail & Verifikasi →</span>
          </div>
        </div>
      </div>

      {/* SECTION VISUALISASI GRAFIK */}
      <div className="chart-section">
        <h2>Visualisasi Data InkluSpace</h2>
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dataGrafik} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#555" />
              <YAxis stroke="#555" />
              <Tooltip cursor={{ fill: "#f5f6fb" }} />
              <Legend />
              <Bar dataKey="Jumlah" fill="#a855f7" radius={[10, 10, 0, 0]} maxBarSize={60} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* TABEL UTAMA */}
      <div className="table-section">
        <h2>Data Pengguna Terbaru</h2>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {latestUsers.length === 0 ? (
              <tr><td colSpan="4" style={{ textAlign: "center" }}>Belum ada pengguna.</td></tr>
            ) : (
              latestUsers.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <span className={`status ${user.status === "approved" || user.status === "active" || user.status === "aktif" ? "aktif" : "nonaktif"}`}>
                      {user.status || "Pending"}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* JENDELA POP-UP MODAL OVERLAY */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{modalTitle}</h2>
              <button className="close-btn" onClick={closeModal}><FaTimes /></button>
            </div>
            
            <div className="modal-body">
              {loadingModal ? (
                <p style={{ textAlign: "center", padding: "40px" }}>Sedang memuat data dari database...</p>
              ) : (
                <div className="modal-table-wrapper">
                  <table>
                    {modalType === "helps" && (
                      <>
                        <thead>
                          <tr>
                            <th>No</th>
                            <th>ID Permintaan</th>
                            <th>Deskripsi / Kebutuhan</th>
                            <th>Tanggal</th>
                          </tr>
                        </thead>
                        <tbody>
                          {modalData.length === 0 ? (
                            <tr><td colSpan="4" style={{ textAlign: "center" }}>Tidak ada data bantuan.</td></tr>
                          ) : (
                            modalData.map((help, index) => (
                              <tr key={help.id}>
                                <td>{index + 1}</td>
                                <td><span className="badge-id">#HELP-{help.id}</span></td>
                                <td>{help.description || help.title || "Tidak ada deskripsi"}</td>
                                <td>{help.created_at ? new Date(help.created_at).toLocaleDateString("id-ID") : "-"}</td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </>
                    )}

                    {modalType === "informations" && (
                      <>
                        <thead>
                          <tr>
                            <th>No</th>
                            <th>Judul Informasi</th>
                            <th>Isi Konten</th>
                            <th>Status</th>
                            <th style={{ textAlign: "center" }}>Aksi Verifikasi</th>
                          </tr>
                        </thead>
                        <tbody>
                          {modalData.length === 0 ? (
                            <tr><td colSpan="5" style={{ textAlign: "center" }}>Tidak ada data informasi.</td></tr>
                          ) : (
                            modalData.map((info, index) => (
                              <tr key={info.id}>
                                <td>{index + 1}</td>
                                <td><strong>{info.title}</strong></td>
                                <td>{info.content ? info.content.substring(0, 50) + "..." : "-"}</td>
                                <td>
                                  <span className={`status ${info.is_verified ? "aktif" : "nonaktif"}`}>
                                    {info.is_verified ? "Terverifikasi" : "Pending"}
                                  </span>
                                </td>
                                <td style={{ textAlign: "center" }}>
                                  <div className="action-buttons-container">
                                    {!info.is_verified ? (
                                      <button 
                                        className="btn-action btn-approve"
                                        title="Setujui Informasi"
                                        onClick={() => handleVerifyInformation(info.id, true)}
                                      >
                                        <FaCheck /> Setujui
                                      </button>
                                    ) : (
                                      <button 
                                        className="btn-action btn-reject"
                                        title="Batalkan Verifikasi"
                                        onClick={() => handleVerifyInformation(info.id, false)}
                                      >
                                        <FaBan /> Batalkan
                                      </button>
                                    )}
                                  </div>
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </>
                    )}
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* AKTIVITAS */}
      <div className="aktivitas-section">
        <h2>Aktivitas Terbaru</h2>
        <div className="aktivitas-card">
          <p>Sistem terhubung ke server backend lokal</p>
          <span>Normal</span>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;