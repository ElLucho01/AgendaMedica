import { useState } from 'react'
import Historial from '../componentes/Historial/Historial';

function HistorialClinico({setUser}) {
  return (
    <>
        <div className="row justify-content-center g-4">

          <div className="col-md-5">
            <Historial setUser={setUser}/>
          </div>

        </div>
    </>
  );
}

export default HistorialClinico
