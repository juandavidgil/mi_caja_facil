
import { useState } from "react";
import type { NavigateFunction } from "react-router-dom";
import { loginController, seleccionarPerfilController } from "../controllers/loginController";

import type { Perfil } from "../interfaces/Auth";
import { useAuth } from "../../../context/AuthContext";

export function useLogin(
    setMostrarModal: (mostrar: boolean) => void,
    navigate: NavigateFunction
) {
    const {
        guardarUsuario,
        guardarPerfilActivo
    } = useAuth();

    const [documento, setDocumento] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [loading, setLoading] = useState(false);

    const [errores, setErrores] = useState({
        documento: "",
        contraseña: "",
    });

    const [errorGeneral, setErrorGeneral] = useState("");
    const [perfiles, setPerfiles] = useState<Perfil[]>([]);
    const [tokenTemporal, setTokenTemporal] = useState("");
    const [usuarioPendiente, setUsuarioPendiente] = useState<{
        id: number;
        nombreCompleto: string;
        documento: string;
    } | null>(null);

    const Ingresar = async () => {
        setErrores({
            documento: "",
            contraseña: "",
        });

        setErrorGeneral("");

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

            setTokenTemporal(resultado.token);

            setUsuarioPendiente({
                id: resultado.usuario.id,
                nombreCompleto: resultado.usuario.nombreCompleto,
                documento: resultado.usuario.documento
            });

            setPerfiles(resultado.usuario.perfiles);

            if (resultado.requiereSeleccionPerfil) {
                setMostrarModal(true);
            } else {
                guardarUsuario({
                    id: resultado.usuario.id,
                    token: resultado.token,
                    expiraEn: resultado.expiraEn,
                    nombreCompleto: resultado.usuario.nombreCompleto,
                    documento: resultado.usuario.documento,
                    perfiles: resultado.usuario.perfiles
                });
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

    const continuarConPerfil = async (perfil: Perfil) => {
        try {
            setLoading(true);
            setErrorGeneral("");

            if (!tokenTemporal || !usuarioPendiente) {
                throw new Error(
                    "La sesión temporal no es válida. Inicia sesión nuevamente."
                );
            }

   
            const resultado = await seleccionarPerfilController(
                perfil.id,
                tokenTemporal
            );


            guardarUsuario({
                id: resultado.usuario.id,
                token: resultado.token,
                expiraEn: resultado.expiraEn,
                nombreCompleto: resultado.usuario.nombreCompleto,
                documento: resultado.usuario.documento,
                perfiles: perfiles
            });


            guardarPerfilActivo(perfil);

            setTokenTemporal("");
            setMostrarModal(false);

            navigate("/Dashboard");

        } catch (error) {
            console.error("Error al seleccionar perfil:", error);

            setErrorGeneral(
                error instanceof Error
                    ? error.message
                    : "No fue posible seleccionar el perfil."
            );

        } finally {
            setLoading(false);
        }
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
        perfiles
    };
}
