import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "./componentes/NavBarSup/Navbar";
import PantallaLogin from "./Paginas/PantallaLogin";
import AgendarCita from "./Paginas/AgendarCita";
import Ficha from "./Paginas/FichaMedica";
import HistorialClinico from "./Paginas/HistorialClinico";
import ListaPacientes from "./Paginas/ListaPacientes";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
    <Navbar
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn}
    />
      <Routes>
        <Route
          path="/"
          element={<PantallaLogin setIsLoggedIn={setIsLoggedIn} />}
        />

        <Route
          path="/cita"
          element={
            isLoggedIn ? (
              <AgendarCita />
            ) : (
              <Navigate to="/" />
            )
          }

        />

        <Route
          path="/ficha"
          element={
            isLoggedIn ? (
              <Ficha />
            ) : (
              <Ficha />
            )
          }

        />

        <Route
          path="/historial"
          element={
            isLoggedIn ? (
              <HistorialClinico />
            ) : (
              <HistorialClinico />
            )
          }

        />

        <Route
          path="/pacientes"
          element={
            isLoggedIn ? (
              <ListaPacientes />
            ) : (
              <ListaPacientes />
            )
          }

        />


      </Routes>
    </BrowserRouter>
  );
}

export default App;