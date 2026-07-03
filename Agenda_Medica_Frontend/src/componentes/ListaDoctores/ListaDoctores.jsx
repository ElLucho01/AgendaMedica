import { useEffect, useState } from "react";
import "./Doctores.css";

function Doctores() {

  const [doctores, setDoctores] = useState([]);
  const [loading, setLoading] = useState(true);

  // ⚠️ pega aquí tu token de Postman
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbl90ZXN0Iiwicm9sZXMiOlsiUk9MRV9BRE1JTiJdLCJpYXQiOjE3ODMwNjAzNTIsImV4cCI6MTc4MzE0Njc1Mn0.XYUpm9-x8QwGAQ__cf6BISqIzdvZjhMctXb1vlP_UDw";

  useEffect(() => {

    fetch("http://localhost:8081/api/doctores", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(async (response) => {

        console.log("Status:", response.status);

        const dataText = await response.text();
        console.log("Response:", dataText);

        if (!response.ok) {
          throw new Error(dataText);
        }

        return JSON.parse(dataText);
      })
      .then((data) => {
        setDoctores(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });

  }, []);

  if (loading) {
    return <h4 className="text-center mt-4">Cargando doctores...</h4>;
  }

  return (
    <div className="container mt-4">

      <h3 className="mb-4 text-center">
        Lista de Doctores
      </h3>

      <div className="row g-3">

        {doctores.map((doc) => (
          <div key={doc.id} className="col-md-6">

            <div className="card shadow-sm p-3">

              <h5>{doc.nombreCompleto}</h5>

              <p className="text-muted">
                Especialidad: {doc.especialidadNombre}
              </p>

              <p>Matrícula: {doc.matricula}</p>

              <p>{doc.email}</p>

              <button className="btn btn-outline-primary btn-sm">
                Agendar Hora
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Doctores;