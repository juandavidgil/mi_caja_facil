import { motion } from "framer-motion";
import style from "../css/Reportes.module.css";
import CajaId from "../../../components/CajaId";
import papeleria from "../../../assets/papeleria.png";
import transporte from "../../../assets/transporte.png";
import alimentacion from "../../../assets/alimentacion.png";
import otros from "../../../assets/otros.png";
function Reportes() {

    const resumenTipo = [
        { id: 1, imagen: papeleria, tipo: "Papeleria", saldo: "$30.000" },
        { id: 2, imagen: transporte, tipo: "Transporte", saldo: "$50.000" },
        { id: 3, imagen: alimentacion, tipo: "Alimentacion", saldo: "$80.000" },
        { id: 4, imagen: otros, tipo: "Otros", saldo: "$35.000" }
    ]

    return (
        <div className={style.container}>
            <motion.div className={style.hero}
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >

                <CajaId />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2
                }}
                whileHover={{ scale: 1.03 }}
            >
                <div
                    className={style.resumen}
                >
                    {resumenTipo.map((r) => (
                        <motion.div key={r.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            whileHover={{ y: -8, scale: 1.03 }}
                            className={style.resumenCard}
                        >
                            <div className={style.informacionCard}>
                                <div className={style.iconContainer}>
                                    <img
                                        className={style.icono}
                                        src={r.imagen}
                                        alt="imagen"
                                    />
                                </div>
                                <div className={style.textoCard}>
                                    <h4>{r.tipo}</h4>
                                    <span>{r.saldo}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </motion.div>

            <div className={style.ContainerFiltrosBotones}>
                <motion.div
                    className={style.informeCard}
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className={style.cardTitle}>
                        <h2>Filtro de fechas</h2>
                    </div>
                    <div className={style.formGrid}>
                        <div>
                            <label>Fecha Inicio</label>
                            <input type="date" />
                        </div>
                        <div>
                            <label>Fecha Fin</label>
                            <input type="date" />
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Aplicar filtro
                        </motion.button>
                    </div>


                </motion.div>


                <motion.div
                    className={style.ContainerButtons}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >

                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ backgroundColor: "#22c55e" }}
                    >
                        Exportar Excel
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ backgroundColor: " #FF2C2C" }}
                    >
                        Exportar PDF
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ backgroundColor: "#2f80ff" }}
                    >
                        Enviar email
                    </motion.button>
                </motion.div>
            </div>

            <div className={style.secciones}>
                <motion.div
                    className={style.metricas}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h2>Gastos Diarios</h2>

                    <div className={style.fakeChart}>
                        <div className={style.chartLine}></div>
                    </div>
                </motion.div>

                <motion.div
                    className={style.metricas}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h2>Gastos Anuales</h2>

                    <div className={style.fakeChart}>
                        <div className={style.chartLine}></div>
                    </div>

                </motion.div>

                <motion.div
                    className={style.metricas}
                    initial={{ opacity: 0, x: -40}}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h2>Gastos Por Categoria</h2>
                    <div className={style.fakeChart}>
                        <div className={style.chartLine}></div>
                    </div>

                </motion.div>
            </div>
        </div>
    );
};

export default Reportes;