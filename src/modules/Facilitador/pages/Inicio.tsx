import { motion } from "framer-motion";

import {
  FaWallet,
  FaMoneyBillWave,
  FaArrowDown,
  FaArrowUp,
  FaExchangeAlt
} from "react-icons/fa";
import style from "../css/Inicio.module.css";
import CajaId from "../../../components/CajaId";
import Saldos from "../../../components/Saldos";
function Inicio() {
  return (
    <div className={style.container}>

      <motion.div className={style.hero}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div>
          <h1 className={style.titulo}>
            Bienvenido, a tu caja facil Juan 👋
          </h1>

          <p className={style.subtitulo}>
            Gestiona tus movimientos y controla tu caja en tiempo real.
          </p>
        </div>

        <CajaId />
      </motion.div>

      <Saldos />
      <div className={style.stats}>

        <motion.div
          className={style.statCard}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.3
          }}
          whileHover={{
            y: -8,
            scale: 1.03
          }}
        >
          <FaExchangeAlt />

          <h4>Ingresos</h4>

          <span>$1.200.000</span>

        </motion.div>

        <motion.div
          className={style.statCard}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ y: -8, scale: 1.03 }}
        >
          <FaExchangeAlt />
          <h4>Movimientos</h4>
          <span>142</span>
        </motion.div>

        <motion.div
          className={style.statCard}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ y: -8, scale: 1.03 }}
        >
          <FaWallet />
          <h4>Estado</h4>
          <span>Activa</span>
        </motion.div>
      </div>

      <div className={style.secciones}>

        <motion.div
          className={style.balance}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2>Balance Histórico</h2>

          <div className={style.fakeChart}>
            <div className={style.chartLine}></div>
          </div>

        </motion.div>

        <motion.div
          className={style.transacciones}
        /* {...animacion} */
        >
          <h2>Transacciones Recientes</h2>

          <motion.div
            className={style.transaccion}
            whileHover={{ x: 8 }}
          >

            <div className={style.transaccionInfo}>

              <FaArrowDown className={style.iconIngreso} />

              <div>
                <p className={style.tipo}>
                  Consignación
                </p>

                <p className={style.fecha}>
                  10/06/2026
                </p>
              </div>

            </div>

            <p className={style.valorPositivo}>
              + $500.000
            </p>

          </motion.div>

          <motion.div
            className={style.transaccion}
            whileHover={{ x: 8 }}
          >

            <div className={style.transaccionInfo}>
              <FaArrowUp className={style.iconGasto} />
              <div>
                <p className={style.tipo}>
                  Compra
                </p>

                <p className={style.fecha}>
                  09/06/2026
                </p>
              </div>

            </div>

            <p className={style.valorNegativo}>
              - $120.000
            </p>

          </motion.div>

        </motion.div>

      </div>

    </div>
  );
}

export default Inicio;