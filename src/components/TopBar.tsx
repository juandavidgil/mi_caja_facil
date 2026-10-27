import { useLocation  } from "react-router-dom";
import style from "./css/TopBar.module.css";
import usuario from "../assets/usuario.png"
import notificacion from "../assets/notificacion.png"
function TopBar() {
    const location = useLocation();
    const paginas = {
        "/inicio": "Inicio",
        "/movimientos": "Movimientos",
        "/fondos": "Fondos",
        "/reportes": "Reportes",
        "/ajustes": "Ajustes",
    }

    const titulo = paginas[location.pathname] || "Caja Fácil"
return (
        <header className={style.topbar}>
            <h2>{titulo}</h2>

            <div className={style.actions}>
                <button className={style.notificacion}>
                    <img
                        src={notificacion}
                        alt="Notificaciones"
                    />
                </button>

                <div className={style.usuario}>
                    <img
                        src={usuario}
                        alt="Usuario"
                    />

                    <span>Juan David Gil Alvear</span>
                </div>
            </div>
        </header>
    );
};

export default TopBar;