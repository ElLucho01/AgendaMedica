import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Ficha.css";

function Ficha() {

  const navigate = useNavigate();
  const { id } = useParams();

  const [ficha, setFicha] = useState(null);
  const [loading, setLoading] = useState(true);

  const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbl90ZXN0Iiwicm9sZXMiOlsiUk9MRV9BRE1JTiJdLCJpYXQiOjE3ODMwNjE0OTcsImV4cCI6MTc4MzE0Nzg5N30.snOCBoB27HdSI13mDPdvW2CP69fbIHzUHazMWl9LB2Y";

  useEffect(() => {

    fetch(`http://localhost:8081/api/fichas/${id}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        setFicha(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });

  }, [id]);

  if (loading) {
    return <h4 className="text-center mt-4">Cargando ficha...</h4>;
  }

  if (!ficha) {
    return <h4 className="text-center mt-4">No se encontró la ficha</h4>;
  }

  return (
    <div className="page">

      <button
        className="back-button"
        onClick={() => navigate(-1)}
      >
        ←
      </button>

      <div className="medical-record">

        <div className="line"></div>

        <h1>FICHA MÉDICA</h1>

        <div className="line"></div>

        <div className="info">
          <p>
            <strong>Paciente</strong> : {ficha.pacienteNombre}
          </p>

          <p>
            <strong>Doctor</strong> : {ficha.doctorNombre}
          </p>

          <p>
            <strong>Fecha de creación</strong> : {ficha.fechaCreacion}
          </p>
        </div>

        <h2>Diagnóstico</h2>
        <div className="separator"></div>

        <p>{ficha.diagnostico}</p>

        <h2>Prescripción</h2>
        <div className="separator"></div>

        <ul>
          <li>{ficha.prescripcion}</li>
        </ul>

        <div className="line bottom"></div>

      </div>
    </div>
  );
}

export default Ficha;