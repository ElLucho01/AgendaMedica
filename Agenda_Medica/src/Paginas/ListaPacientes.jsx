import { useState } from 'react'
import Pacientes from '../componentes/ListaPacientes/Pacientes';

function ListaPacientes({setIsLoggedIn}) {
  return (
    <>
        <div className="row justify-content-center g-4">

          <div className="col-md-5">
            <Pacientes setIsLoggedIn={setIsLoggedIn}/>
          </div>

        </div>
    </>
  );
}

export default ListaPacientes
