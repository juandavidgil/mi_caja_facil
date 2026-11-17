
import { useState } from "react";
import { motion } from "framer-motion";

import {
    FaSearch,
    FaFileAlt,
    FaClock,
    FaCheckCircle,
    FaTimesCircle,
    FaEye
} from "react-icons/fa";

import style from "../css/MisSolicitudes.module.css";
import CajaId from "../../../components/CajaId";

interface Solicitud {
    id: number;
    numero: string;
    nombre: string;
    fecha: string;
    monto: number;
    estado: "En revisión" | "Aprobada" | "Rechazada";
}

function MisSolicitudes() {

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

    const [busqueda, setBusqueda] = useState("");
    const [filtroEstado, setFiltroEstado] = useState("Todas");

    // FORMATO DE MONEDA

    const formatearMoneda = (valor: number) =>
        valor.toLocaleString("es-CO", {
            style: "currency",
            currency: "COP",
            maximumFractionDigits: 0
        });

    // FILTRAR SOLICITUDES

    const solicitudesFiltradas = solicitudes.filter((solicitud) => {

        const coincideBusqueda =
            solicitud.numero.toLowerCase().includes(busqueda.toLowerCase()) ||
            solicitud.nombre.toLowerCase().includes(busqueda.toLowerCase());

        const coincideEstado =
            filtroEstado === "Todas" ||
            solicitud.estado === filtroEstado;

        return coincideBusqueda && coincideEstado;
    });

    // CONTADORES

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

    // VER DETALLE

    const verSolicitud = (solicitud: Solicitud) => {
        alert(
            `Solicitud: ${solicitud.numero}\n` +
            `Nombre: ${solicitud.nombre}\n` +
            `Estado: ${solicitud.estado}\n` +
            `Fecha: ${solicitud.fecha}\n` +
            `Valor: ${formatearMoneda(solicitud.monto)}`
        );
    };

    return (
        <section className={style.container}>

            <div className={style.glowBlue}></div>
            <div className={style.glowGreen}></div>

            {/* ENCABEZADO */}

            <motion.header
                className={style.header}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div>
                    <h1>Mis Solicitudes</h1>
                    <p>
                        Consulta el estado y seguimiento de tus solicitudes.
                    </p>
                </div>

                <CajaId />
            </motion.header>

            {/* RESUMEN DE SOLICITUDES */}

            <div className={style.resumenGrid}>

                <motion.div
                    className={style.resumenCard}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <div className={`${style.resumenIcono} ${style.iconoAzul}`}>
                        <FaFileAlt />
                    </div>

                    <div>
                        <span>Solicitudes realizadas</span>
                        <strong>{totalSolicitudes}</strong>
                        <small>Total de solicitudes</small>
                    </div>
                </motion.div>

                <motion.div
                    className={style.resumenCard}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className={`${style.resumenIcono} ${style.iconoAmarillo}`}>
                        <FaClock />
                    </div>

                    <div>
                        <span>En revisión</span>
                        <strong>{enRevision}</strong>
                        <small>Pendientes de autorización</small>
                    </div>
                </motion.div>

                <motion.div
                    className={style.resumenCard}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className={`${style.resumenIcono} ${style.iconoVerde}`}>
                        <FaCheckCircle />
                    </div>

                    <div>
                        <span>Aprobadas</span>
                        <strong>{aprobadas}</strong>
                        <small>Solicitudes autorizadas</small>
                    </div>
                </motion.div>

                <motion.div
                    className={style.resumenCard}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className={`${style.resumenIcono} ${style.iconoRojo}`}>
                        <FaTimesCircle />
                    </div>

                    <div>
                        <span>Rechazadas</span>
                        <strong>{rechazadas}</strong>
                        <small>Solicitudes no aprobadas</small>
                    </div>
                </motion.div>

            </div>

            {/* TABLA DE SOLICITUDES */}

            <motion.div
                className={style.tableCard}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >

                <div className={style.cardHeader}>
                    <div>
                        <h2>Historial de solicitudes</h2>
                        <p>
                            Consulta todas las solicitudes que has registrado.
                        </p>
                    </div>

                    <FaFileAlt className={style.headerIcon} />
                </div>

                {/* FILTROS */}

                <div className={style.actions}>

                    <div className={style.filters}>

                        {["Todas", "En revisión", "Aprobada", "Rechazada"].map(
                            (estado) => (
                                <button
                                    key={estado}
                                    type="button"
                                    className={
                                        filtroEstado === estado
                                            ? style.active
                                            : ""
                                    }
                                    onClick={() => setFiltroEstado(estado)}
                                >
                                    {estado}
                                </button>
                            )
                        )}

                    </div>

                    <div className={style.searchBox}>
                        <FaSearch />

                        <input
                            type="text"
                            placeholder="Buscar por nombre o número..."
                            value={busqueda}
                            onChange={(e) => setBusqueda(e.target.value)}
                        />
                    </div>

                </div>

                {/* TABLA */}

                <div className={style.tableResponsive}>
                    <table>

                        <thead>
                            <tr>
                                <th>Número</th>
                                <th>Nombre</th>
                                <th>Fecha</th>
                                <th>Valor solicitado</th>
                                <th>Estado</th>
                                <th>Detalle</th>
                            </tr>
                        </thead>

                        <tbody>

                            {solicitudesFiltradas.map((solicitud, index) => (

                                <motion.tr
                                    key={solicitud.id}
                                    initial={{ opacity: 0, x: -15 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >

                                    <td className={style.numero}>
                                        {solicitud.numero}
                                    </td>

                                    <td className={style.concepto}>
                                        {solicitud.nombre}
                                    </td>

                                    <td>{solicitud.fecha}</td>

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
                                            title="Ver detalle"
                                            onClick={() => verSolicitud(solicitud)}
                                        >
                                            <FaEye />
                                        </button>
                                    </td>

                                </motion.tr>

                            ))}

                            {solicitudesFiltradas.length === 0 && (
                                <tr>
                                    <td colSpan={6} className={style.sinResultados}>
                                        No se encontraron solicitudes.
                                    </td>
                                </tr>
                            )}

                        </tbody>

                    </table>
                </div>

                <div className={style.tableFooter}>
                    Mostrando {solicitudesFiltradas.length} de {totalSolicitudes} solicitudes
                </div>

            </motion.div>

        </section>
    );
}

export default MisSolicitudes;
