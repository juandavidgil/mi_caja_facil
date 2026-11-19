
import { NavLink } from "react-router-dom";

import micajafacil from "../../assets/logo1.png";

import dashboard from "../../assets/inicio.png";
import nuevaSolicitud from "../../assets/movimientos.png";
import misSolicitudes from "../../assets/fondos.png";
import misBeneficios from "../../assets/reportes.png";
import miPerfil from "../../assets/ajustes.png";
import salida from "../../assets/salida.png";

import style from "./Menu.module.css";

function MenuAuditor() {
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

            {/* MENÚ DE SOLICITUDES */}
            <nav className={style.menu}>


                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        isActive ? style.active : style.link
                    }
                >
                    <img src={dashboard} alt="" />
                    <span>Dashboard</span>
                </NavLink>

                <NavLink
                    to="/nueva-solicitud"
                    className={({ isActive }) =>
                        isActive ? style.active : style.link
                    }
                >
                    <img src={nuevaSolicitud} alt="" />
                    <span>Solicitudes por Revisar</span>
                </NavLink>

                <NavLink
                    to="/mis-solicitudes"
                    className={({ isActive }) =>
                        isActive ? style.active : style.link
                    }
                >
                    <img src={misSolicitudes} alt="" />
                    <span>Detalle de Solicitud</span>
                </NavLink>

                <NavLink
                    to="/mis-beneficios"
                    className={({ isActive }) =>
                        isActive ? style.active : style.link
                    }
                >
                    <img src={misBeneficios} alt="" />
                    <span>Historial de Solicitudes</span>
                </NavLink>

                <NavLink
                    to="/mi-perfil"
                    className={({ isActive }) =>
                        isActive ? style.active : style.link
                    }
                >
                    <img src={miPerfil} alt="" />
                    <span>Legalizaciones</span>
                </NavLink>

  

                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? style.active : style.link
                    }
                >
                    <img src={salida} alt="" />
                    <span>Reportes</span>
                </NavLink>
                
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? style.active : style.link
                    }
                >
                    <img src={salida} alt="" />
                    <span>Salida</span>
                </NavLink>

            </nav>
        </aside>
    );
}

export default MenuAuditor;
