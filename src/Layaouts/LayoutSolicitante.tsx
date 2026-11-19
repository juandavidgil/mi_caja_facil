import { Outlet } from "react-router-dom";
import MenuSolicitante from "../components/Menus/MenuSolicitante"
import TopBar from "../components/TopBar";
import style from "./Layout.module.css";

function LayoutSolicitante() {
    return (
        <div className={style.layout}>
            <MenuSolicitante />

            <div className={style.main}>
                <TopBar />

                <div className={style.contenido}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default LayoutSolicitante;