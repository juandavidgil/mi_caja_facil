
import { useState, useEffect } from "react";
import type {
    Beneficiarios,
    Monedas,
    Ciudades
} from "../interfaces/Solicitud";

import {
    obtenerBeneficiariosController,
    obtenerMonedasController,
    obtenerCiudadesController
} from "../controllers/solicitudesController";

import { useAuth } from "../../../context/AuthContext";

export function useNuevaSolicitud() {

    const { usuario } = useAuth();

    const [beneficiarios, setBeneficiarios] = useState<Beneficiarios[]>([]);
    const [montoSolicitado, setMontoSolicitado] = useState("");
    const [monedas, setMonedas] = useState<Monedas[]>([]);
    const [ciudades, setCiudades] = useState<Ciudades[]>([]);
    const [descripcion, setDescripcion] = useState("");
    const [beneficiarioSeleccionado, setBeneficiarioSeleccionado] = useState("");
    const [monedaSeleccionada, setMonedaSeleccionada] = useState("");
    const [ciudadSeleccionada, setCiudadSeleccionada] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
    const token = usuario?.token;

    if (!token) return;

    async function obtenerInformacionNuevaSolicitud(tokenActual: string) {
        try {
            setLoading(true);

            const [beneficiarios, monedas, ciudades] = await Promise.all([
                obtenerBeneficiariosController(tokenActual),
                obtenerMonedasController(tokenActual),
                obtenerCiudadesController(tokenActual)
            ]);

            setBeneficiarios(beneficiarios);
            setMonedas(monedas);
            setCiudades(ciudades);

        } catch (error) {
            console.error("No se pudo cargar la información:", error);
        } finally {
            setLoading(false);
        }
    }

    obtenerInformacionNuevaSolicitud(token);

}, [usuario?.token]);
    return {
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
    };
}
