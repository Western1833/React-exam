import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

import {AuthProvider} from './contexts/authContext.jsx';
import { PATHS } from './utils/utils.js';

import Header from './components/Header/Navigation.jsx';
import Home from './components/Home/Home.jsx';
import Registration from './components/Authorization/register/Registration.jsx';
import Login from './components/Authorization/login/Login.jsx';
import LogoutComponent from './components/Authorization/Logout/Logout.jsx';
import Cars from './components/Cars/Cars.jsx';
import CarCreate from './components/Create/CarCreate.jsx';
import Footer from './components/Footer/Footer.jsx';
import { Details } from './components/Details/Details.jsx';
import MyCars from './components/MyCars/MyCars.jsx';

function App() {
  
  return (
    <AuthProvider>
      <div id='root'>
        <Header />
        <Routes>
          <Route path={PATHS.home} element={<Home />} />
          <Route path={PATHS.cars} element={<Cars />} />
          <Route path={PATHS.register} element={<Registration />} />
          <Route path={PATHS.login} element={<Login />} />
          <Route path={PATHS.create} element={<CarCreate />} />
          <Route path={PATHS.logout} element={<LogoutComponent />} />
          <Route path={PATHS.details} element={<Details />} />
          <Route path={PATHS.myCars} element={<MyCars />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;


