
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";

import {
    FaFileAlt,
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaMoneyBillWave,
    FaUser,
    FaUsers,
    FaInfoCircle,
    FaPaperPlane,
    FaEraser
} from "react-icons/fa";

import style from "../css/NuevaSolicitud.module.css";
import CajaId from "../../../components/CajaId";

/*
 * IMPORTANTE:
 * Estos catálogos deben cargarse desde la base de datos.
 * No agregues IDs ficticios: los valores deben corresponder
 * a los registros reales de tus tablas relacionadas.
 */

interface OpcionCatalogo {
    id: number;
    nombre: string;
}

// Reemplazar posteriormente por los datos de los catálogos.
const tiposSolicitud: OpcionCatalogo[] = [];
const ciudades: OpcionCatalogo[] = [];
const beneficiarios: OpcionCatalogo[] = [];

interface FormularioSolicitud {
    tipo_solicitud_id: string;
    fecha_solicitud: string;
    ciudad_id: string;
    descripcion: string;
    monto_solicitado: string;
    beneficiario: string;
}

function NuevaSolicitud() {

    const [formulario, setFormulario] = useState<FormularioSolicitud>({
        tipo_solicitud_id: "",
        fecha_solicitud: new Date().toLocaleDateString("en-CA"),
        ciudad_id: "",
        descripcion: "",
        monto_solicitado: "",
        beneficiario: ""
    });

    const [mensaje, setMensaje] = useState("");
    const [tipoMensaje, setTipoMensaje] = useState<"error" | "success">("error");

    const manejarCambio = (
        e: ChangeEvent<
            HTMLInputElement |
            HTMLTextAreaElement |
            HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;

        setFormulario((anterior) => ({
            ...anterior,
            [name]: value
        }));

        setMensaje("");
    };

    const formatearValor = (valor: string) => {
        if (!valor) return "";

        return Number(valor).toLocaleString("es-CO");
    };

    const limpiarFormulario = () => {
        setFormulario({
            tipo_solicitud_id: "",
            fecha_solicitud: new Date().toLocaleDateString("en-CA"),
            ciudad_id: "",
            descripcion: "",
            monto_solicitado: "",
            beneficiario: ""
        });

        setMensaje("");
    };

    const manejarEnvio = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (Number(formulario.monto_solicitado) <= 0) {
            setTipoMensaje("error");
            setMensaje("El monto solicitado debe ser mayor que cero.");
            return;
        }

        /*
         * Los campos id, created_at, numero_solicitud,
         * solicitante, moneda_id y estado_trx_id deben
         * ser asignados por el backend o según los catálogos.
         */

        const datosSolicitud = {
            tipo_solicitud_id: Number(formulario.tipo_solicitud_id),
            numero_solicitud: null, // Generar en backend
            fecha_solicitud: formulario.fecha_solicitud,
            ciudad_id: Number(formulario.ciudad_id),
            descripcion: formulario.descripcion.trim(),
            monto_solicitado: Number(formulario.monto_solicitado),
            beneficiario: Number(formulario.beneficiario),

            // Pendientes de asignación desde autenticación/configuración:
            solicitante: null,
            moneda_id: null,
            estado_trx_id: null
        };

        console.log("Datos preparados para Transaccion:", datosSolicitud);

        setTipoMensaje("success");
        setMensaje(
            "Formulario validado. Los datos están listos para conectarse al backend."
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
                <div className={style.headerInfo}>
                    <div className={style.headerText}>
                        <h1>Nueva Solicitud</h1>
                        <p>
                            Registra y envía una solicitud de recursos.
                        </p>
                    </div>

                    <CajaId />
                </div>
            </motion.header>

            <form onSubmit={manejarEnvio}>

                {/* TARJETA 1: INFORMACIÓN GENERAL */}

                <motion.section
                    className={style.formSection}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                >
                    <div className={style.sectionTitle}>
                        <div className={style.titleIcon}>
                            <FaFileAlt />
                        </div>

                        <div>
                            <h2>Información de la solicitud</h2>
                            <p>
                                Completa los datos principales de tu solicitud.
                            </p>
                        </div>
                    </div>

                    <div className={style.infoNotice}>
                        <FaInfoCircle />
                        <span>
                            Los campos marcados con (*) son obligatorios.
                        </span>
                    </div>

                    <div className={style.formGrid}>

                        <div className={style.formGroup}>
                            <label htmlFor="tipo_solicitud_id">
                                Tipo de solicitud *
                            </label>

                            <select
                                id="tipo_solicitud_id"
                                name="tipo_solicitud_id"
                                value={formulario.tipo_solicitud_id}
                                onChange={manejarCambio}
                                required
                            >
                                <option value="">
                                    Selecciona un tipo de solicitud
                                </option>

                                {tiposSolicitud.map((tipo) => (
                                    <option key={tipo.id} value={tipo.id}>
                                        {tipo.nombre}
                                    </option>
                                ))}
                            </select>

                            {tiposSolicitud.length === 0 && (
                                <small className={style.ayuda}>
                                    Pendiente conectar el catálogo de tipos.
                                </small>
                            )}
                        </div>

                        <div className={style.formGroup}>
                            <label htmlFor="fecha_solicitud">
                                Fecha de solicitud *
                            </label>

                            <input
                                id="fecha_solicitud"
                                type="date"
                                name="fecha_solicitud"
                                value={formulario.fecha_solicitud}
                                onChange={manejarCambio}
                                required
                            />
                        </div>

                        <div className={style.formGroup}>
                            <label htmlFor="ciudad_id">
                                Ciudad *
                            </label>

                            <select
                                id="ciudad_id"
                                name="ciudad_id"
                                value={formulario.ciudad_id}
                                onChange={manejarCambio}
                                required
                            >
                                <option value="">
                                    Selecciona una ciudad
                                </option>

                                {ciudades.map((ciudad) => (
                                    <option key={ciudad.id} value={ciudad.id}>
                                        {ciudad.nombre}
                                    </option>
                                ))}
                            </select>

                            {ciudades.length === 0 && (
                                <small className={style.ayuda}>
                                    Pendiente conectar el catálogo de ciudades.
                                </small>
                            )}
                        </div>

                        <div className={style.formGroup}>
                            <label htmlFor="monto_solicitado">
                                Monto solicitado (COP) *
                            </label>

                            <input
                                id="monto_solicitado"
                                type="number"
                                name="monto_solicitado"
                                min="1"
                                step="1"
                                placeholder="Ej. 500000"
                                value={formulario.monto_solicitado}
                                onChange={manejarCambio}
                                required
                            />

                            {formulario.monto_solicitado &&
                                Number(formulario.monto_solicitado) > 0 && (
                                    <small className={style.valorTexto}>
                                        ${formatearValor(formulario.monto_solicitado)} COP
                                    </small>
                                )}
                        </div>

                    </div>
                </motion.section>

                {/* TARJETA 2: DESCRIPCIÓN */}

                <motion.section
                    className={style.formSection}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.45 }}
                >
                    <div className={style.sectionTitle}>
                        <div className={style.titleIcon}>
                            <FaInfoCircle />
                        </div>

                        <div>
                            <h2>Descripción de la solicitud</h2>
                            <p>
                                Explica qué recursos necesitas y para qué los utilizarás.
                            </p>
                        </div>
                    </div>

                    <div className={style.formGroupFull}>
                        <label htmlFor="descripcion">
                            Descripción *
                        </label>

                        <textarea
                            id="descripcion"
                            name="descripcion"
                            rows={5}
                            maxLength={1000}
                            placeholder="Describe detalladamente los recursos que necesitas..."
                            value={formulario.descripcion}
                            onChange={manejarCambio}
                            required
                        />

                        <small>
                            {formulario.descripcion.length}/1000 caracteres
                        </small>
                    </div>
                </motion.section>

                {/* TARJETA 3: BENEFICIARIO */}

                <motion.section
                    className={style.formSection}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.45 }}
                >
                    <div className={style.sectionTitle}>
                        <div className={style.titleIcon}>
                            <FaUsers />
                        </div>

                        <div>
                            <h2>Información del beneficiario</h2>
                            <p>
                                Selecciona quién recibirá los recursos solicitados.
                            </p>
                        </div>
                    </div>

                    <div className={style.formGroup}>
                        <label htmlFor="beneficiario">
                            Beneficiario *
                        </label>

                        <select
                            id="beneficiario"
                            name="beneficiario"
                            value={formulario.beneficiario}
                            onChange={manejarCambio}
                            required
                        >
                            <option value="">
                                Selecciona un beneficiario
                            </option>

                            {beneficiarios.map((persona) => (
                                <option key={persona.id} value={persona.id}>
                                    {persona.nombre}
                                </option>
                            ))}
                        </select>

                        {beneficiarios.length === 0 && (
                            <small className={style.ayuda}>
                                Pendiente conectar el catálogo de beneficiarios.
                            </small>
                        )}
                    </div>
                </motion.section>

                {/* INFORMACIÓN DEL SOLICITANTE */}

                <motion.section
                    className={style.solicitanteCard}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.45 }}
                >
                    <div className={style.solicitanteIcon}>
                        <FaUser />
                    </div>

                    <div>
                        <h3>Solicitante</h3>
                        <p>
                            El usuario que inició sesión quedará registrado
                            automáticamente como solicitante.
                        </p>
                    </div>
                </motion.section>

                {/* MENSAJE */}

                {mensaje && (
                    <motion.div
                        className={`${style.mensaje} ${
                            tipoMensaje === "success"
                                ? style.mensajeExito
                                : style.mensajeError
                        }`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <FaInfoCircle />
                        {mensaje}
                    </motion.div>
                )}

                {/* BOTONES */}

                <div className={style.formFooter}>
                    <button
                        type="button"
                        className={style.btnCancelar}
                        onClick={limpiarFormulario}
                    >
                        <FaEraser />
                        Limpiar formulario
                    </button>

                    <motion.button
                        type="submit"
                        className={style.btnGuardar}
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <FaPaperPlane />
                        Enviar solicitud
                    </motion.button>
                </div>

            </form>
        </section>
    );
}

export default NuevaSolicitud;
