import { useState } from 'react'
import Historial from '../componentes/Historial/Historial';

function HistorialClinico({setIsLoggedIn}) {
  return (
    <>
        <div className="row justify-content-center g-4">

          <div className="col-md-5">
            <Historial setIsLoggedIn={setIsLoggedIn}/>
          </div>

        </div>
    </>
  );
}

export default HistorialClinico
