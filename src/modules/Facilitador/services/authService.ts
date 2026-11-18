import { http } from "../../../../api/method";
import type { LoginResponse, SeleccionarPerfilResponse } from "../interfaces/Auth";

export const iniciarSesion = (
    documento: string,
    contraseña: string
): Promise<LoginResponse> =>
    http.post<LoginResponse>("/Auth/login/", {
        documento,
        password: contraseña
    });


export const seleccionarPerfil = (
    perfilId: number,
    tokenTemporal: string
): Promise<SeleccionarPerfilResponse> =>
    http.post<SeleccionarPerfilResponse>(
        "/Auth/seleccionar-perfil/",
        {
            perfilId
        },
        {
            token: tokenTemporal
        }
    );