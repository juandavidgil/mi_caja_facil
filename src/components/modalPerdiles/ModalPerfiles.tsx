
import styles from "./ModalPerfiles.module.css";
import { useModalPerfiles } from "./hooks/useModalPerfiles";
import type { Perfil } from "../../modules/Facilitador/interfaces/Auth";

interface ModalPerfilesProps {
    mostrar: boolean;
    perfiles: Perfil[];
    onContinuar: (perfil: Perfil) => void;
}

function ModalPerfiles({
    mostrar,
    perfiles,
    onContinuar,
}: ModalPerfilesProps) {

    const {
        perfilSeleccionado,
        seleccionarPerfil,
        continuar,
        puedeContinuar,
    } = useModalPerfiles({
        perfiles,
        onContinuar,
    });

    if (!mostrar) return null;

    return (
        <div className={styles.overlay}>
            <section
                className={styles.modal}
                role="dialog"
                aria-modal="true"
                aria-labelledby="titulo-perfiles"
            >
                <header className={styles.header}>
                    <h2>Mi Caja Fácil</h2>
                    <span className={styles.estado}>
                        ✓ Login exitoso
                    </span>
                </header>

                <div className={styles.bienvenida}>
                    <div className={styles.iconoExito}>✓</div>

                    <h1
                        className={styles.titulo}
                        id="titulo-perfiles"
                    >
                        ¡Bienvenido!
                    </h1>

                    <p className={styles.subtitulo}>
                        Selecciona el perfil con el que deseas ingresar.
                    </p>
                </div>

                <div className={styles.contenedorPerfiles}>
                    <h3 className={styles.titulo_seleccion}>
                        ♙ Seleccionar perfil
                    </h3>

                    <div className={styles.listaPerfiles}>
                        {perfiles.map((perfil) => (
                            <button
                                key={perfil.id}
                                type="button"
                                className={`${styles.perfil} ${perfilSeleccionado === perfil.id
                                        ? styles.perfilActivo
                                        : ""
                                    }`}
                                onClick={() => seleccionarPerfil(perfil.id)}
                                aria-pressed={
                                    perfilSeleccionado === perfil.id
                                }
                            >
                                <div className={styles.perfilTexto}>
                                    <strong>{perfil.perfil}</strong>
                                </div>
                            </button>
                        ))}
                    </div>

                    <button
                        type="button"
                        className={styles.botonContinuar}
                        disabled={!puedeContinuar}
                        onClick={continuar}
                    >
                        Continuar →
                    </button>
                </div>
            </section>
        </div>
    );
}

export default ModalPerfiles;
