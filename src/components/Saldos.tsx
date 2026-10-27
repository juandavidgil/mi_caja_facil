import style from "./css/Saldos.module.css";
import { motion } from "framer-motion";
import {
    FaWallet,
    FaMoneyBillWave,
    FaArrowDown,
    FaArrowUp,
    FaExchangeAlt
} from "react-icons/fa";

export default function Saldos() {
    return (
        <div className={style.Saldos}>

            <motion.div
                className={style.SaldoDisponible}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
            >
                <FaWallet className={style.cardIcon} />

                <p className={style.cardTitulo}>
                    Saldo Disponible
                </p>

                <p className={style.cardValor}>
                    $ 1.500.000
                </p>

                <p className={style.cardFecha}>
                    Apertura: 10/06/2026
                </p>
            </motion.div>

            <motion.div
                className={style.TotalGastos}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{duration: 0.5, delay: 0.2}}
                whileHover={{ scale: 1.03 }}
            >
                <FaMoneyBillWave className={style.cardIcon} />

                <p className={style.cardTitulo}>
                    Total Gastos
                </p>

                <p className={style.cardValor}>
                    $ 350.000
                </p>

                <p className={style.cardFecha}>
                    Últimos 30 días
                </p>
            </motion.div>

        </div>
    );
};