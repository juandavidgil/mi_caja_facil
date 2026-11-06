import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import LayoutFacilitador from './LayoutFacilitador';
import LayoutFaciusuario from './LayoutFaciusuario';
/* FACILITADOR */
import LoginFacilitador from "./modules/Facilitador/pages/LoginFacilitador";
import Inicio from './modules/Facilitador/pages/Inicio';
import Movimientos from './modules/Facilitador/pages/Movimientos';
import Fondos from './modules/Facilitador/pages/Fondos';
import Reportes from './modules/Facilitador/pages/Reportes';
import Ajustes from './modules/Facilitador/pages/Ajustes';

/* FACIUSUARIO */
import LoginFaciusuario from './modules/Faciusuario/pages/LoginFaciusuario';
import InicioFaciusuario from './modules/Faciusuario/pages/InicioFaciusuario';
import Legalizacion from './modules/Faciusuario/pages/Legalizacion';
import MiCajaPrueba from './modules/Facilitador/pages/MiCajaPrueba';

function App() {
  return (
    <Router>

      <Routes>

         <Route
          path='/'
          element={<MiCajaPrueba />}
        />

        <Route
          path='/login'
          element={<LoginFacilitador />}
        />

        <Route
          path='/login_faciusuario'
          element={<LoginFaciusuario />}
        />

{/* BARRA LATERAL FACILITADOR */}
        <Route element={<LayoutFacilitador />}>

            <Route
              path='/inicio'
              element={< Inicio />}
            />

            <Route
              path='/movimientos'
              element={< Movimientos />}
            />

            <Route
              path='/fondos'
              element={< Fondos />}
            />

            <Route
              path='/reportes'
              element={< Reportes />}
            />

            <Route
              path='/ajustes'
              element={< Ajustes />}
          />

        </Route>
{/* BARRA LATERAL USUARIO  */}

        <Route element={<LayoutFaciusuario />}>

            <Route
              element={<InicioFaciusuario />}
              path='/inicio-faciusuario'
            />
            <Route
              element={<Legalizacion />}
              path='/legalizacion'
            />
        </Route>



      </Routes>

    </Router>

  )
}

export default App;