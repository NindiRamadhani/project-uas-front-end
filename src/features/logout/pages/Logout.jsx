import "./Logout.css";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  // tombol tidak
  const handleTidak = () => {
    navigate("/home");
  };

  // tombol ya
  const handleYa = () => {
    navigate("/login");
  };

  return (
    <div className="logout-container">

      <div className="logout-box">

        <div className="top-bar"></div>

        <div className="icon-circle">
          !
        </div>

        <h1>Anda Yakin?</h1>

        <p>Anda akan keluar dari website Inkluspace</p>

        <div className="button-group">

          <button className="btn-logout" onClick={handleTidak}>
            TIDAK
          </button>

          <button className="btn-logout" onClick={handleYa}>
            YA
          </button>

        </div>

      </div>

    </div>
  );
}

export default Logout;