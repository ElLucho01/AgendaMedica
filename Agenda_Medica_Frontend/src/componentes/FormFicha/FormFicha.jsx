import { useEffect, useState } from "react";

function FormFicha() {

  const [ficha, setFicha] = useState({
    citaId: "",
    diagnostico: "",
    prescripcion: "",
    fechaCreacion: ""
  });

  const [citas, setCitas] = useState([]);

  const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbl90ZXN0Iiwicm9sZXMiOlsiUk9MRV9BRE1JTiJdLCJpYXQiOjE3ODMwNjI1NTIsImV4cCI6MTc4MzE0ODk1Mn0.NyO48Pg2UGNBbO354USG3u453pT5VV62gWVcMh59bEw";

  useEffect(() => {

    fetch("http://localhost:8081/api/citas", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => setCitas(data));

  }, []);

  const handleChange = (e) => {
    setFicha({
      ...ficha,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8081/api/fichas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(ficha)
    })
      .then(async (res) => {
        const text = await res.text();
        if (!res.ok) throw new Error(text);
        return JSON.parse(text);
      })
      .then((data) => {
        console.log("Ficha creada:", data);
        alert("Ficha creada correctamente");

        setFicha({
          citaId: "",
          diagnostico: "",
          prescripcion: "",
          fechaCreacion: ""
        });
      })
.catch(async (error) => {
  console.error("ERROR COMPLETO:", error);
});
  };

  return (
    <form onSubmit={handleSubmit}>

      <h5 className="mb-3">Crear Ficha Médica</h5>

      {/* CITA */}
      <div className="mb-3">
        <label>Cita</label>
        <select
          className="form-control"
          name="citaId"
          value={ficha.citaId}
          onChange={handleChange}
        >
          <option value="">Seleccionar cita</option>
          {citas.map(c => (
            <option key={c.id} value={c.id}>
              Cita #{c.id}
            </option>
          ))}
        </select>
      </div>

      {/* DIAGNÓSTICO */}
      <div className="mb-3">
        <label>Diagnóstico</label>
        <textarea
          className="form-control"
          name="diagnostico"
          value={ficha.diagnostico}
          onChange={handleChange}
        />
      </div>

      {/* PRESCRIPCIÓN */}
      <div className="mb-3">
        <label>Prescripción</label>
        <textarea
          className="form-control"
          name="prescripcion"
          value={ficha.prescripcion}
          onChange={handleChange}
        />
      </div>

      {/* FECHA */}
      <div className="mb-3">
        <label>Fecha de creación</label>
        <input
          type="date"
          className="form-control"
          name="fechaCreacion"
          value={ficha.fechaCreacion}
          onChange={handleChange}
        />
      </div>

      <button className="btn btn-primary w-100" type="submit">
        Crear ficha
      </button>

    </form>
  );
}

export default FormFicha;