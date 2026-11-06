
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    FaArrowRight,
    FaUsers,
    FaUser,
    FaLock,
    FaEye,
    FaEyeSlash,
} from "react-icons/fa";
import Input from "../../../components/Input";
import style from "../css/LoginFaciusuario.module.css";

function LoginFaciusuario() {
    const navigate = useNavigate();
    const [mostrarContrasena, setMostrarContrasena] = useState(false);



    return (
        <main className={style.loginPage}>
            <header className={style.encabezado}>
                <h1 className={style.logo}>
                    Mi Caja <span>Fácil</span>
                </h1>
            </header>

            <section
                className={style.loginContenido}
                aria-labelledby="titulo-login"
            >
                <div
                    className={style.formulario}
                >
                    <div className={style.formularioEncabezado}>
                        <div>
                            <h2 id="titulo-login">Bienvenido</h2>
                            <p>Ingresa para continuar</p>
                        </div>

                        <div className={style.iconoUsuario}>
                            <FaUsers aria-hidden="true" />
                        </div>
                    </div>

                    <div className={style.campos}>
                        <div className={style.campo}>
                        
                                <Input
                                    label="Documento de identidad"
                                    name="contrasena"
                                    type="text"
                                    placeholder="Ingrese su documento"
                                    autoComplete="current-password"
                                    required
                                />
                           
                        </div>

                        <div className={style.campo}>
                     

                                <Input
                                     label="Contraseña"
                                    name="contrasena"
                                    type="password"
                                    placeholder="Ingrese su contraseña"
                                    autoComplete="current-password"
                                    required
                                />

                            
                        </div>
                    </div>

                    <div className={style.recuperar}>
                        <button
                            type="button"
                            className={style.enlaceRecuperar}
                            onClick={() =>
                                alert("Próximamente podrás recuperar tu contraseña.")
                            }
                        >
                            ¿Olvidaste tu contraseña?
                        </button>
                    </div>

                    <button
                        onClick={() => navigate('/inicio-faciusuario')}
                        className={style.botonIngresar}
                    >
                        <span>Ingresar</span>
                        <FaArrowRight aria-hidden="true" />
                    </button>

                    <div className={style.separador}>
                        <span />
                        <p>o accede como</p>
                        <span />
                    </div>

                    <Link
                        to="/"
                        className={style.botonFacilitador}
                    >
                        <FaUsers aria-hidden="true" />
                        <span>Ingreso Facilitador</span>
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default LoginFaciusuario;
