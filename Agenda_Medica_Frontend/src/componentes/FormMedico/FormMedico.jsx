import { useState } from "react";

function FormMedico() {
  const [medico, setMedico] = useState({
    nombre: "",
    rut: "",
    correo: "",
    contrasena: "",
    telefono: "",
    especialidad: ""
  });

  const handleChange = (e) => {
    setMedico({
      ...medico,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(medico);

    // Aquí irá:
    // await api.post("/pacientes", paciente);
  };

  return (
    <form onSubmit={handleSubmit}>

      <div className="mb-3">
        <label>Nombre</label>
        <input
          className="form-control"
          name="nombre"
          value={medico.nombre}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label>RUT</label>
        <input
          className="form-control"
          name="rut"
          value={medico.rut}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label>Correo</label>
        <input
          type="email"
          className="form-control"
          name="correo"
          value={medico.correo}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label>Contraseña</label>
        <input
            type="password"
            className="form-control"
            name="password"
            value={medico.password}
            onChange={handleChange}
        />
        </div>

      <div className="mb-3">
        <label>Teléfono</label>
        <input
          className="form-control"
          name="telefono"
          value={medico.telefono}
          onChange={handleChange}
        />
      </div>

        <div className="mb-3">
        <label>Especialidad</label>
        <input
          className="form-control"
          name="especialidad"
          value={medico.especialidad}
          onChange={handleChange}
        />
      </div>

      <button className="btn btn-success w-100">
        Crear Doctor
      </button>

    </form>
  );
}

export default FormMedico;