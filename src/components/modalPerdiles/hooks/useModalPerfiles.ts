
import { useState } from "react";
import type { Perfil } from "../../../modules/Facilitador/interfaces/Auth";

interface UseModalPerfilesProps {
    perfiles: Perfil[];
    onContinuar: (perfil: Perfil) => void;
}

export function useModalPerfiles({
    perfiles,
    onContinuar,
}: UseModalPerfilesProps) {

    const [perfilSeleccionado, setPerfilSeleccionado] =
        useState<number | null>(null);

    const seleccionarPerfil = (perfilId: number) => {
        setPerfilSeleccionado(perfilId);
    };

    const continuar = () => {
        const perfil = perfiles.find(
            (perfil) => perfil.id === perfilSeleccionado
        );

        if (!perfil) return;

        onContinuar(perfil);
    };

    const puedeContinuar = perfilSeleccionado !== null;

    return {
        perfilSeleccionado,
        seleccionarPerfil,
        continuar,
        puedeContinuar,
    };
}
