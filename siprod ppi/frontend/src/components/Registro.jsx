import React from "react";

const Registro = () => {
  return (
    <>
      <div
        className="modal fade"
        id="registro"
        tabindex="-1"
        aria-labelledby="registroLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="registro">
                Registro
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="row g-3">
                <div className="col-md-6">
                  <label for="inputUsuario" className="form-label">
                    Usuario
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputUsuario"
                    placeholder="Elpepe123"
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputCorreo" className="form-label">
                    Correo
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputCorreo"
                    placeholder="usuario234@gmail.com"
                  />
                </div>
                <div className="col-12">
                  <label for="inputContraseña" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputContraseña"
                    placeholder="Pepe1234"
                  />
                </div>
                <div className="col-12">
                  <label for="inputContraseña2" className="form-label">
                    Confirmar contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputContraseña2"
                    placeholder="Pepe1234"
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputCiudad" className="form-label">
                    Ciudad
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputCiudad"
                    placeholder="Barbosa"
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputSexo" className="form-label">
                    Sexo
                  </label>
                  <select id="inputSexo" className="form-select">
                    <option selected>Seleccionar</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                  </select>
                </div>
              </form>
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
                Registrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registro;
