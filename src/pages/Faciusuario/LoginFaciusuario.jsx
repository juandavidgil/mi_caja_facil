function LoginFaciusuario() {
    return (
        <div>
            <p>Bienvenido</p>

            <div>
                <label>Documento de identidad</label>
                <input
                    type="text"
                    placeholder="Ingrese su documento de identidad"
                />

                <label>Contraseña</label>
                <input
                    type="password"
                    placeholder="********"
                />
                <div>
                    <button>
                        Ingresar
                    </button>
                    <p>Ingreso Faciusuario</p>
                </div>
            </div>
        </div>
    )
}

export default LoginFaciusuario;