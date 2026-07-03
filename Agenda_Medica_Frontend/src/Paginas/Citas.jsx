import { useState } from 'react'
import CitasLista from '../componentes/CitasLista/CitasLista';

function Citas({setUser}) {
  return (
    <>
        <div className="row justify-content-center g-4">

          <div className="col-md-5">
            <CitasLista setUser={setUser}/>
          </div>

        </div>
    </>
  );
}

export default Citas
