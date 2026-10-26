import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import LayoutFacilitador from './LayoutFacilitador';
import LayoutFaciusuario from './LayoutFaciusuario';
/* FACILITADOR */
import LoginFacilitador from "./pages/Facilitador/LoginFacilitador";
import Inicio from './pages/Facilitador/Inicio';
import Movimientos from './pages/Facilitador/Movimientos';
import Fondos from './pages/Facilitador/Fondos';
import Reportes from './pages/Facilitador/Reportes';
import Ajustes from './pages/Facilitador/Ajustes';

/* FACIUSUARIO */
import LoginFaciusuario from './pages/Faciusuario/LoginFaciusuario';
import InicioFaciusuario from './pages/Faciusuario/InicioFaciusuario';
import Legalizacion from './pages/Faciusuario/Legalizacion';

function App() {
  return (
    <Router>

      <Routes>

        <Route
          path='/'
          element={<LoginFacilitador />}
        />

        <Route
          path='/login_faciusuario'
          element={<LoginFaciusuario />}
        />

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

        <Route element={<LayoutFaciusuario />}>
          <Route
            element={<InicioFaciusuario />}
            path='/inicio-faciusuario'
          />
        </Route>
        <Route
          element={<Legalizacion />}
          path='/legalizacion'
        />


      </Routes>

    </Router>

  )
}

export default App;