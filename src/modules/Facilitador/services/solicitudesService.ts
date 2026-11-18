import { http } from "../../../../api/method";
import type { Beneficiarios, Ciudades, Monedas } from "../interfaces/Solicitud";

export const obtenerBeneficiarios = (token: string): Promise<Beneficiarios[]> =>
    http.get<Beneficiarios[]>("/usuarios/mis-beneficiarios/", {
        token
    });

export const obtenerMonedas = (token: string): Promise<Monedas[]> =>
    http.get<Monedas[]>("/monedas/", {
        token
    });

export const obtenerCiudades = (token: string): Promise<Ciudades[]> =>
    http.get<Ciudades[]>("/ciudades/", {
        token
    });