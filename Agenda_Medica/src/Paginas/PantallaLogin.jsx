import { useState } from 'react'
import Login from '../componentes/Login/Login'
import Registro from '../componentes/Registro/Registro'

function PantallaLogin({setIsLoggedIn}) {
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center g-4">

          {/* Login */}
          <div className="col-md-5">
            <Login setIsLoggedIn={setIsLoggedIn}/>
          </div>

          {/* Registro */}
          <div className="col-md-5">
            <Registro />
          </div>

        </div>
      </div>
    </>
  );
}

export default PantallaLogin
