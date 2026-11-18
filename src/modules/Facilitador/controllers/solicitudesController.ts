import {
    obtenerBeneficiarios,
    obtenerMonedas,
    obtenerCiudades
} from "../services/solicitudesService";

import type {
    Beneficiarios,
    Ciudades,
    Monedas
} from "../interfaces/Solicitud";

export const obtenerBeneficiariosController = (
    token: string
): Promise<Beneficiarios[]> => obtenerBeneficiarios(token);

export const obtenerMonedasController = (
    token: string
): Promise<Monedas[]> => obtenerMonedas(token);

export const obtenerCiudadesController = (
    token: string
): Promise<Ciudades[]> => obtenerCiudades(token);