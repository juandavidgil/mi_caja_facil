
import { motion } from "framer-motion";

import {
    FaClipboardList,
    FaClock,
    FaCheckCircle,
    FaTimesCircle,
    FaEye,
    FaHistory,
    FaFileAlt,
    FaShieldAlt,
    FaSearch
} from "react-icons/fa";

import style from "../css/DashboardAuditor.module.css";

interface Solicitud {
    id: number;
    numero: string;
    nombre: string;
    fecha: string;
    monto: number;
    estado: "En revisión" | "Aprobada" | "Rechazada";
}

function DashboardAuditor() {

    const solicitudes: Solicitud[] = [
        {
            id: 1,
            numero: "SOL-2026-008",
            nombre: "Juan David Gil Alvear",
            fecha: "10/11/2026",
            monto: 850000,
            estado: "En revisión"
        },
        {
            id: 2,
            numero: "SOL-2026-007",
            nombre: "Rocio Del Pilar Cardona Medina",
            fecha: "08/11/2026",
            monto: 1200000,
            estado: "Aprobada"
        },
        {
            id: 3,
            numero: "SOL-2026-006",
            nombre: "Jeyson Mahecha Mahecha",
            fecha: "05/11/2026",
            monto: 450000,
            estado: "Aprobada"
        },
        {
            id: 4,
            numero: "SOL-2026-005",
            nombre: "Juan Diego Rodríguez Borrero",
            fecha: "02/11/2026",
            monto: 300000,
            estado: "Rechazada"
        },
        {
            id: 5,
            numero: "SOL-2026-004",
            nombre: "Lina Margaret Vargas Gomez",
            fecha: "30/10/2026",
            monto: 650000,
            estado: "En revisión"
        }
    ];

    const actividades = [
        {
            id: 1,
            titulo: "Solicitud registrada",
            descripcion: "SOL-2026-008 fue registrada en el sistema.",
            fecha: "10/11/2026",
            icono: <FaFileAlt />,
            tipo: "azul"
        },
        {
            id: 2,
            titulo: "Solicitud aprobada",
            descripcion: "SOL-2026-007 cambió a estado Aprobada.",
            fecha: "09/11/2026",
            icono: <FaCheckCircle />,
            tipo: "verde"
        },
        {
            id: 3,
            titulo: "Solicitud en revisión",
            descripcion: "SOL-2026-008 está pendiente de autorización.",
            fecha: "10/11/2026",
            icono: <FaClock />,
            tipo: "amarillo"
        }
    ];

    const formatearMoneda = (valor: number) =>
        valor.toLocaleString("es-CO", {
            style: "currency",
            currency: "COP",
            maximumFractionDigits: 0
        });

    const totalSolicitudes = solicitudes.length;

    const enRevision = solicitudes.filter(
        (s) => s.estado === "En revisión"
    ).length;

    const aprobadas = solicitudes.filter(
        (s) => s.estado === "Aprobada"
    ).length;

    const rechazadas = solicitudes.filter(
        (s) => s.estado === "Rechazada"
    ).length;

    const verDetalle = (solicitud: Solicitud) => {
        alert(
            `DETALLE DE SOLICITUD\n\n` +
            `Número: ${solicitud.numero}\n` +
            `Nombre: ${solicitud.nombre}\n` +
            `Fecha: ${solicitud.fecha}\n` +
            `Valor: ${formatearMoneda(solicitud.monto)}\n` +
            `Estado: ${solicitud.estado}`
        );
    };

    return (
        <section className={style.container}>

            <div className={style.glowBlue}></div>
            <div className={style.glowCyan}></div>

            {/* ENCABEZADO */}

            <motion.header
                className={style.header}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className={style.headerTexto}>
                    <div className={style.tituloIcono}>
                        <FaShieldAlt />
                    </div>

                    <div>
                        <h1>Dashboard de Auditoría</h1>
                        <p>
                            Consulta, supervisión y trazabilidad
                            de las operaciones de Mi Caja Fácil.
                        </p>
                    </div>
                </div>

                <div className={style.fechaActual}>
                    <span>Panel de consulta</span>
                    <strong>Auditor</strong>
                </div>
            </motion.header>

            {/* INDICADORES */}

            <div className={style.resumenGrid}>

                <motion.div
                    className={style.resumenCard}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    whileHover={{ y: -5 }}
                >
                    <div className={`${style.resumenIcono} ${style.iconoAzul}`}>
                        <FaClipboardList />
                    </div>

                    <div className={style.resumenInfo}>
                        <span>Solicitudes recibidas</span>
                        <strong>{totalSolicitudes}</strong>
                        <small>Total registrado</small>
                    </div>
                </motion.div>

                <motion.div
                    className={style.resumenCard}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ y: -5 }}
                >
                    <div className={`${style.resumenIcono} ${style.iconoAmarillo}`}>
                        <FaClock />
                    </div>

                    <div className={style.resumenInfo}>
                        <span>Pendientes de revisión</span>
                        <strong>{enRevision}</strong>
                        <small>Requieren seguimiento</small>
                    </div>
                </motion.div>

                <motion.div
                    className={style.resumenCard}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ y: -5 }}
                >
                    <div className={`${style.resumenIcono} ${style.iconoVerde}`}>
                        <FaCheckCircle />
                    </div>

                    <div className={style.resumenInfo}>
                        <span>Solicitudes aprobadas</span>
                        <strong>{aprobadas}</strong>
                        <small>Autorizadas</small>
                    </div>
                </motion.div>

                <motion.div
                    className={style.resumenCard}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ y: -5 }}
                >
                    <div className={`${style.resumenIcono} ${style.iconoRojo}`}>
                        <FaTimesCircle />
                    </div>

                    <div className={style.resumenInfo}>
                        <span>Solicitudes rechazadas</span>
                        <strong>{rechazadas}</strong>
                        <small>No autorizadas</small>
                    </div>
                </motion.div>

            </div>

            {/* RESUMEN GENERAL */}

            <motion.div
                className={style.resumenGeneral}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                <div className={style.resumenGeneralIcono}>
                    <FaShieldAlt />
                </div>

                <div className={style.resumenGeneralTexto}>
                    <h2>Resumen de control</h2>
                    <p>
                        Seguimiento general de solicitudes y operaciones registradas.
                    </p>
                </div>

                <div className={style.resumenGeneralDatos}>
                    <div>
                        <span>Total solicitado</span>
                        <strong>
                            {formatearMoneda(
                                solicitudes.reduce(
                                    (total, solicitud) => total + solicitud.monto,
                                    0
                                )
                            )}
                        </strong>
                    </div>

                    <div>
                        <span>Solicitudes revisadas</span>
                        <strong>{aprobadas + rechazadas}</strong>
                    </div>

                    <div>
                        <span>Por revisar</span>
                        <strong className={style.valorPendiente}>
                            {enRevision}
                        </strong>
                    </div>
                </div>
            </motion.div>

            {/* CONTENIDO PRINCIPAL */}

            <div className={style.contenidoGrid}>

                {/* SOLICITUDES RECIENTES */}

                <motion.div
                    className={style.solicitudesCard}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                >

                    <div className={style.cardHeader}>
                        <div>
                            <h2>Solicitudes recientes</h2>
                            <p>
                                Últimas solicitudes registradas en el sistema.
                            </p>
                        </div>

                        <FaClipboardList className={style.cardIcono} />
                    </div>

                    <div className={style.tablaResponsive}>
                        <table>

                            <thead>
                                <tr>
                                    <th>Número</th>
                                    <th>Nombre</th>
                                    <th>Valor</th>
                                    <th>Estado</th>
                                    <th>Detalle</th>
                                </tr>
                            </thead>

                            <tbody>
                                {solicitudes.slice(0, 5).map((solicitud, index) => (

                                    <motion.tr
                                        key={solicitud.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: index * 0.08 }}
                                    >
                                        <td className={style.numero}>
                                            {solicitud.numero}
                                        </td>

                                        <td className={style.nombre}>
                                            {solicitud.nombre}
                                        </td>

                                        <td className={style.valor}>
                                            {formatearMoneda(solicitud.monto)}
                                        </td>

                                        <td>
                                            <span
                                                className={
                                                    solicitud.estado === "Aprobada"
                                                        ? style.aprobada
                                                        : solicitud.estado === "Rechazada"
                                                            ? style.rechazada
                                                            : style.revision
                                                }
                                            >
                                                {solicitud.estado}
                                            </span>
                                        </td>

                                        <td>
                                            <button
                                                type="button"
                                                className={style.btnDetalle}
                                                onClick={() => verDetalle(solicitud)}
                                                title="Consultar detalle"
                                            >
                                                <FaEye />
                                            </button>
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>

                        </table>
                    </div>

                    <div className={style.cardFooter}>
                        <span>
                            Mostrando {solicitudes.length} solicitudes recientes
                        </span>
                    </div>

                </motion.div>

                {/* ACTIVIDAD */}

                <motion.div
                    className={style.actividadCard}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                >

                    <div className={style.cardHeader}>
                        <div>
                            <h2>Actividad reciente</h2>
                            <p>
                                Registro de eventos y movimientos.
                            </p>
                        </div>

                        <FaHistory className={style.cardIcono} />
                    </div>

                    <div className={style.actividades}>

                        {actividades.map((actividad, index) => (

                            <motion.div
                                key={actividad.id}
                                className={style.actividad}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 + index * 0.1 }}
                            >

                                <div
                                    className={`${style.actividadIcono} ${
                                        style[`actividad${actividad.tipo}`]
                                    }`}
                                >
                                    {actividad.icono}
                                </div>

                                <div className={style.actividadContenido}>
                                    <strong>{actividad.titulo}</strong>

                                    <p>{actividad.descripcion}</p>

                                    <small>{actividad.fecha}</small>
                                </div>

                            </motion.div>

                        ))}

                    </div>

                </motion.div>

            </div>

            {/* MENSAJE DE AUDITORÍA */}

            <motion.div
                className={style.mensajeAuditoria}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
            >
                <FaShieldAlt />

                <div>
                    <strong>Acceso de solo consulta</strong>

                    <p>
                        El perfil Auditor permite visualizar, consultar y verificar
                        la información registrada, conservando la trazabilidad
                        de las operaciones.
                    </p>
                </div>
            </motion.div>

        </section>
    );
}

export default DashboardAuditor;
