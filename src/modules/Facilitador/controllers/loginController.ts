import { iniciarSesion } from "../services/authService";

export async function loginController(
    documento: string,
    contraseña: string
) {
    return await iniciarSesion(documento, contraseña);
}