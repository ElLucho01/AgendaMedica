import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "./componentes/NavBarSup/Navbar";
import PantallaLogin from "./Paginas/PantallaLogin";
import AgendarCita from "./Paginas/AgendarCita";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;