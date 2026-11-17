
import { useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import style from "./css/TopBar.module.css";
import usuarioImg from "../assets/usuario.png";
import notificacion from "../assets/notificacion.png";

function TopBar() {
    const location = useLocation();
    const { usuario, perfilActivo } = useAuth();

    const paginas: Record<string, string> = {
        "/dashboard": "Dashboard",
        "/nueva-solicitud": "Nueva solicitud",
        "/mis-solicitudes": "Mis solicitudes",
        "/mis-beneficios": "Mis beneficiaros",
        "/mi-perfil": "Mi perfil",
    };

    const titulo = paginas[location.pathname] || "Caja Fácil";

    return (
        <header className={style.topbar}>
            <h2>{titulo}</h2>

            <div className={style.actions}>
                <button className={style.notificacion}>
                    <img src={notificacion} alt="Notificaciones" />
                </button>

                <div className={style.usuario}>
                    <img src={usuarioImg} alt="Usuario" />

                    <div>
                        <span>
                            {usuario?.nombreCompleto ?? "Usuario"}
                        </span>

                    </div>
                </div>
                <div className={style.perfilActivo}>
                    {perfilActivo && (
                        <span>{perfilActivo.perfil}</span>
                    )}
                </div>
            </div>
        </header>
    );
}

export default TopBar;
