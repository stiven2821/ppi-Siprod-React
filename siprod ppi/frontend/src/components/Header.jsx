import React from "react";
import logo from "/assets/img/logoInverso.png";
import { Link, NavLink } from "react-router-dom";
import Login from "./login";
import Registro from "./Registro";

const Header = () => {
  return (
    <>
      <Login/>
      <Registro/>
      <header>
        {/* <!--header--> */}
        <nav
          className="navbar navbar-expand-md bg-dark fixed-top"
          data-bs-theme="dark"
        >
          <div className="container px-5">
            <a className="navbar-brand">
              <img src={logo} alt="logo" width="70px" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink className="nav-link px-3" aria-current="page" to="/">
                    Inicio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link px-3" href="#miFooter">
                    Contacto
                  </a>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link px-3" to="/Conocenos">
                    Conocenos
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link px-3" to="/Noticias">
                    Noticias
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-person-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path
                        fill-rule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                      />
                    </svg>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        data-bs-toggle="modal"
                        data-bs-target="#inicioSesion"
                      >
                        Iniciar sesión
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        data-bs-toggle="modal"
                        data-bs-target="#registro"
                      >
                        Registrarse
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
