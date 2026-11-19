
export interface Perfil {
    id: number;
    perfil: string;
}

export interface UsuarioLogin {
    id: number;
    token: string;
    expiraEn: string;
    nombreCompleto: string;
    documento: string;
    perfiles: Perfil[];
}


export interface LoginResponse {
    token: string;
    expiraEn: string;
    requiereSeleccionPerfil: boolean;
    usuario: {
        id: number;
        nombreCompleto: string;
        documento: string;
        perfiles: Perfil[];
    };
}

export interface SeleccionarPerfilResponse {
    token: string;
    expiraEn: string;
    requiereSeleccionPerfil: boolean;
    usuario: {
        id: number;
        nombreCompleto: string;
        documento: string;
        perfiles: Perfil[];
    };
}
