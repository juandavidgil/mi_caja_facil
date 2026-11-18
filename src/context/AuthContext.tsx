
import { createContext, useContext, useState, type ReactNode } from "react";
import type { UsuarioLogin, Perfil } from "../modules/Facilitador/interfaces/Auth";

interface AuthContextType {
    usuario: UsuarioLogin | null;
    perfilActivo: Perfil | null;
    guardarUsuario: (usuario: UsuarioLogin) => void;
    guardarPerfilActivo: (perfil: Perfil) => void;
    cerrarSesion: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [usuario, setUsuario] = useState<UsuarioLogin | null>(null);
    const [perfilActivo, setPerfilActivo] = useState<Perfil | null>(null);

    const guardarUsuario = (usuario: UsuarioLogin) => {
        setUsuario(usuario);
    };

    const guardarPerfilActivo = (perfil: Perfil) => {
        setPerfilActivo(perfil);
    };

    const cerrarSesion = () => {
        setUsuario(null);
        setPerfilActivo(null);
        sessionStorage.clear();
    };

    return (
        <AuthContext.Provider
            value={{
                usuario,
                perfilActivo,
                guardarUsuario,
                guardarPerfilActivo,
                cerrarSesion,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth debe utilizarse dentro de AuthProvider");
    }

    return context;
}
