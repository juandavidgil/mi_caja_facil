
import { useState, forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import { Eye, EyeOff } from "lucide-react";
import styles from "./css/Input.module.css";

interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label: string;
  type?: "text" | "email" | "password" | "number" | "tel";
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      type = "text",
      error,
      id,
      className,
      ...props
    },
    ref
  ) => {
    const [mostrarContrasena, setMostrarContrasena] =
      useState(false);

    const inputId =
      id ?? props.name ?? label.toLowerCase().replace(/\s+/g, "-");

    const esContrasena = type === "password";

    return (
      <div className={styles.campo}>
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>

        <div className={styles.inputContenedor}>
          <input
            {...props}
            ref={ref}
            id={inputId}
            type={
              esContrasena && mostrarContrasena
                ? "text"
                : type
            }
            className={`${styles.input} ${className ?? ""} ${
              error ? styles.inputError : ""
            }`}
            aria-invalid={Boolean(error)}
            aria-describedby={
              error ? `${inputId}-error` : undefined
            }
          />

          {esContrasena && (
            <button
              type="button"
              className={styles.botonOjo}
              onClick={() =>
                setMostrarContrasena((actual) => !actual)
              }
              aria-label={
                mostrarContrasena
                  ? "Ocultar contraseña"
                  : "Mostrar contraseña"
              }
              aria-pressed={mostrarContrasena}
            >
              {mostrarContrasena ? (
                <EyeOff size={19} />
              ) : (
                <Eye size={19} />
              )}
            </button>
          )}
        </div>

        {error && (
          <span
            id={`${inputId}-error`}
            className={styles.error}
            role="alert"
          >
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
