import { useState } from 'react'
import Ficha from '../componentes/Ficha/Ficha'

function FichaMedica({setIsLoggedIn}) {
  return (
    <>
        <div className="row justify-content-center g-4">

          {/* Login */}
          <div className="col-md-5">
            <Ficha setIsLoggedIn={setIsLoggedIn}/>
          </div>

        </div>
    </>
  );
}

export default FichaMedica
