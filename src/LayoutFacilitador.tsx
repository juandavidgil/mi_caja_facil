import { Outlet } from "react-router-dom";
import MenuFacilitador from "./components/MenuFacilitador";
import TopBar from "./components/TopBar";
import style from "./Layout.module.css";

function LayoutFacilitador() {
    return (
        <div>
            <MenuFacilitador />
            <div className={style.main}>
                <TopBar /> 
                <div className={style.contenido}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default LayoutFacilitador;   