// AdminDashboard.jsx

import React from "react";

import "./AdminDashboard.css";

import {
  FaUsers,
  FaHandsHelping,
  FaInfoCircle,
} from "react-icons/fa";

function AdminDashboard() {

  return (

    <div className="admin-container">

      {/* HEADER */}
      <div className="admin-header">

        <div>

          <h1>Dashboard Admin</h1>

          <p>
            Selamat datang kembali Admin InkluSpace
          </p>

        </div>

      </div>

      {/* CARD SECTION */}
      <div className="admin-card-container">

        {/* PENGGUNA */}
        <div className="admin-card">

          <div className="card-icon purple-card">
            <FaUsers />
          </div>

          <div>

            <h3>Total Pengguna</h3>

            <h2>1.245</h2>

            <span>+12% dari minggu lalu</span>

          </div>

        </div>

        {/* BANTUAN */}
        <div className="admin-card">

          <div className="card-icon green-card">
            <FaHandsHelping />
          </div>

          <div>

            <h3>Total Bantuan</h3>

            <h2>156</h2>

            <span>+15% dari minggu lalu</span>

          </div>

        </div>

        {/* INFORMASI */}
        <div className="admin-card">

          <div className="card-icon orange-card">
            <FaInfoCircle />
          </div>

          <div>

            <h3>Total Informasi</h3>

            <h2>89</h2>

            <span>+5% dari minggu lalu</span>

          </div>

        </div>

      </div>

      {/* TABEL */}
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

            <tr>

              <td>1</td>
              <td>Rina Safitri</td>
              <td>rina@gmail.com</td>
              <td>
                <span className="status aktif">
                  Aktif
                </span>
              </td>

            </tr>

            <tr>

              <td>2</td>
              <td>Budi Santoso</td>
              <td>budi@gmail.com</td>
              <td>
                <span className="status aktif">
                  Aktif
                </span>
              </td>

            </tr>

            <tr>

              <td>3</td>
              <td>Siti Aisyah</td>
              <td>siti@gmail.com</td>
              <td>
                <span className="status nonaktif">
                  Nonaktif
                </span>
              </td>

            </tr>

          </tbody>

        </table>

      </div>

      {/* AKTIVITAS */}
      <div className="aktivitas-section">

        <h2>Aktivitas Terbaru</h2>

        <div className="aktivitas-card">

          <p>
            Pengguna baru mendaftar
          </p>

          <span>2 menit lalu</span>

        </div>

        <div className="aktivitas-card">

          <p>
            Bantuan baru diposting
          </p>

          <span>10 menit lalu</span>

        </div>

        <div className="aktivitas-card">

          <p>
            Informasi baru diposting
          </p>

          <span>20 menit lalu</span>

        </div>

      </div>

    </div>

  );

}

export default AdminDashboard;