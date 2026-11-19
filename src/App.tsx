import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { AuthProvider } from "./context/AuthContext";
import LayoutFacilitador from './LayoutFacilitador';
import LayoutFaciusuario from './LayoutFaciusuario';
import LayoutAuditor from './LayoutAuditor';
/* FACILITADOR */
import Dashboard from './modules/Facilitador/pages/Dashboard';
import NuevaSolicitud from './modules/Facilitador/pages/NuevaSolicitud';
import MisSolicitudes from "./modules/Facilitador/pages/MisSolicitudes"
import Reportes from './modules/Facilitador/pages/Reportes';
import Ajustes from './modules/Facilitador/pages/Ajustes';

/* FACIUSUARIO */
import LoginFaciusuario from './modules/Faciusuario/pages/LoginFaciusuario';
import InicioFaciusuario from './modules/Faciusuario/pages/InicioFaciusuario';
import Legalizacion from './modules/Faciusuario/pages/Legalizacion';
import MiCajaPrueba from './modules/Facilitador/pages/MiCajaPrueba';
import DashboardAuditor from './modules/Auditor/pages/DashboardAuditor';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>

          <Route
            path='/'
            element={<MiCajaPrueba />}
          />

          <Route
            path='/login_faciusuario'
            element={<LoginFaciusuario />}
          />

          {/* BARRA LATERAL FACILITADOR */}
          <Route element={<LayoutFacilitador />}>

            <Route
              path='/Dashboard'
              element={< Dashboard />}
            />

            <Route
              path='/nueva-solicitud'
              element={< NuevaSolicitud />}
            />

            <Route
              path="/mis-solicitudes"
              element={<MisSolicitudes />}
            />

            <Route
              path='/mis-beneficios'
              element={< Reportes />}
            />

            <Route
              path='/mi-perfil'
              element={< Ajustes />}
            />

          </Route>

          {/* LAYAOUT AUDITOR  */}
          <Route element={<LayoutAuditor />}>
            <Route
              path='/dashboard-auditor'
              element={< DashboardAuditor />}
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
      </AuthProvider>
    </Router>

  )
}

export default App;