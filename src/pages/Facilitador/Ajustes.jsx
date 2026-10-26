import { motion, useScroll } from "framer-motion";
import style from "../css/Ajustes.module.css";
import usuario from "../../assets/usuario.png"
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Switch from '@mui/material/Switch';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";


function Ajustes() {
    const [tabActiva, setTabActiva] = useState("perfil");
    const [dobleAuth, setDobleAuth] = useState(false);
    const [cargo, setCargo] = useState('');
    return (
        <div className={style.container}>
            <motion.div className={style.pestañas}>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={style.pestaña}
                    onClick={() => setTabActiva("perfil")}
                >Editar perfil</motion.button>
                <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={style.pestaña}
                    onClick={() => setTabActiva("seguridad")}
                >
                    Seguridad
                </motion.button>
            </motion.div>

            {
                tabActiva === "perfil" && (
                    <motion.div className={style.formGrid}>
                        <div className={style.informacion}>

                            <div className={style.perfilContainer}>
                                <img
                                    src={usuario}
                                    alt="Perfil"
                                    className={style.perfil}
                                />

                                <motion.button
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={style.btnFoto}>
                                        Cambiar foto
                                </motion.button>
                            </div>

                            <div className={style.formulario}>

                                <TextField
                                    className={style.inputMUI}
                                    label="Nombre"
                                    type="text"
                                    variant="outlined"
                                    fullWidth
                                />
                                <TextField
                                    className={style.inputMUI}
                                    label="Apellido"
                                    type="text"
                                    variant="outlined"
                                    fullWidth
                                />
                                <TextField
                                    className={style.inputMUI}
                                    label="Correo electronico"
                                    type="text"
                                    variant="outlined"
                                    fullWidth
                                />
                                <TextField
                                    className={style.inputMUI}
                                    label="Contraseña"
                                    type="password"
                                    variant="outlined"
                                    fullWidth
                                />
                                <TextField
                                    type="date"
                                    fullWidth
                                    slotProps={{
                                        inputLabel: { shrink: true },
                                    }}
                                />

                                <div>
                                    <TextField
                                        className={style.inputMUI}
                                        label="Dirección"
                                        type="text"
                                        variant="outlined"
                                        fullWidth
                                    />
                                </div>

                                <div>
                                    <FormControl fullWidth>
                                        <InputLabel id="cargo">Cargo</InputLabel>
                                        <Select
                                            value={cargo}
                                            onChange={(e) => setCargo(e.target.value)}
                                            id="cargo"
                                            label="Cargo"
                                        >
                                            <MenuItem value="hola">hola</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>

                                <div>
                                    <TextField
                                        className={style.inputMUI}
                                        label="Código Postal"
                                        type="text"
                                        variant="outlined"
                                        fullWidth
                                    />
                                </div>


                                <div className={style.botonContainer}>
                                    <motion.button
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}>
                                            Guardar
                                    </motion.button>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                )
            }

            {
                tabActiva === "seguridad" && (
                    <motion.div className={style.formGrid}>
                        <div className={style.seguridad}>
                            <h2>Doble autenticacion</h2>
                            <div className={style.containerSwitch}>

                                <Switch
                                    size="small"
                                    className={style.switchMUI}
                                />
                                <p>Activar o desactivar la autenticacion en dos factores</p>

                            </div>
                            <div>
                                <TextField
                                    className={style.inputMUI}
                                    label="Contraseña actual"
                                    type="text"
                                    variant="outlined"
                                    fullWidth
                                />

                            </div>
                            <div>
                                <TextField
                                    className={style.inputMUI}
                                    label="Contraseña nueva"
                                    type="text"
                                    variant="outlined"
                                    fullWidth
                                />

                            </div>

                            <div>
                                <TextField
                                    className={style.inputMUI}
                                    label="Confirmar contraseña"
                                    type="text"
                                    variant="outlined"
                                    fullWidth
                                />
                            </div>
                            <div className={style.botonContainer}>
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}>
                                        Guardar
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                )
            }
        </div>
    );
};

export default Ajustes;