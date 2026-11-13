
import { FaWallet } from "react-icons/fa";
import style from "./css/CajaId.module.css";

interface CajaIdProps {
    codigo?: string;
}

export default function CajaId({ codigo = "001" }: CajaIdProps) {
    return (
        <div className={style.CajaId}>
            <FaWallet className={style.icono} />

            <div className={style.informacion}>
                <span>Caja </span>
                <strong>#{codigo}</strong>
            </div>
        </div>
    );
}
