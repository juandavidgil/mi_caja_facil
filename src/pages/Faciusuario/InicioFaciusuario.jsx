import { motion } from "framer-motion";
import CajaId from "../../components/CajaId";
import Saldos from "../../components/Saldos";



function InicioFaciusuario () {
    return(
        <div>
            <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            >  
            <div>
                <h1>
                    Bienvenido a tu Caja Facil Juan 👋
                </h1>
                <p>
                    Gestiona tus moviemientos y controla tu caja en tiempo real.
                </p>
            </div>

            <CajaId/>

            <motion.div>
            <Saldos/>
            </motion.div>

            </motion.div>
        </div>
    )
}
export default InicioFaciusuario;