
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaArrowRight,
  FaUsers,
} from "react-icons/fa";

import style from "../css/LoginFacilitador.module.css";
import Input from "../../../components/Input";
import fondo from "../../../assets/Mi Caja Fácil_ Bogotá iluminada_sin _f.png"




function LoginFacilitador() {
  const navigate = useNavigate();

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    // Aquí conectaremos la autenticación cuando esté lista.
    // Por ahora, continúa al inicio del facilitador.
    navigate("/inicio");
  };

  return (
<main
  className={style.loginPage}
  style={{
    backgroundImage: `url("${fondo}")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "100%",
  }}
>
  

      {/* Formulario de inicio de sesión */}
      <section
        className={style.loginContenido}
        aria-labelledby="titulo-login"
      >
        <form
          className={style.formulario}
          onSubmit={handleSubmit}
        >

          <div className={style.formularioEncabezado}>
            <h2 id="titulo-login">
              Bienvenido
            </h2>

            <p>Ingresa para continuar</p>
          </div>

          {/* Campos reutilizables */}
          <div className={style.campos}>
            <Input
              label="Documento de identidad"
              name="documento"
              type="text"
              placeholder="Ingrese su documento"
              autoComplete="username"
              required
            />

            <Input
              label="Contraseña"
              name="contrasena"
              type="password"
              placeholder="Ingrese su contraseña"
              autoComplete="current-password"
              required
            />
          </div>

          {/* Recuperación de contraseña */}
          <div className={style.recuperar}>
            <button
              type="button"
              className={style.enlaceRecuperar}
              onClick={() => {
                alert(
                  "Próximamente podrás recuperar tu contraseña."
                );
              }}
            >
              ¿Olvidaste tu contraseña?
            </button>
          </div>

          {/* Botón de ingreso */}
          <button
            type="submit"
            className={style.botonIngresar}
          >
            <span>Ingresar</span>
            <FaArrowRight aria-hidden="true" />
          </button>

          {/* Separador */}
          <div className={style.separador}>
            <span />
            <p>o accede como</p>
            <span />
          </div>

          {/* Acceso para Faciusuario */}
          <Link
            to="/login_faciusuario"
            className={style.botonUsuario}
          >
            <FaUsers aria-hidden="true" />
            <span>Ingreso Faciusuario</span>
          </Link>

        </form>
      </section>

      {/* Logo de DATA TOOLS en la parte inferior derecha */}
      <footer className={style.piePagina}>
        
      </footer>

    </main>
  );
}

export default LoginFacilitador;
