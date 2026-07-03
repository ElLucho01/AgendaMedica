import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Cita from '../Cita/Cita'
import FormPaciente from '../FormPaciente/FormPaciente'
import FormMedico from '../FormMedico/FormMedico'
import FormFicha from '../FormFicha/FormFicha'


function Dashboard() {

  const { user } = useAuth();
  const { navigate } = useNavigate();

  const [view, setView] = useState("home");

  if (!user || user.rol !== "administrador") {
    return <h2>Acceso denegado</h2>;
  }

  return (
    <div className="container mt-4">

      <h2 className="text-center mb-4">
        Panel Administrador
      </h2>

      {/* MENÚ */}
      <div className="d-flex justify-content-center gap-2 mb-4">

        <button className="btn btn-primary" onClick={() => setView("pacientes")}>
          Pacientes
        </button>

        <button className="btn btn-primary" onClick={() => setView("doctores")}>
          Doctores
        </button>

        <button className="btn btn-primary" onClick={() => setView("fichas")}>
          Fichas
        </button>

        <button className="btn btn-primary" onClick={() => setView("citas")}>
          Citas
        </button>

      </div>

      {/* CONTENIDO */}
      <div className="card p-4 shadow-sm">

        {view === "home" && (
          <h5>Selecciona una opción del panel</h5>
        )}

        {view === "pacientes" && (
          <div>
            <h5>Crear Paciente</h5>
            <FormPaciente />
          </div>
        )}

        {view === "doctores" && (
          <div>
            <h5>Crear Doctor</h5>
            <FormMedico />
          </div>
        )}

        {view === "fichas" && (
          <div>
            <FormFicha />
          </div>
        )}

        {view === "citas" && (
          <div>
            <Cita />
          </div>
        )}

      </div>

    </div>
  );
}

export default Dashboard;