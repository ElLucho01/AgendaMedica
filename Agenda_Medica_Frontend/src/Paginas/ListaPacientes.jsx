import { useState } from 'react'
import Pacientes from '../componentes/ListaPacientes/Pacientes';

function ListaPacientes({setUser}) {
  return (
    <>
        <div className="row justify-content-center g-4">

          <div className="col-md-5">
            <Pacientes setUser={setUser}/>
          </div>

        </div>
    </>
  );
}

export default ListaPacientes
