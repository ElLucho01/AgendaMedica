import { useNavigate } from "react-router-dom";
import "./Pacientes.css";

function Pacientes() {

    const navigate = useNavigate();

    const pacientes = [
        {
            id: 1,
            nombre: "Juan Pérez González",
            rut: "12.345.678-9",
            edad: 42,
            telefono: "+56 9 1234 5678"
        },
        {
            id: 2,
            nombre: "María González Soto",
            rut: "15.678.901-2",
            edad: 36,
            telefono: "+56 9 8765 4321"
        },
        {
            id: 3,
            nombre: "Pedro Ramírez López",
            rut: "18.765.432-1",
            edad: 58,
            telefono: "+56 9 4567 8912"
        }
    ];

    return (
        <div className="lista-pacientes">

            <h2>Listado de Pacientes</h2>

            <input
                type="text"
                placeholder="Buscar paciente..."
                className="search"
            />

            {pacientes.map((paciente) => (

                <div className="card-paciente" key={paciente.id}>

                    <div className="datos">

                        <h3>{paciente.nombre}</h3>

                        <p><strong>RUT:</strong> {paciente.rut}</p>
                        <p><strong>Edad:</strong> {paciente.edad} años</p>
                        <p><strong>Teléfono:</strong> {paciente.telefono}</p>

                    </div>

                    <button
                        onClick={() => navigate(`/paciente/${paciente.id}`)}
                    >
                        Ver paciente
                    </button>

                </div>

            ))}

        </div>
    );

}

export default Pacientes;