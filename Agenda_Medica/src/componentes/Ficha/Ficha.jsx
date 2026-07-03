import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./Ficha.css";

function Ficha() {
  const navigate = useNavigate();

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
          <p><strong>Paciente</strong> : Juan Pérez González</p>
          <p><strong>Fecha de creación</strong> : 02 de julio de 2026</p>
        </div>

        <h2>Diagnóstico</h2>

        <div className="separator"></div>

        <p>
          Hipertensión arterial esencial (I10). El paciente presenta cifras
          elevadas de presión arterial que requieren tratamiento farmacológico.
        </p>

        <h2>Prescripción</h2>

        <div className="separator"></div>

        <ul>
          <li>Losartán 50 mg cada 24 horas.</li>
          <li>Disminuir el consumo de sodio.</li>
          <li>Actividad física diaria.</li>
          <li>Control médico en 30 días.</li>
        </ul>

        <div className="line bottom"></div>
      </div>
    </div>
  );
}

export default Ficha;