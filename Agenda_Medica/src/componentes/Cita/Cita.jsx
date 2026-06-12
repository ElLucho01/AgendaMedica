function Cita() {
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow p-4" style={{ width: "500px" }}>
        <h2 className="text-center mb-4">Generar Cita Médica</h2>

        <form>
          <div className="mb-3">
                <label className="form-label">Fecha de la cita</label>
                <input
                type="date"
                className="form-control"
                />
            <div className="mb-3">
                <label className="form-label">Hora</label>
                <input type="time" className="form-control" />
                </div>

                <div className="mb-3">
                <label className="form-label">Motivo de la consulta</label>
                <textarea className="form-control" rows="3"></textarea>
                </div>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Reservar cita
          </button>
        </form>
      </div>
    </div>
  );
}

export default Cita;