
import { motion } from "framer-motion";
import { useState } from 'react';
import style from "../css/MiCajaPrueba.module.css";
import Logo from "../../../assets/logo1.png";
import Input from "../../../components/Input"
import ModalPerfiles from "../../../components/ModalPerfiles";
import { Link, useNavigate } from "react-router-dom";

function MiCajaPrueba() {

const navigate = useNavigate()

 const [mostrarModal, setMostrarModal] = useState(false);
 const [documento, setDocumento ] = useState("");

  // Abrir modal al ingresar
  const Ingresar = () => {
    setMostrarModal(true);
  };

  // Continuar después de seleccionar un perfil
  const continuarConPerfil = (perfil: any) => {
    setMostrarModal(false);

    navigate("/dashboard", {
      state: { perfil },
    });
  };
    return (
        <>
        {mostrarModal && (
      <ModalPerfiles
        nombreUsuario="Facilitador"
        onContinuar={continuarConPerfil}
      />
    )}
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
                        />
                        <div className={style.formulario}>

                            <h1>¡Bienvenido de nuevo!</h1>

                            <p className={style.descripcion}>
                                Ingresa a tu cuenta de Mi Caja Fácil
                            </p>

                            <form>


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


                                <button 
                                onClick={Ingresar}
                                type="button" className={style.boton}>
                                    Ingresar
                                </button>

                                <p className={style.registro}>
                                    <a href="#">Olvide mi contraseña</a>
                                </p>

                            </form>


                        </div>
                    </div>

                </motion.div>

            </div>
        </>
    );
}

export default MiCajaPrueba;
