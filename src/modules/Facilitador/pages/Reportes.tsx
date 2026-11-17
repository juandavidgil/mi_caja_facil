
import { motion } from "framer-motion";

import style from "../css/Reportes.module.css";
import CajaId from "../../../components/CajaId";

import papeleria from "../../../assets/papeleria.png";
import transporte from "../../../assets/transporte.png";
import alimentacion from "../../../assets/alimentacion.png";
import otros from "../../../assets/otros.png";

import {
    FaFileExcel,
    FaFilePdf,
    FaEnvelope,
    FaChartLine,
    FaCalendarAlt
} from "react-icons/fa";

function Reportes() {

    const resumenTipo = [
        {
            id: 1,
            imagen: papeleria,
            tipo: "Papelería",
            saldo: "$30.000"
        },
        {
            id: 2,
            imagen: transporte,
            tipo: "Transporte",
            saldo: "$50.000"
        },
        {
            id: 3,
            imagen: alimentacion,
            tipo: "Alimentación",
            saldo: "$80.000"
        },
        {
            id: 4,
            imagen: otros,
            tipo: "Otros",
            saldo: "$35.000"
        }
    ];

    return (
        <section className={style.container}>

            <div className={style.glowBlue}></div>
            <div className={style.glowGreen}></div>

            {/* =================================
                ENCABEZADO
            ================================= */}

            <motion.header
                className={style.header}
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className={style.headerInfo}>
                    <div>
                        <h1>Reportes</h1>
                        <p>
                            Consulta y analiza los gastos de tu caja.
                        </p>
                    </div>

                    <CajaId />
                </div>
            </motion.header>

            {/* =================================
                RESUMEN POR CATEGORÍA
            ================================= */}

            <motion.section
                className={style.resumen}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >

                {resumenTipo.map((r, index) => (

                    <motion.div
                        key={r.id}
                        className={style.resumenCard}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className={style.informacionCard}>

                            <div className={style.iconContainer}>
                                <img
                                    className={style.icono}
                                    src={r.imagen}
                                    alt={r.tipo}
                                />
                            </div>

                            <div className={style.textoCard}>
                                <h3>{r.tipo}</h3>
                                <strong>{r.saldo}</strong>
                            </div>

                        </div>
                    </motion.div>

                ))}

            </motion.section>

            {/* =================================
                FILTROS Y EXPORTACIONES
            ================================= */}

            <div className={style.ContainerFiltrosBotones}>

                <motion.div
                    className={style.informeCard}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >

                    <div className={style.cardTitle}>
                        <div className={style.titleIcon}>
                            <FaCalendarAlt />
                        </div>

                        <div>
                            <h2>Filtro de fechas</h2>
                            <p>
                                Selecciona el periodo que deseas consultar.
                            </p>
                        </div>
                    </div>

                    <div className={style.formGrid}>

                        <div className={style.formGroup}>
                            <label htmlFor="fechaInicio">
                                Fecha inicio
                            </label>

                            <input
                                id="fechaInicio"
                                type="date"
                            />
                        </div>

                        <div className={style.formGroup}>
                            <label htmlFor="fechaFin">
                                Fecha fin
                            </label>

                            <input
                                id="fechaFin"
                                type="date"
                            />
                        </div>

                        <motion.button
                            type="button"
                            className={style.btnFiltrar}
                            whileHover={{ scale: 1.03, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            Aplicar filtro
                        </motion.button>

                    </div>

                </motion.div>

                {/* BOTONES DE EXPORTACIÓN */}

                <motion.div
                    className={style.ContainerButtons}
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >

                    <motion.button
                        type="button"
                        className={style.btnExcel}
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <FaFileExcel />
                        Exportar Excel
                    </motion.button>

                    <motion.button
                        type="button"
                        className={style.btnPdf}
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <FaFilePdf />
                        Exportar PDF
                    </motion.button>

                    <motion.button
                        type="button"
                        className={style.btnEmail}
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <FaEnvelope />
                        Enviar por correo
                    </motion.button>

                </motion.div>

            </div>

            {/* =================================
                GRÁFICAS
            ================================= */}

            <section className={style.secciones}>

                {/* GASTOS DIARIOS */}

                <motion.div
                    className={style.metricas}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >

                    <div className={style.metricasHeader}>
                        <div>
                            <h2>Gastos diarios</h2>
                            <p>Comportamiento de los gastos por día.</p>
                        </div>

                        <FaChartLine />
                    </div>

                    <div className={style.fakeChart}>
                        <div className={style.chartLine}></div>
                        <span>Gráfica pendiente de conectar</span>
                    </div>

                </motion.div>

                {/* GASTOS ANUALES */}

                <motion.div
                    className={style.metricas}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >

                    <div className={style.metricasHeader}>
                        <div>
                            <h2>Gastos anuales</h2>
                            <p>Comparativo de gastos por año.</p>
                        </div>

                        <FaChartLine />
                    </div>

                    <div className={style.fakeChart}>
                        <div className={style.chartLine}></div>
                        <span>Gráfica pendiente de conectar</span>
                    </div>

                </motion.div>

                {/* GASTOS POR CATEGORÍA */}

                <motion.div
                    className={style.metricas}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >

                    <div className={style.metricasHeader}>
                        <div>
                            <h2>Gastos por categoría</h2>
                            <p>Distribución de los recursos utilizados.</p>
                        </div>

                        <FaChartLine />
                    </div>

                    <div className={style.fakeChart}>
                        <div className={style.chartLine}></div>
                        <span>Gráfica pendiente de conectar</span>
                    </div>

                </motion.div>

            </section>

        </section>
    );
}

export default Reportes;
