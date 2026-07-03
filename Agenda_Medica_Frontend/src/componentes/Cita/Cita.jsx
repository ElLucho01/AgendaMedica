import { useEffect, useState } from "react";

function FormCita() {

  const [cita, setCita] = useState({
    pacienteId: "",
    doctorId: "",
    fecha: "",
    hora: "",
    motivo: ""
  });

  const [pacientes, setPacientes] = useState([]);
  const [doctores, setDoctores] = useState([]);

  const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbl90ZXN0Iiwicm9sZXMiOlsiUk9MRV9BRE1JTiJdLCJpYXQiOjE3ODMwNjMyNjMsImV4cCI6MTc4MzE0OTY2M30.B0nnQG3YpYEfi-4uX9qb2uYd-oMU2eUm1R5dpsWGGw0";

  useEffect(() => {
    fetch("http://localhost:8081/api/pacientes", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => setPacientes(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8081/api/doctores", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => setDoctores(data));
  }, []);

  const handleChange = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      pacienteId: Number(cita.pacienteId),
      doctorId: Number(cita.doctorId),
      fecha: cita.fecha,
      hora: cita.hora,
      motivo: cita.motivo
    };

    fetch("http://localhost:8081/api/citas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    })
      .then(async (res) => {
        const text = await res.text();
        if (!res.ok) throw new Error(text);
        return JSON.parse(text);
      })
      .then(() => {
        alert("Cita creada correctamente");

        setCita({
          pacienteId: "",
          doctorId: "",
          fecha: "",
          hora: "",
          motivo: ""
        });
      })
      .catch(err => {
        console.error(err);
        alert("Error al crear cita");
      });
  };

  return (
    <form onSubmit={handleSubmit}>

      <h5>Agendar Cita</h5>

      <div className="mb-3">
        <label>Paciente</label>
        <select
          name="pacienteId"
          value={cita.pacienteId}
          onChange={handleChange}
          className="form-control"
        >
          <option value="">Seleccionar paciente</option>
          {pacientes.map(p => (
            <option key={p.id} value={p.id}>
              {p.nombreCompleto}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label>Doctor</label>
        <select
          name="doctorId"
          value={cita.doctorId}
          onChange={handleChange}
          className="form-control"
        >
          <option value="">Seleccionar doctor</option>
          {doctores.map(d => (
            <option key={d.id} value={d.id}>
              {d.nombreCompleto}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          value={cita.fecha}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          value={cita.hora}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label>Motivo</label>
        <textarea
          name="motivo"
          value={cita.motivo}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <button className="btn btn-primary w-100">
        Agendar cita
      </button>

    </form>
  );
}

export default FormCita;