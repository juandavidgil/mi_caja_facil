import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { AuthProvider } from "./context/AuthContext";
import LayoutSolicitante from './Layaouts/LayoutSolicitante';
import LayoutAuditor from './Layaouts/LayoutAuditor';
/* Solicitante */
import Dashboard from './modules/Solicitante/pages/Dashboard';
import NuevaSolicitud from './modules/Solicitante/pages/NuevaSolicitud';
import MisSolicitudes from "./modules/Solicitante/pages/MisSolicitudes"
import Reportes from './modules/Solicitante/pages/Reportes';
import Ajustes from './modules/Solicitante/pages/Ajustes';

import Login from "./modules/Login/pages/Login";
import DashboardAuditor from './modules/Auditor/pages/DashboardAuditor';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>

          <Route
            path='/'
            element={<Login />}
          />

  
          {/* LAYAOUT SOLICITANTE */}
          <Route element={<LayoutSolicitante />}>

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


        </Routes>
      </AuthProvider>
    </Router>

  )
}

export default App;