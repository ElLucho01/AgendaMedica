import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Navbar() {

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4">
      <div className="container-fluid">

        <span className="navbar-brand fw-bold">
          Agenda Médica
        </span>

        <div className="d-flex gap-2">

          {!user ? (
            <Link to="/" className="btn btn-outline-primary">
              Iniciar Sesión
            </Link>
          ) : (
            <>
              {user.rol === "paciente" && (
                <>
                  <Link to="/mis-citas" className="btn btn-outline-primary">
                    Mis Citas
                  </Link>

                  <Link to="/mis-fichas" className="btn btn-outline-primary">
                    Mis Fichas
                  </Link>
                </>
              )}

              {user.rol === "medico" && (
                <>
                  <Link to="/pacientes" className="btn btn-outline-primary">
                    Pacientes
                  </Link>

                  <Link to="/cita" className="btn btn-outline-primary">
                    Agendar
                  </Link>

                  <Link to="/citas" className="btn btn-outline-primary">
                    Lista de Citas
                  </Link>

                  <Link to="/historial" className="btn btn-outline-primary">
                    Fichas
                  </Link>
                </>
              )}

              {user.rol === "administrador" && (
                <>

                  <Link to="/admin" className="btn btn-outline-primary">
                    Panel de Administración
                  </Link>

                  <Link to="/pacientes" className="btn btn-outline-primary">
                    Pacientes
                  </Link>

                  <Link to="/doctores" className="btn btn-outline-primary">
                    Doctores
                  </Link>

                  <Link to="/historial" className="btn btn-outline-primary">
                    Fichas
                  </Link>

                  <Link to="/citas" className="btn btn-outline-primary">
                    Lista de Citas
                  </Link>
                </>
              )}

              <button
                className="btn btn-outline-danger"
                onClick={handleLogout}
              >
                Cerrar Sesión
              </button>
            </>
          )}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;