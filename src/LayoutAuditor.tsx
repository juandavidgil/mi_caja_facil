import { Outlet } from "react-router-dom";
import MenuAuditor from "./components/MenuAuditor";
import TopBar from "./components/TopBar";
import style from "./Layout.module.css";

function LayoutAuditor() {
    return (
        <div className={style.layout}>
            <MenuAuditor />

            <div className={style.main}>
                <TopBar />

                <div className={style.contenido}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default LayoutAuditor;