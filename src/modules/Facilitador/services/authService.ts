import { http } from "../../../../api/method";
import type { LoginResponse } from "../interfaces/Auth";

export const iniciarSesion = (
    documento: string,
    contraseña: string
): Promise<LoginResponse> =>
    http.post<LoginResponse>("/Auth/login/", {
        documento,
        password: contraseña
    });