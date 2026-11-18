
import { motion } from "framer-motion";
import type { Beneficiarios, Ciudades } from "../interfaces/Solicitud";
import {
    FaFileAlt,

    FaUser,
    FaUsers,
    FaInfoCircle,
    FaPaperPlane,
    FaEraser
} from "react-icons/fa";

import style from "../css/NuevaSolicitud.module.css";
import CajaId from "../../../components/CajaId";
import { useNuevaSolicitud } from "../hooks/useNuevaSolicitud";
function NuevaSolicitud() {

    const {
        beneficiarios,
        setBeneficiarios,
        montoSolicitado,
        setMontoSolicitado,
        monedas,
        setMonedas,
        ciudades,
        setCiudades,
        descripcion,
        setDescripcion,
        beneficiarioSeleccionado,
        setBeneficiarioSeleccionado,
        monedaSeleccionada,
        setMonedaSeleccionada,
        ciudadSeleccionada,
        setCiudadSeleccionada,
        loading
    } = useNuevaSolicitud();


    const formatearMonto = (valor: string) => {
    const soloNumeros = valor.replace(/\D/g, "");

    if (!soloNumeros) return "";

    return Number(soloNumeros).toLocaleString("es-CO");
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

            <div>

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
                            <label htmlFor="ciudad_id">
                                Ciudad *
                            </label>

                            <select
                                id="ciudad_id"
                                name="ciudad_id"
                                value={ciudadSeleccionada}
                                onChange={(e) => {setCiudadSeleccionada(e.target.value)}}
                                required
                            >
                                <option value="">
                                    Selecciona una ciudad
                                </option>

                                {ciudades.map((ciudad: Ciudades) => (
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
                                value={montoSolicitado}
                                onChange={(e) => {setMontoSolicitado(e.target.value)}}
                                required
                            />

                            {montoSolicitado &&
                                Number(montoSolicitado) > 0 && (
                                    <small className={style.valorTexto}>
                                        ${formatearMonto(montoSolicitado)} COP
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
                            value={descripcion}
                            onChange={(e) => {setDescripcion(e.target.value)}}
                            required
                        />

                        <small>
                            {descripcion.length}/1000 caracteres
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
                            value={beneficiarioSeleccionado}
                            onChange={(e) => {setBeneficiarioSeleccionado(e.target.value)}}
                            required
                        >
                            <option value="">
                                Selecciona un beneficiario
                            </option>

                            {beneficiarios.map((beneficiario: Beneficiarios) => (
                                <option key={beneficiario.id} value={beneficiario.id}>
                                    {beneficiario.nombreCompleto}
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


                {/* BOTONES */}

                <div className={style.formFooter}>
                    <button
                        type="button"
                        className={style.btnCancelar}
                        /* onClick={limpiarFormulario} */
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

            </div>
        </section>
    );
}

export default NuevaSolicitud;
