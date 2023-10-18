import React from "react";

const Login = () => {
  return (
    <>
      <div
        className="modal fade"
        id="inicioSesion"
        tabindex="-1"
        aria-labelledby="inicioSesionLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="inicioSesion">
                Inicio sesión
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label for="inputUser" className="form-label">
                  Usuario
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputUser"
                  placeholder="Usuario1234"
                />
              </div>
              <div className="mb-3">
                <label for="inputPass" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPass"
                  placeholder="Contraseña1234"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button type="button" className="btn btn-dark">
                Iniciar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
