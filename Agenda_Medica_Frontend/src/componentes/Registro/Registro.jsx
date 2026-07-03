import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Registro() {

  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    rut: "",
    correo: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    if (!form.nombre || !form.rut || !form.correo || !form.password) {
      setError("Todos los campos son obligatorios");
      return;
    }

    // 🔒 todos los registros son paciente
    const newUser = {
      id: Date.now(),
      nombre: form.nombre,
      rut: form.rut,
      correo: form.correo,
      rol: "paciente"
    };

    console.log("Usuario creado:", newUser);

    login(newUser);

    navigate("/cita");
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">

      <div className="card shadow p-4" style={{ width: "420px" }}>

        <h2 className="text-center mb-4">Registrarse</h2>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">RUT</label>
            <input
              type="text"
              className="form-control"
              name="rut"
              value={form.rut}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Correo electrónico</label>
            <input
              type="email"
              className="form-control"
              name="correo"
              value={form.correo}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          {error && (
            <div className="alert alert-danger py-2">
              {error}
            </div>
          )}

          <button className="btn btn-success w-100" type="submit">
            Crear cuenta
          </button>

        </form>

      </div>
    </div>
  );
}

export default Registro;