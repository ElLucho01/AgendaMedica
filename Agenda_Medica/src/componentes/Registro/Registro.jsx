function Registro() {
  return (
    <div className="card shadow p-4">
      <h2 className="text-center mb-4">Registrarse</h2>
      
    {/* Formulario de registro */}
      <form>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" className="form-control" placeholder="Nombre"/>
        </div>

        <div className="mb-3">
          <label className="form-label">Rut</label>
          <input type="text" className="form-control" placeholder="12.345.678-9"/>
        </div>

        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" placeholder="correo@ejemplo.com" />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input type="password" className="form-control" placeholder="********"/>
        </div>

        <button className="btn btn-success w-100">
          Crear cuenta
        </button>
      </form>
    </div>
  );
}

export default Registro;