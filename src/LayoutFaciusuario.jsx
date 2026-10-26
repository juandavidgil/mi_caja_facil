import { Outlet } from "react-router-dom";
import MenuFaciusuario from "./components/MenuFaciusuario";
import TopBar from "./components/TopBar";
import style from "./Layout.module.css";

function LayoutFaciusuario() {
    return(
        <div>
            <MenuFaciusuario />
            <div className={style.main}>
                <TopBar/>
                <div className={style.contenido}>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default LayoutFaciusuario;