import style from "../css/Fondos.module.css";
import { motion } from "framer-motion";
import CajaId from "../../../components/CajaId";
import Saldos from "../../../components/Saldos";
import arqueo from "../../../assets/arqueo.png";
import TextField from "@mui/material/TextField";

function Fondos() {
    return (
        <div className={style.container}>
            <CajaId />
            <div className={style.Saldos}>
                <Saldos />
                <motion.div
                    className={style.arqueo}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileHover={{ scale: 1.03 }}
                >
                    <p className={style.cardTitulo}>
                        Arqueo
                    </p>
                    <img src={arqueo}
                        alt="arqueo"
                        className={style.ImgArqueo}
                    />
                </motion.div>
            </div>

            <motion.div
                className={style.informeCard}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >

                <div className={style.formContainer}>
                    <div className={style.cardTitle}>
                        <h2>Solicitudes de Fondos</h2>
                    </div>

                    <div className={style.campoMonto}>

                        <TextField
                            type="text"
                            placeholder="$ 0"
                            label="Monto solicitado"
                        />
                    </div>

                    <div className={style.campoMotivo}>
                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            label="Motivo de la solicitud"
                            placeholder="Describe detalladamente el motivo de la solicitud..."
                        />
                    </div>

                    <div className={style.acciones}>
                        <motion.button

                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Enviar Solicitud
                        </motion.button>
                    </div>

                </div>
            </motion.div>

        </div>
    )
}

export default Fondos;