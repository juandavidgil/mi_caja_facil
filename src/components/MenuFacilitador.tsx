
import { NavLink } from "react-router-dom";

import micajafacil from "../assets/logo1.png";

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

            {/* LOGO PRINCIPAL */}
            <div className={style.logoContainer}>
                <img
                    className={style.logo}
                    src={micajafacil}
                    alt="Mi Caja Fácil"
                />
            </div>

            {/* MENÚ DE NAVEGACIÓN */}
            <nav className={style.menu}>

                <NavLink
                    to="/inicio"
                    className={({ isActive }) =>
                        isActive ? style.active : style.link
                    }
                >
                    <img src={inicio} alt="" />
                    <span>Inicio</span>
                </NavLink>

                <NavLink
                    to="/movimientos"
                    className={({ isActive }) =>
                        isActive ? style.active : style.link
                    }
                >
                    <img src={movimientos} alt="" />
                    <span>Movimientos</span>
                </NavLink>

                <NavLink
                    to="/fondos"
                    className={({ isActive }) =>
                        isActive ? style.active : style.link
                    }
                >
                    <img src={fondos} alt="" />
                    <span>Fondos</span>
                </NavLink>

                <NavLink
                    to="/reportes"
                    className={({ isActive }) =>
                        isActive ? style.active : style.link
                    }
                >
                    <img src={reportes} alt="" />
                    <span>Reportes</span>
                </NavLink>

                <NavLink
                    to="/ajustes"
                    className={({ isActive }) =>
                        isActive ? style.active : style.link
                    }
                >
                    <img src={ajustes} alt="" />
                    <span>Ajustes</span>
                </NavLink>

                <div className={style.separador}></div>

                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? style.active : style.link
                    }
                >
                    <img src={salida} alt="" />
                    <span>Salir</span>
                </NavLink>

            </nav>
        </aside>
    );
}

export default MenuFacilitador;
