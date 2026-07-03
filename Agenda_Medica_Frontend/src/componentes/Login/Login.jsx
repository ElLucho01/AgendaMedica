import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Login() {

  const { login } = useAuth();
  const navigate = useNavigate();

  const [rut, setRut] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    let mockUser = null;

    if (rut === "medico") {
      mockUser = { id: 1, nombre: "Dr. Juan", rol: "medico" };
    } else if (rut === "paciente") {
      mockUser = { id: 2, nombre: "Ana", rol: "paciente" };
    } else if (rut === "admin") {
      mockUser = { id: 3, nombre: "Admin", rol: "administrador" };
    }

    if (!mockUser) return alert("Usuario inválido");

    login(mockUser);

    navigate("/cita");
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow p-4" style={{ width: "400px" }}>

        <h2 className="text-center mb-4">Iniciar Sesión</h2>

        <form onSubmit={handleLogin}>

          <div className="mb-3">
            <label className="form-label">Usuario (medico / paciente / admin)</label>
            <input
              className="form-control"
              value={rut}
              onChange={(e) => setRut(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn btn-primary w-100" type="submit">
            Ingresar
          </button>

        </form>

      </div>
    </div>
  );
}

export default Login;