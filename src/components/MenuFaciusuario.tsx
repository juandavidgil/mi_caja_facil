import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import micajafacil from "../assets/micajafacil.png"

import inicio from "../assets/inicio.png";
import movimientos from "../assets/movimientos.png";
import fondos from "../assets/fondos.png";
import reportes from "../assets/reportes.png";
import ajustes from "../assets/ajustes.png";
import salida from "../assets/salida.png";
import style from "./css/MenuFacilitador.module.css";

function MenuFacilitador() {

    return (
        <aside className={style.sidebar}>


            <img
                className={style.logo}
                src={micajafacil}
            />
            <nav className={style.menu}>
                {/* opcion fija en ambos roles */}
                <motion.div whileHover={{ scale: 1.05 }}>
                    <NavLink
                        to="/inicio-faciusuario"
                        className={({ isActive }) =>
                            isActive ? style.active : style.link
                        }
                    >
                        <img src={inicio} alt="Inicio" />
                        <span>Inicio</span>
                    </NavLink>
                </motion.div>


                <motion.div whileHover={{ scale: 1.05 }}>
                    <NavLink
                        to="/legalizacion"
                        className={({ isActive }) =>
                            isActive ? style.active : style.link
                        }
                    >
                        <img src={movimientos} alt="Movimientos" />
                        <span>Legalización</span>
                    </NavLink>
                </motion.div>



                <motion.div whileHover={{ scale: 1.05 }}>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? style.active : style.link
                        }
                    >
                        <img src={fondos} alt="Fondos" />
                        <span>Mis solicitudes</span>
                    </NavLink>
                </motion.div>



                {/* opcion fija en ambos roles */}
                <motion.div whileHover={{ scale: 1.05 }}>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? style.active : style.link
                        }
                    >
                        <img src={salida} alt="Salida" />
                        <span>Salir</span>
                    </NavLink>
                </motion.div>

            </nav>
        </aside>
    );
}

export default MenuFacilitador;