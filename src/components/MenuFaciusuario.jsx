

import inicio from "../assets/inicio.png";
import salida from "../assets/salida.png";
import style from "./css/MenuFacilitador.module.css";
function MenuFaciusuario() {
    return (
        <aside className={style.sidebar}>
            <button>
                <div>
                 
                    <p>Inicio</p>
                </div>
            </button>
            <button>Legalizar Compra</button>
            <button>Mis Solicitudes</button>
            <button>Solicitar Fondos</button>
            <button>Salir</button>
        </aside>
    )
}

export default MenuFaciusuario;