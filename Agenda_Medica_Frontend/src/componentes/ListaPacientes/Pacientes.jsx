import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Pacientes.css";

function Pacientes() {

    const navigate = useNavigate();

    const [pacientes, setPacientes] = useState([]);
    const [loading, setLoading] = useState(true);

    const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbl90ZXN0Iiwicm9sZXMiOlsiUk9MRV9BRE1JTiJdLCJpYXQiOjE3ODMwNjEyNjQsImV4cCI6MTc4MzE0NzY2NH0.SrsQtAUlSq73QRym4PcsKzCYhQ410rLsgpccqBlXLF4";

    useEffect(() => {

        fetch("http://localhost:8081/api/pacientes", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(async (response) => {

            const text = await response.text();

            if (!response.ok) {
                throw new Error(text);
            }

            return JSON.parse(text);
        })
        .then((data) => {
            setPacientes(data);
            setLoading(false);
        })
        .catch((error) => {
            console.error("Error:", error);
            setLoading(false);
        });

    }, []);

    if (loading) {
        return <h4 className="text-center mt-4">Cargando pacientes...</h4>;
    }

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

                        <h3>{paciente.nombreCompleto}</h3>

                        <p><strong>RUT:</strong> {paciente.rut}</p>

                        <p>
                            <strong>Fecha de nacimiento:</strong>{" "}
                            {paciente.fechaNacimiento}
                        </p>

                        <p><strong>Teléfono:</strong> {paciente.telefono}</p>

                    </div>

                </div>

            ))}

        </div>
    );
}

export default Pacientes;