import { useEffect, useState } from "react";

function CitasLista() {

  const [citas, setCitas] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbl90ZXN0Iiwicm9sZXMiOlsiUk9MRV9BRE1JTiJdLCJpYXQiOjE3ODMwNjMyNjMsImV4cCI6MTc4MzE0OTY2M30.B0nnQG3YpYEfi-4uX9qb2uYd-oMU2eUm1R5dpsWGGw0";

  useEffect(() => {

    fetch("http://localhost:8081/api/citas", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(async (res) => {
        const text = await res.text();
        if (!res.ok) throw new Error(text);
        return JSON.parse(text);
      })
      .then((data) => {
        setCitas(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error cargando citas:", err);
        setLoading(false);
      });

  }, []);

  if (loading) {
    return <h4 className="text-center mt-4">Cargando citas...</h4>;
  }

  return (
    <div className="container mt-4">

      <h3 className="mb-4 text-center">Lista de Citas</h3>

      <div className="row g-3">

        {citas.map((cita) => (
          <div key={cita.id} className="col-md-6">

            <div className="card shadow-sm p-3">

              <h5 className="mb-2">
                {cita.fecha} - {cita.hora}
              </h5>

              <p className="mb-1">
                <strong>Paciente:</strong> {cita.pacienteNombre}
              </p>

              <p className="mb-1">
                <strong>Doctor:</strong> {cita.doctorNombre}
              </p>

              <p className="mb-1">
                <strong>Estado:</strong> {cita.estado}
              </p>

              <p className="mb-2 text-muted">
                {cita.notas}
              </p>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default CitasLista;