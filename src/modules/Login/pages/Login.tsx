import { motion } from "framer-motion";
import { useState } from "react";
import style from "../css/Login.module.css";
import Logo from "../../../assets/logo1.png";
import Input from "../../../components/Input";
import ModalPerfiles from "../../../components/modalPerdiles/ModalPerfiles";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

function Login() {
    const navigate = useNavigate();
    const [mostrarModal, setMostrarModal] = useState(false);

    const {
        documento,
        setDocumento,
        contraseña,
        setContraseña,
        Ingresar,
        loading,
        errores,
        errorGeneral,
        setErrores,
        continuarConPerfil,
        perfiles
    } = useLogin(setMostrarModal, navigate);

    return (
        <>
            <ModalPerfiles
                mostrar={mostrarModal}
                perfiles={perfiles}
                onContinuar={continuarConPerfil}
            />

            <div className={style.pantalla}>
                <motion.div
                    className={style.contenido}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className={style.containerFormulario}>
                        <img
                            className={style.logo}
                            src={Logo}
                            alt="Logo Mi Caja Fácil"
                        />

                        <div className={style.formulario}>
                            <h1>¡Bienvenido de nuevo!</h1>

                            <p className={style.descripcion}>
                                Ingresa a tu cuenta de Mi Caja Fácil
                            </p>

                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    Ingresar();
                                }}
                            >
                                <Input
                                    label="Documento de identidad"
                                    name="documento"
                                    type="text"
                                    placeholder="Ingrese su documento"
                                    autoComplete="username"
                                    required
                                    value={documento}
                                    error={errores.documento}
                                    onChange={(e) => {
                                        setDocumento(e.target.value);
                                        setErrores(prev => ({
                                            ...prev,
                                            documento: ""
                                        }));
                                    }}
                                />

                                <Input
                                    label="Contraseña"
                                    name="contrasena"
                                    type="password"
                                    placeholder="Ingrese su contraseña"
                                    autoComplete="current-password"
                                    required
                                    value={contraseña}
                                    error={errores.contraseña}
                                    onChange={(e) => {
                                        setContraseña(e.target.value);
                                        setErrores(prev => ({
                                            ...prev,
                                            contraseña: ""
                                        }));
                                    }}
                                />

                                <button
                                    type="submit"
                                    className={style.boton}
                                    disabled={loading}
                                >
                                    {loading ? "Ingresando..." : "Ingresar"}
                                </button>

                                {errorGeneral && (
                                    <p className={style.errorGeneral}>
                                        {errorGeneral}
                                    </p>
                                )}

                                <p className={style.registro}>
                                    <a href="#">Olvidé mi contraseña</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
}

export default Login;