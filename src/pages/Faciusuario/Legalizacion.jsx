import { motion } from 'framer-motion';
import style from '../css/Legalizacion.module.css'
import CajaId from '../../components/CajaId';
import TextField from '@mui/material/TextField';

function Legalizacion() {
    return (
        <section className={style.container}>
            <motion.div
                className={style.informeCard}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <div className={style.formContainer}>
                    <div>
                        <h2>Legalizacion de Gastos</h2>
                    </div>

                    <div className={style.campoMonto}>

                        <TextField
                            type="date"
                            placeholder="Bogota"

                        />
                    </div>

                    <div className={style.campoMonto}>

                        <TextField
                            type="text"
                            placeholder="Bogota"
                            label="Ciudad"
                        />
                    </div>

                    <div className={style.campoMonto}>

                        <TextField
                            type="text"
                            placeholder="$ 0"
                            label="Valor"
                        />
                    </div>

                    <div className={style.campoMonto}>
                        <label htmlFor="">Concepto</label>
                        <select>
                            <option value="">Categoria</option>
                            <option value="">Transporte</option>
                            <option value="">Papeleria</option>
                            <option value="">Alimentacion</option>
                            <option value="">Otros</option>
                        </select>
                    </div>

                </div>
            </motion.div>
        </section>

    );
};
export default Legalizacion;