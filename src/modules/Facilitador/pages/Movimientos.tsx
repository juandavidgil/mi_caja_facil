import { motion } from "framer-motion";
import {
    FaSearch,
    FaFileDownload,
    FaFilePdf,
    FaArrowDown,
    FaArrowUp
} from "react-icons/fa";

import style from "../css/Movimientos.module.css";
import CajaId from "../../../components/CajaId";

function Movimientos() {

    const movimientos = [
        {
            id: 1,
            concepto: "Consignación",
            numero: "TRX-001",
            tipo: "Ingreso",
            estado: "Aprobado",
            fecha: "15/06/2026",
            valor: "+ $500.000"
        },
        {
            id: 2,
            concepto: "Compra de útiles",
            numero: "TRX-002",
            tipo: "Gasto",
            estado: "Aprobado",
            fecha: "14/06/2026",
            valor: "- $120.000"
        },
        {
            id: 3,
            concepto: "Pago proveedor",
            numero: "TRX-003",
            tipo: "Gasto",
            estado: "Pendiente",
            fecha: "13/06/2026",
            valor: "- $80.000"
        }
    ];

    return (
        <section className={style.container}>

            <div className={style.glowBlue}></div>
            <div className={style.glowGreen}></div>

            <motion.div
                className={style.header}
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >

                <CajaId />
            </motion.div>

            <motion.div
                className={style.informeCard}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >

                <div className={style.cardTitle}>
                    <h2>Descargar Informe</h2>
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
                        whileHover={{ scale: 1.05, y: -2}}
                        whileTap={{ scale: 0.95 }}
                    >
                        Descargar
                    </motion.button>

                </div>

            </motion.div>

            <motion.div
                className={style.actions}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >

                <div className={style.filters}>

                    <motion.button
                        whileHover={{ y: -2 }}
                        className={style.active}
                    >
                        Todas
                    </motion.button>

                    <motion.button whileHover={{ y: -2 }}>
                        Ingresos
                    </motion.button>

                    <motion.button whileHover={{ y: -2 }}>
                        Gastos
                    </motion.button>

                </div>

                <div className={style.searchBox}>
                    <FaSearch />
                    <input
                        type="text"
                        placeholder="Buscar movimiento..."
                    />
                </div>

            </motion.div>

            <motion.div
                className={style.tableCard}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >

                <table>

                    <thead>
                        <tr>
                            <th>Concepto</th>
                            <th>No.</th>
                            <th>Tipo</th>
                            <th>Estado</th>
                            <th>Fecha</th>
                            <th>Valor</th>
                            <th>Soporte</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            movimientos.map((mov, index) => (

                                <motion.tr
                                    key={mov.id}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <td>{mov.concepto}</td>
                                    <td>{mov.numero}</td>
                                    <td>
                                        <span
                                            className={
                                                mov.tipo === "Ingreso"
                                                    ? style.ingreso
                                                    : style.gasto
                                            }
                                        >
                                            {
                                                mov.tipo === "Ingreso"
                                                    ? <FaArrowDown />
                                                    : <FaArrowUp />
                                            }
                                            {mov.tipo}
                                        </span>
                                    </td>

                                    <td>
                                        <span
                                            className={
                                                mov.estado === "Aprobado"
                                                    ? style.aprobado
                                                    : style.pendiente
                                            }
                                        >
                                            {mov.estado}
                                        </span>
                                    </td>
                                    <td>{mov.fecha}</td>

                                    <td
                                        className={
                                            mov.tipo === "Ingreso"
                                                ? style.valorPositivo
                                                : style.valorNegativo
                                        }
                                    >
                                        {mov.valor}
                                    </td>

                                    <td>
                                        <FaFilePdf
                                            className={style.pdf}
                                        />
                                    </td>
                                </motion.tr>
                           ))
                        }
                    </tbody>
                </table>
            </motion.div>
        </section>
    );
}

export default Movimientos;