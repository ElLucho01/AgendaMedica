import { useState } from "react";

function FormPaciente() {

  const [paciente, setPaciente] = useState({
    nombreCompleto: "",
    rut: "",
    fechaNacimiento: "",
    telefono: ""
  });

  const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbl90ZXN0Iiwicm9sZXMiOlsiUk9MRV9BRE1JTiJdLCJpYXQiOjE3ODMwNjIxMzQsImV4cCI6MTc4MzE0ODUzNH0.xzLXi51fhzApy6wP1qX22DEOZ4H8c8b7Tbk8jobwYAM";

  const handleChange = (e) => {
    setPaciente({
      ...paciente,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8081/api/pacientes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(paciente)
    })
      .then(async (response) => {

        const text = await response.text();

        if (!response.ok) {
          throw new Error(text);
        }

        return JSON.parse(text);
      })
      .then((data) => {
        console.log("Paciente creado:", data);

        alert("Paciente creado correctamente");

        // limpiar formulario
        setPaciente({
          nombreCompleto: "",
          rut: "",
          fechaNacimiento: "",
          telefono: ""
        });
      })
      .catch((error) => {
        console.error("Error al crear paciente:", error);
        alert("Error al crear paciente");
      });
  };

  return (
    <form onSubmit={handleSubmit}>

      <div className="mb-3">
        <label>Nombre completo</label>
        <input
          className="form-control"
          name="nombreCompleto"
          value={paciente.nombreCompleto}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label>RUT</label>
        <input
          className="form-control"
          name="rut"
          value={paciente.rut}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label>Fecha de nacimiento</label>
        <input
          type="date"
          className="form-control"
          name="fechaNacimiento"
          value={paciente.fechaNacimiento}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label>Teléfono</label>
        <input
          className="form-control"
          name="telefono"
          value={paciente.telefono}
          onChange={handleChange}
        />
      </div>

      <button className="btn btn-success w-100" type="submit">
        Crear paciente
      </button>

    </form>
  );
}

export default FormPaciente;