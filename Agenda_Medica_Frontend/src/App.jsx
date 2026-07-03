import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./componentes/NavBarSup/Navbar";
import PantallaLogin from "./Paginas/PantallaLogin";
import AgendarCita from "./Paginas/AgendarCita";
import Ficha from "./Paginas/FichaMedica";
import HistorialClinico from "./Paginas/HistorialClinico";
import ListaPacientes from "./Paginas/ListaPacientes";
import ListaDoctores from "./Paginas/ListaDoctores";
import AdminDashboard from "./Paginas/AdminDashboard";
import Citas from "./Paginas/Citas"

import { useAuth } from "./context/AuthContext";

function App() {

  const { user } = useAuth();

  const ProtectedRoute = ({ children }) => {
    if (!user) return <Navigate to="/" />;
    return children;
  };

  const RoleRoute = ({ children, roles }) => {
    if (!user) return <Navigate to="/" />;
    if (!roles.includes(user.rol)) return <Navigate to="/" />;
    return children;
  };

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* LOGIN */}
        <Route
          path="/"
          element={
            user ? (
              user.rol === "administrador" ? (
                <Navigate to="/admin" />
              ) : user.rol === "medico" ? (
                <Navigate to="/pacientes" />
              ) : (
                <Navigate to="/ficha" />
              )
            ) : (
              <PantallaLogin />
            )
          }
        />

        {/* CITAS */}
        <Route
          path="/cita"
          element={
            <ProtectedRoute>
              <AgendarCita />
            </ProtectedRoute>
          }
        />

        <Route
          path="/citas"
          element={
            <ProtectedRoute>
              <Citas />
            </ProtectedRoute>
          }
        />

        {/* PACIENTES */}
        <Route
          path="/pacientes"
          element={
            <RoleRoute roles={["medico", "administrador"]}>
              <ListaPacientes />
            </RoleRoute>
          }
        />

        {/* DOCTORES */}
        <Route
          path="/doctores"
          element={
            <RoleRoute roles={["medico", "administrador"]}>
              <ListaDoctores />
            </RoleRoute>
          }
        />

        <Route
          path="/ficha/:id"
          element={
            <RoleRoute roles={["medico", "administrador"]}>
              <Ficha />
            </RoleRoute>
          }
        />

        {/* ADMIN */}
        <Route
          path="/admin"
          element={
            <RoleRoute roles={["administrador"]}>
              <AdminDashboard />
            </RoleRoute>
          }
        />

        {/* HISTORIAL (si lo usas de verdad) */}
        <Route
          path="/historial"
          element={
            <RoleRoute roles={["medico", "administrador"]}>
              <HistorialClinico />
            </RoleRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;