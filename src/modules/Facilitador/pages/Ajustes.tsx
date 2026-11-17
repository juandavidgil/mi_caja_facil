
import { useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

import style from "../css/Ajustes.module.css";
import usuario from "../../../assets/usuario.png";

import {
    FaUser,
    FaShieldAlt,
    FaBell,
    FaCamera,
    FaSave,
    FaLock,
    FaEnvelope,
    FaCheckCircle,
    FaClipboardList,
    FaTimes
} from "react-icons/fa";

import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

type Pestaña = "perfil" | "seguridad" | "notificaciones";

function Ajustes() {

    const [tabActiva, setTabActiva] = useState<Pestaña>("perfil");

    const [foto, setFoto] = useState<string>(usuario);
    const [archivoFoto, setArchivoFoto] = useState<File | null>(null);
    const inputFotoRef = useRef<HTMLInputElement>(null);

    const [perfil, setPerfil] = useState({
        nombre: "",
        apellido: "",
        correo: "",
        fechaNacimiento: "",
        direccion: "",
        cargo: ""
    });

    const [seguridad, setSeguridad] = useState({
        dobleAuth: false,
        contrasenaActual: "",
        contrasenaNueva: "",
        confirmarContrasena: ""
    });

    const [notificaciones, setNotificaciones] = useState({
        solicitudes: true,
        aprobaciones: true,
        rechazos: true,
        correo: true
    });

    const [mensaje, setMensaje] = useState("");
    const [tipoMensaje, setTipoMensaje] = useState<"exito" | "error">("exito");

    // =========================================
    // ACTUALIZAR INFORMACIÓN DEL PERFIL
    // =========================================

    const manejarPerfil = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setPerfil((anterior) => ({
            ...anterior,
            [name]: value
        }));

        setMensaje("");
    };

    // =========================================
    // CAMBIAR FOTOGRAFÍA
    // =========================================

    const manejarFoto = (e: ChangeEvent<HTMLInputElement>) => {
        const archivo = e.target.files?.[0];

        if (!archivo) return;

        const formatosPermitidos = [
            "image/jpeg",
            "image/png",
            "image/webp"
        ];

        if (!formatosPermitidos.includes(archivo.type)) {
            setTipoMensaje("error");
            setMensaje("Selecciona una imagen JPG, PNG o WEBP.");
            return;
        }

        if (archivo.size > 5 * 1024 * 1024) {
            setTipoMensaje("error");
            setMensaje("La imagen no puede superar los 5 MB.");
            return;
        }

        if (foto !== usuario) {
            URL.revokeObjectURL(foto);
        }

        const nuevaFoto = URL.createObjectURL(archivo);

        setFoto(nuevaFoto);
        setArchivoFoto(archivo);
        setMensaje("");
    };

    const eliminarFoto = () => {
        if (foto !== usuario) {
            URL.revokeObjectURL(foto);
        }

        setFoto(usuario);
        setArchivoFoto(null);

        if (inputFotoRef.current) {
            inputFotoRef.current.value = "";
        }
    };

    // =========================================
    // GUARDAR PERFIL
    // =========================================

    const guardarPerfil = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("Información del perfil:", perfil);
        console.log("Fotografía seleccionada:", archivoFoto);

        setTipoMensaje("exito");
        setMensaje("Información validada. Lista para guardar en el sistema.");
    };

    // =========================================
    // CAMBIAR CONTRASEÑA
    // =========================================

    const manejarSeguridad = (
        e: ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;

        setSeguridad((anterior) => ({
            ...anterior,
            [name]: value
        }));

        setMensaje("");
    };

    const cambiarContrasena = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (seguridad.contrasenaNueva.length < 8) {
            setTipoMensaje("error");
            setMensaje("La nueva contraseña debe tener al menos 8 caracteres.");
            return;
        }

        if (seguridad.contrasenaNueva !== seguridad.confirmarContrasena) {
            setTipoMensaje("error");
            setMensaje("Las contraseñas nuevas no coinciden.");
            return;
        }

        console.log("Solicitud de cambio de contraseña preparada.");

        setTipoMensaje("exito");
        setMensaje("Validación correcta. El cambio debe procesarse en el servidor.");

        setSeguridad((anterior) => ({
            ...anterior,
            contrasenaActual: "",
            contrasenaNueva: "",
            confirmarContrasena: ""
        }));
    };

    // =========================================
    // NOTIFICACIONES
    // =========================================

    const cambiarNotificacion = (
        campo: keyof typeof notificaciones
    ) => {
        setNotificaciones((anterior) => ({
            ...anterior,
            [campo]: !anterior[campo]
        }));
    };

    const guardarNotificaciones = () => {
        console.log("Preferencias de notificaciones:", notificaciones);

        setTipoMensaje("exito");
        setMensaje("Preferencias actualizadas en esta sesión.");
    };

    // =========================================
    // MENSAJE
    // =========================================

    const mensajeUI = mensaje && (
        <motion.div
            className={`${style.mensaje} ${
                tipoMensaje === "exito"
                    ? style.mensajeExito
                    : style.mensajeError
            }`}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
        >
            {tipoMensaje === "exito" ? <FaCheckCircle /> : <FaTimes />}
            <span>{mensaje}</span>
        </motion.div>
    );

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
                    <h1>Configuración de mi cuenta</h1>
                    <p>
                        Administra tu información personal y las preferencias de tu cuenta.
                    </p>
                </div>
            </motion.header>

            {/* CONTENEDOR PRINCIPAL */}

            <div className={style.layout}>

                {/* TARJETA LATERAL DEL PERFIL */}

                <motion.aside
                    className={style.profileCard}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className={style.profilePhotoContainer}>

                        <img
                            src={foto}
                            alt="Fotografía del usuario"
                            className={style.profilePhoto}
                        />

                        <button
                            type="button"
                            className={style.photoButton}
                            onClick={() => inputFotoRef.current?.click()}
                            aria-label="Cambiar fotografía"
                        >
                            <FaCamera />
                        </button>

                    </div>

                    <input
                        ref={inputFotoRef}
                        type="file"
                        accept="image/png,image/jpeg,image/webp"
                        onChange={manejarFoto}
                        className={style.hiddenInput}
                    />

                    <h2>
                        {perfil.nombre || "Mi perfil"}{" "}
                        {perfil.apellido}
                    </h2>

                    <p className={style.profileEmail}>
                        {perfil.correo || "Actualiza tu correo electrónico"}
                    </p>

                    <span className={style.profileStatus}>
                        <span></span>
                        Cuenta activa
                    </span>

                    {archivoFoto && (
                        <button
                            type="button"
                            className={style.removePhoto}
                            onClick={eliminarFoto}
                        >
                            Restaurar fotografía
                        </button>
                    )}

                    <div className={style.profileDivider}></div>

                    <div className={style.profileHelp}>
                        <FaShieldAlt />
                        <p>
                            Mantén tus datos actualizados y protege el acceso
                            a tu cuenta.
                        </p>
                    </div>
                </motion.aside>

                {/* CONTENIDO DE CONFIGURACIÓN */}

                <main className={style.settingsContent}>

                    {/* PESTAÑAS */}

                    <div className={style.tabs}>

                        <button
                            type="button"
                            className={tabActiva === "perfil" ? style.tabActive : style.tab}
                            onClick={() => {
                                setTabActiva("perfil");
                                setMensaje("");
                            }}
                        >
                            <FaUser />
                            Mi perfil
                        </button>

                        <button
                            type="button"
                            className={tabActiva === "seguridad" ? style.tabActive : style.tab}
                            onClick={() => {
                                setTabActiva("seguridad");
                                setMensaje("");
                            }}
                        >
                            <FaShieldAlt />
                            Seguridad
                        </button>

                        <button
                            type="button"
                            className={tabActiva === "notificaciones" ? style.tabActive : style.tab}
                            onClick={() => {
                                setTabActiva("notificaciones");
                                setMensaje("");
                            }}
                        >
                            <FaBell />
                            Notificaciones
                        </button>

                    </div>

                    {mensajeUI}

                    <AnimatePresence mode="wait">

                        {/* =================================
                            PESTAÑA PERFIL
                        ================================= */}

                        {tabActiva === "perfil" && (

                            <motion.div
                                key="perfil"
                                className={style.sectionCard}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                            >

                                <div className={style.sectionHeader}>
                                    <div className={style.sectionIcon}>
                                        <FaUser />
                                    </div>

                                    <div>
                                        <h2>Información personal</h2>
                                        <p>
                                            Actualiza tus datos de identificación y contacto.
                                        </p>
                                    </div>
                                </div>

                                <form onSubmit={guardarPerfil}>

                                    <div className={style.formGrid}>

                                        <TextField
                                            name="nombre"
                                            label="Nombre"
                                            value={perfil.nombre}
                                            onChange={manejarPerfil}
                                            fullWidth
                                            required
                                        />

                                        <TextField
                                            name="apellido"
                                            label="Apellido"
                                            value={perfil.apellido}
                                            onChange={manejarPerfil}
                                            fullWidth
                                            required
                                        />

                                        <TextField
                                            name="correo"
                                            label="Correo electrónico"
                                            type="email"
                                            value={perfil.correo}
                                            onChange={manejarPerfil}
                                            fullWidth
                                            required
                                        />

                                        <TextField
                                            name="fechaNacimiento"
                                            label="Fecha de nacimiento"
                                            type="date"
                                            value={perfil.fechaNacimiento}
                                            onChange={manejarPerfil}
                                            fullWidth
                                            slotProps={{
                                                inputLabel: { shrink: true }
                                            }}
                                        />

                                        <TextField
                                            name="direccion"
                                            label="Dirección"
                                            value={perfil.direccion}
                                            onChange={manejarPerfil}
                                            fullWidth
                                        />

                                        <FormControl fullWidth>
                                            <InputLabel id="cargo-label">
                                                Cargo
                                            </InputLabel>

                                            <Select
                                                labelId="cargo-label"
                                                name="cargo"
                                                value={perfil.cargo}
                                                label="Cargo"
                                                onChange={(e) => {
                                                    setPerfil((anterior) => ({
                                                        ...anterior,
                                                        cargo: e.target.value
                                                    }));
                                                }}
                                            >
                                                <MenuItem value="Solicitante">
                                                    Solicitante
                                                </MenuItem>

                                                <MenuItem value="Beneficiario">
                                                    Beneficiario
                                                </MenuItem>

                                                <MenuItem value="Responsable de caja">
                                                    Responsable de caja
                                                </MenuItem>

                                                <MenuItem value="Tesorería">
                                                    Tesorería
                                                </MenuItem>

                                                <MenuItem value="Auditoría">
                                                    Auditoría
                                                </MenuItem>
                                            </Select>
                                        </FormControl>

                                    </div>

                                    <div className={style.formFooter}>
                                        <button
                                            type="submit"
                                            className={style.primaryButton}
                                        >
                                            <FaSave />
                                            Guardar cambios
                                        </button>
                                    </div>

                                </form>

                            </motion.div>
                        )}

                        {/* =================================
                            PESTAÑA SEGURIDAD
                        ================================= */}

                        {tabActiva === "seguridad" && (

                            <motion.div
                                key="seguridad"
                                className={style.sectionCard}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                            >

                                <div className={style.sectionHeader}>
                                    <div className={style.sectionIcon}>
                                        <FaLock />
                                    </div>

                                    <div>
                                        <h2>Seguridad de la cuenta</h2>
                                        <p>
                                            Administra tu contraseña y protección de acceso.
                                        </p>
                                    </div>
                                </div>

                                <div className={style.securityNotice}>
                                    <FaShieldAlt />
                                    <p>
                                        Utiliza una contraseña segura y evita compartirla
                                        con otras personas.
                                    </p>
                                </div>

                                <div className={style.twoFactorCard}>
                                    <div>
                                        <h3>Autenticación en dos factores</h3>
                                        <p>
                                            Añade una capa adicional de protección a tu cuenta.
                                        </p>
                                    </div>

                                    <Switch
                                        checked={seguridad.dobleAuth}
                                        onChange={(e) => {
                                            setSeguridad((anterior) => ({
                                                ...anterior,
                                                dobleAuth: e.target.checked
                                            }));
                                        }}
                                        color="success"
                                    />
                                </div>

                                <form onSubmit={cambiarContrasena}>

                                    <h3 className={style.subtitulo}>
                                        Cambiar contraseña
                                    </h3>

                                    <div className={style.passwordGrid}>

                                        <TextField
                                            label="Contraseña actual"
                                            type="password"
                                            name="contrasenaActual"
                                            value={seguridad.contrasenaActual}
                                            onChange={manejarSeguridad}
                                            fullWidth
                                            required
                                        />

                                        <TextField
                                            label="Nueva contraseña"
                                            type="password"
                                            name="contrasenaNueva"
                                            value={seguridad.contrasenaNueva}
                                            onChange={manejarSeguridad}
                                            fullWidth
                                            required
                                            slotProps={{
                                                htmlInput: { minLength: 8 }
                                            }}
                                        />

                                        <TextField
                                            label="Confirmar nueva contraseña"
                                            type="password"
                                            name="confirmarContrasena"
                                            value={seguridad.confirmarContrasena}
                                            onChange={manejarSeguridad}
                                            fullWidth
                                            required
                                        />

                                    </div>

                                    <p className={style.passwordHelp}>
                                        La contraseña debe tener al menos 8 caracteres.
                                    </p>

                                    <div className={style.formFooter}>
                                        <button
                                            type="submit"
                                            className={style.primaryButton}
                                        >
                                            <FaLock />
                                            Actualizar contraseña
                                        </button>
                                    </div>

                                </form>

                            </motion.div>
                        )}

                        {/* =================================
                            PESTAÑA NOTIFICACIONES
                        ================================= */}

                        {tabActiva === "notificaciones" && (

                            <motion.div
                                key="notificaciones"
                                className={style.sectionCard}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                            >

                                <div className={style.sectionHeader}>
                                    <div className={style.sectionIcon}>
                                        <FaBell />
                                    </div>

                                    <div>
                                        <h2>Preferencias de notificaciones</h2>
                                        <p>
                                            Selecciona qué novedades deseas recibir.
                                        </p>
                                    </div>
                                </div>

                                <div className={style.notificationList}>

                                    <div className={style.notificationItem}>
                                        <div className={style.notificationIcon}>
                                            <FaClipboardList />
                                        </div>

                                        <div className={style.notificationText}>
                                            <h3>Solicitudes registradas</h3>
                                            <p>
                                                Recibe avisos cuando se registre una solicitud.
                                            </p>
                                        </div>

                                        <Switch
                                            checked={notificaciones.solicitudes}
                                            onChange={() => cambiarNotificacion("solicitudes")}
                                            color="success"
                                        />
                                    </div>

                                    <div className={style.notificationItem}>
                                        <div className={style.notificationIcon}>
                                            <FaCheckCircle />
                                        </div>

                                        <div className={style.notificationText}>
                                            <h3>Solicitudes aprobadas</h3>
                                            <p>
                                                Recibe notificaciones cuando una solicitud sea aprobada.
                                            </p>
                                        </div>

                                        <Switch
                                            checked={notificaciones.aprobaciones}
                                            onChange={() => cambiarNotificacion("aprobaciones")}
                                            color="success"
                                        />
                                    </div>

                                    <div className={style.notificationItem}>
                                        <div className={style.notificationIcon}>
                                            <FaTimes />
                                        </div>

                                        <div className={style.notificationText}>
                                            <h3>Solicitudes rechazadas</h3>
                                            <p>
                                                Recibe avisos sobre solicitudes rechazadas.
                                            </p>
                                        </div>

                                        <Switch
                                            checked={notificaciones.rechazos}
                                            onChange={() => cambiarNotificacion("rechazos")}
                                            color="success"
                                        />
                                    </div>

                                    <div className={style.notificationItem}>
                                        <div className={style.notificationIcon}>
                                            <FaEnvelope />
                                        </div>

                                        <div className={style.notificationText}>
                                            <h3>Notificaciones por correo</h3>
                                            <p>
                                                Recibe las notificaciones en tu correo electrónico.
                                            </p>
                                        </div>

                                        <Switch
                                            checked={notificaciones.correo}
                                            onChange={() => cambiarNotificacion("correo")}
                                            color="success"
                                        />
                                    </div>

                                </div>

                                <div className={style.formFooter}>
                                    <button
                                        type="button"
                                        className={style.primaryButton}
                                        onClick={guardarNotificaciones}
                                    >
                                        <FaSave />
                                        Guardar preferencias
                                    </button>
                                </div>

                            </motion.div>
                        )}

                    </AnimatePresence>

                </main>

            </div>

        </section>
    );
}

export default Ajustes;
