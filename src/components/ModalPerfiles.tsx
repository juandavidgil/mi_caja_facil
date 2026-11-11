
import { useState } from "react";
import styles from "./css/ModalPerfiles.module.css";

interface Perfil {
  id: number;
  nombre: string;
  descripcion: string;
  codigo: string;
}

interface ModalPerfilesProps {
  nombreUsuario: string;
  perfiles?: Perfil[];
  onContinuar: (perfil: Perfil) => void;
}


const perfilesIniciales: Perfil[] = [
  {
    id: 1,
    nombre: "Tesorero",
    descripcion: "Entrega el dinero y registra los desembolsos.",
    codigo: "Perfil 1",
  },
  {
    id: 2,
    nombre: "Auditor",
    descripcion: "Revisa y autoriza solicitudes y legalizaciones.",
    codigo: "Perfil 2",
  },
  {
    id: 3,
    nombre: "Beneficiario",
    descripcion: "Recibe el dinero, realiza compras y legaliza gastos.",
    codigo: "Perfil 3",
  },
  {
    id: 4,
    nombre: "Solicitante",
    descripcion: "Crea solicitudes de fondos para un beneficiario.",
    codigo: "Perfil 4",
  },
  {
    id: 5,
    nombre: "Responsable de caja",
    descripcion: "Gestiona los puntos de caja, movimientos y legalizaciones.",
    codigo: "Perfil 5",
  },
];


function ModalPerfiles({
  nombreUsuario,
  perfiles = perfilesIniciales,
  onContinuar,
}: ModalPerfilesProps) {
  const [perfilSeleccionado, setPerfilSeleccionado] =
    useState<number | null>(null);

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
          <span className={styles.estado}>✓ Login exitoso</span>
        </header>

        <div className={styles.bienvenida}>
          <div className={styles.iconoExito}>✓</div>

          <h1 
          className={styles.titulo}
          id="titulo-perfiles">
            ¡Bienvenido, {nombreUsuario}!
          </h1>

          <p className={styles.subtitulo}>
            Selecciona el perfil con el que deseas ingresar.
          </p>
        </div>

        <div className={styles.contenedorPerfiles}>
          <h3
          className={styles.titulo_seleccion}
          >♙ Seleccionar perfil</h3>

          <div className={styles.listaPerfiles}>
            {perfiles.map((perfil) => (
              <button
                key={perfil.id}
                type="button"
                className={`${styles.perfil} ${
                  perfilSeleccionado === perfil.id
                    ? styles.perfilActivo
                    : ""
                }`}
                onClick={() => setPerfilSeleccionado(perfil.id)}
                aria-pressed={perfilSeleccionado === perfil.id}
              >
                <div className={styles.perfilTexto}>
                  <strong>{perfil.nombre}</strong>
                  <span>{perfil.descripcion}</span>
                </div>

                <span className={styles.etiqueta}>
                  {perfil.codigo}
                </span>
              </button>
            ))}
          </div>

          <button
            type="button"
            className={styles.botonContinuar}
            disabled={perfilSeleccionado === null}
            onClick={() => {
              const perfil = perfiles.find(
                (p) => p.id === perfilSeleccionado
              );

              if (perfil) onContinuar(perfil);
            }}
          >
            Continuar →
          </button>
        </div>
      </section>
    </div>
  );
}

export default ModalPerfiles;
