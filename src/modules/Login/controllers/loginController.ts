import { iniciarSesion, seleccionarPerfil } from "../services/authService";

export async function loginController(
     documento: string,
    contraseña: string
    ) {
        return await iniciarSesion(documento, contraseña);
    }

export async function seleccionarPerfilController(
    perfilId: number,
    tokenTemporal: string
) {
    return await seleccionarPerfil(perfilId, tokenTemporal);
}