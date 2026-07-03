import "./Historial.css";

function Historial() {

    const fichas = [
        {
            id: 1,
            paciente: "Juan Pérez González",
            fecha: "02/07/2026",
            diagnostico: "Hipertensión arterial esencial",
            prescripcion: "Losartán 50 mg cada 24 horas."
        },
        {
            id: 2,
            paciente: "María González Soto",
            fecha: "28/06/2026",
            diagnostico: "Diabetes Mellitus Tipo II",
            prescripcion: "Metformina 850 mg cada 12 horas."
        },
        {
            id: 3,
            paciente: "Pedro Ramírez López",
            fecha: "22/06/2026",
            diagnostico: "Bronquitis aguda",
            prescripcion: "Amoxicilina 500 mg cada 8 horas."
        }
    ];

    return (

        <div className="lista-fichas">

            <h2>Fichas Médicas</h2>

            {fichas.map((ficha) => (

                <div className="card-ficha" key={ficha.id}>

                    <div className="header">

                        <h3>{ficha.paciente}</h3>

                        <span>{ficha.fecha}</span>

                    </div>

                    <p>
                        <strong>Diagnóstico:</strong> {ficha.diagnostico}
                    </p>

                    <p>
                        <strong>Prescripción:</strong> {ficha.prescripcion}
                    </p>

                    <button>Ver ficha</button>

                </div>

            ))}

        </div>

    );

}

export default Historial;