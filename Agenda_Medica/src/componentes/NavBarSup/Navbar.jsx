import { Link, useNavigate } from "react-router-dom";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4">
      <div className="container-fluid">
        <span className="navbar-brand fw-bold">
          Agenda Médica
        </span>

        <div className="d-flex gap-2">

          {isLoggedIn ? (
            <>
              <Link to="/cita" className="btn btn-outline-primary">
                Agendar Cita
              </Link>

              <button
                className="btn btn-outline-danger"
                onClick={handleLogout}
              >
                Cerrar Sesión
              </button>
            </>
          ) : (
            <Link to="/" className="btn btn-outline-primary">
              Iniciar Sesión
            </Link>
          )}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;