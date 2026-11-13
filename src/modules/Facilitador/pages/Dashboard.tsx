
import { motion } from "framer-motion";

import {
    FaFileAlt,
    FaClock,
    FaCheckCircle,
    FaTimesCircle,
    FaWallet,
    FaMoneyBillWave,
    FaArrowRight,
    FaClipboardList
} from "react-icons/fa";

import style from "../css/Dashboard.module.css";

const indicadores = [
    {
        titulo: "Solicitudes realizadas",
        valor: "8",
        detalle: "Total de solicitudes",
        icono: FaFileAlt,
        clase: "azul"
    },
    {
        titulo: "En revisión",
        valor: "2",
        detalle: "Pendientes de autorización",
        icono: FaClock,
        clase: "amarillo"
    },
    {
        titulo: "Aprobadas",
        valor: "4",
        detalle: "Solicitudes autorizadas",
        icono: FaCheckCircle,
        clase: "verde"
    },
    {
        titulo: "Rechazadas",
        valor: "1",
        detalle: "Solicitudes no aprobadas",
        icono: FaTimesCircle,
        clase: "rojo"
    }
];

const solicitudes = [
    {
        numero: "SOL-2026-008",
        concepto: "Compra de materiales",
        fecha: "10/11/2026",
        valor: "$850.000",
        estado: "En revisión",
        clase: "revision"
    },
    {
        numero: "SOL-2026-007",
        concepto: "Apoyo para actividad institucional",
        fecha: "08/11/2026",
        valor: "$1.200.000",
        estado: "Aprobada",
        clase: "aprobada"
    },
    {
        numero: "SOL-2026-006",
        concepto: "Compra de elementos de oficina",
        fecha: "05/11/2026",
        valor: "$450.000",
        estado: "Aprobada",
        clase: "aprobada"
    },
    {
        numero: "SOL-2026-005",
        concepto: "Solicitud de transporte",
        fecha: "02/11/2026",
        valor: "$300.000",
        estado: "Rechazada",
        clase: "rechazada"
    }
];

const actividades = [
    {
        titulo: "Solicitud enviada",
        descripcion: "SOL-2026-008 · Compra de materiales",
        fecha: "10/11/2026",
        icono: FaFileAlt,
        clase: "actividadAzul"
    },
    {
        titulo: "Solicitud aprobada",
        descripcion: "SOL-2026-007 · Apoyo para actividad institucional",
        fecha: "09/11/2026",
        icono: FaCheckCircle,
        clase: "actividadVerde"
    },
    {
        titulo: "Solicitud en revisión",
        descripcion: "SOL-2026-008 · Pendiente de autorización",
        fecha: "10/11/2026",
        icono: FaClock,
        clase: "actividadAmarilla"
    }
];

function Dashboard() {
    return (
        <div className={style.container}>

            {/* BIENVENIDA */}
            <motion.section
                className={style.hero}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <div>
                    <h1 className={style.titulo}>
                        ¡Bienvenido, Juan Diego! 👋
                    </h1>

                    <p className={style.subtitulo}>
                        Consulta tus solicitudes, revisa tus beneficios
                        y conoce el estado de tus trámites.
                    </p>
                </div>
            </motion.section>

            {/* INDICADORES */}
            <section className={style.stats}>
                {indicadores.map((item, index) => {
                    const Icono = item.icono;

                    return (
                        <motion.article
                            key={item.titulo}
                            className={style.statCard}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <div className={`${style.statIcon} ${style[item.clase]}`}>
                                <Icono />
                            </div>

                            <div className={style.statInfo}>
                                <span>{item.titulo}</span>
                                <strong>{item.valor}</strong>
                                <small>{item.detalle}</small>
                            </div>
                        </motion.article>
                    );
                })}
            </section>

            {/* RESUMEN DE BENEFICIOS */}
            <section className={style.beneficios}>
                <div className={style.beneficioInfo}>
                    <div className={style.beneficioIcono}>
                        <FaWallet />
                    </div>

                    <div>
                        <h2>Resumen de beneficios</h2>
                        <p>Consulta el resumen de tus recursos asignados.</p>
                    </div>
                </div>

                <div className={style.beneficioValores}>
                    <div>
                        <span>Valor asignado</span>
                        <strong>$2.800.000</strong>
                    </div>

                    <div>
                        <span>Valor utilizado</span>
                        <strong>$1.200.000</strong>
                    </div>

                    <div>
                        <span>Valor disponible</span>
                        <strong className={style.disponible}>
                            $1.600.000
                        </strong>
                    </div>
                </div>
            </section>

            {/* CONTENIDO INFERIOR */}
            <section className={style.secciones}>

                {/* SOLICITUDES RECIENTES */}
                <motion.div
                    className={style.solicitudes}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className={style.seccionHeader}>
                        <div>
                            <h2>Mis solicitudes recientes</h2>
                            <p>Consulta el estado de tus últimas solicitudes.</p>
                        </div>

                        <FaClipboardList />
                    </div>

                    <div className={style.listaSolicitudes}>
                        {solicitudes.map((solicitud) => (
                            <article
                                className={style.solicitud}
                                key={solicitud.numero}
                            >
                                <div className={style.solicitudInfo}>
                                    <strong>{solicitud.concepto}</strong>
                                    <span>{solicitud.numero}</span>
                                    <small>{solicitud.fecha}</small>
                                </div>

                                <div className={style.solicitudDetalle}>
                                    <strong>{solicitud.valor}</strong>

                                    <span className={`${style.estado} ${style[solicitud.clase]}`}>
                                        {solicitud.estado}
                                    </span>
                                </div>
                            </article>
                        ))}
                    </div>
                </motion.div>

                {/* ACTIVIDAD RECIENTE */}
                <motion.div
                    className={style.actividad}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className={style.seccionHeader}>
                        <div>
                            <h2>Actividad reciente</h2>
                            <p>Últimos movimientos de tus solicitudes.</p>
                        </div>

                        <FaClock />
                    </div>

                    <div className={style.listaActividades}>
                        {actividades.map((actividad, index) => {
                            const Icono = actividad.icono;

                            return (
                                <div
                                    className={style.actividadItem}
                                    key={`${actividad.titulo}-${index}`}
                                >
                                    <div className={`${style.actividadIcono} ${style[actividad.clase]}`}>
                                        <Icono />
                                    </div>

                                    <div className={style.actividadTexto}>
                                        <strong>{actividad.titulo}</strong>
                                        <span>{actividad.descripcion}</span>
                                        <small>{actividad.fecha}</small>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

            </section>

            <p className={style.nota}>
          
            </p>

        </div>
    );
}

export default Dashboard;
