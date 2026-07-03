import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Historial.css";

function Historial() {

    const navigate = useNavigate();

    const [fichas, setFichas] = useState([]);
    const [loading, setLoading] = useState(true);

    const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbl90ZXN0Iiwicm9sZXMiOlsiUk9MRV9BRE1JTiJdLCJpYXQiOjE3ODMwNjE0OTcsImV4cCI6MTc4MzE0Nzg5N30.snOCBoB27HdSI13mDPdvW2CP69fbIHzUHazMWl9LB2Y";


    useEffect(() => {

        fetch("http://localhost:8081/api/fichas", {
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
            setFichas(data);
            setLoading(false);
        })
        .catch((error) => {
            console.error(error);
            setLoading(false);
        });

    }, []);

    if (loading) {
        return <h4 className="text-center mt-4">Cargando fichas...</h4>;
    }

    return (

        <div className="lista-fichas">

            <h2>Fichas Médicas</h2>

            {fichas.map((ficha) => (

                <div className="card-ficha" key={ficha.id}>

                    <div className="header">

                        <h3>{ficha.pacienteNombre}</h3>

                        <span>{ficha.fechaCreacion}</span>

                    </div>

                    <p>
                        <strong>Diagnóstico:</strong> {ficha.diagnostico}
                    </p>

                    <p>
                        <strong>Prescripción:</strong> {ficha.prescripcion}</p>

                    <p>
                        <strong>Doctor:</strong> {ficha.doctorNombre}
                    </p>

                    <button onClick={() => navigate(`/ficha/${ficha.id}`)}>
                        Ver ficha
                    </button>

                </div>

            ))}

        </div>

    );
}

export default Historial;