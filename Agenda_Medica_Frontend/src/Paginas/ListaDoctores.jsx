import { useState } from 'react'
import Doctores from '../componentes/ListaDoctores/ListaDoctores';

function ListaDoctores({setUser}) {
  return (
    <>
        <div className="row justify-content-center g-4">

          <div className="col-md-5">
            <Doctores setUser={setUser}/>
          </div>

        </div>
    </>
  );
}

export default ListaDoctores
