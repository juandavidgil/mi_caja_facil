
import { useState } from "react";
import type { NavigateFunction } from "react-router-dom";
import { loginController } from "../controllers/loginController";
import type { Perfil } from "../interfaces/Auth";
import { useAuth } from "../../../context/AuthContext";

export function useLogin(
    setMostrarModal: (mostrar: boolean) => void,
    navigate: NavigateFunction
) {
    const { guardarUsuario, guardarPerfilActivo } = useAuth();

    const [documento, setDocumento] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [loading, setLoading] = useState(false);

    const [errores, setErrores] = useState({
        documento: "",
        contraseña: "",
    });

    const [errorGeneral, setErrorGeneral] = useState("");
    const [perfiles, setPerfiles] = useState<Perfil[]>([]);

    const Ingresar = async () => {
        // Limpiar errores anteriores
        setErrores({
            documento: "",
            contraseña: "",
        });
        setErrorGeneral("");

        // Validaciones
        let formularioValido = true;

        if (!documento.trim()) {
            setErrores(prev => ({
                ...prev,
                documento: "El documento es obligatorio.",
            }));
            formularioValido = false;
        }

        if (!contraseña.trim()) {
            setErrores(prev => ({
                ...prev,
                contraseña: "La contraseña es obligatoria.",
            }));
            formularioValido = false;
        }

        if (!formularioValido) return;

        try {
            setLoading(true);

            const resultado = await loginController(
                documento.trim(),
                contraseña
            );

            guardarUsuario(resultado.usuario);
            setPerfiles(resultado.usuario.perfiles);

            if (resultado.requiereSeleccionPerfil) {
                setMostrarModal(true);
            }

        } catch (error) {
            console.error("Error al iniciar sesión:", error);

            setErrorGeneral(
                error instanceof Error
                    ? error.message
                    : "No fue posible iniciar sesión. Inténtalo nuevamente."
            );

        } finally {
            setLoading(false);
        }
    };

    const continuarConPerfil = (perfil: Perfil) => {
        guardarPerfilActivo(perfil);
        setMostrarModal(false);
        navigate("/Dashboard");
    };

    return {
        documento,
        setDocumento,
        contraseña,
        setContraseña,
        Ingresar,
        loading,
        errores,
        setErrores,
        errorGeneral,
        continuarConPerfil,
        perfiles,
    };
}
