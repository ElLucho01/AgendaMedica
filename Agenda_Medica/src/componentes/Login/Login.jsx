import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login({setIsLoggedIn}) {
  const [rut, setRut] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();

    // Más adelante aquí irá el POST /auth/login
    setIsLoggedIn(true);
    navigate("/cita");
  };


  return (
    {/* Pantalla de Login */},
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Iniciar Sesión</h2>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">RUT</label>
            <input
              type="text"
              className="form-control"
              placeholder="12.345.678-9"
              value={rut}
              onChange={(e) => setRut(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary w-100">
              Ingresar
            </button>
            <div className="text-danger mt-2">
            {/* Aqui saldrá un mensaje de error */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;