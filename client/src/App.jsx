import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Navigation.jsx';
import Home from './components/Home/Home.jsx';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Registration from './components/Authorization/register/Registration.jsx';
import Footer from './components/Footer/Footer.jsx';
import Login from './components/Authorization/login/Login.jsx';
import Cars from './components/Cars/Cars.jsx';
import CarCreate from './components/Create/CarCreate.jsx';
import { useState } from 'react';
import AuthContext from './contexts/authContext.js';
import { PATHS, emailRegex } from './utils/utils.js';
import { login, register } from './services/authService.js';
import LogoutComponent from './components/Authorization/Logout/Logout.jsx';

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(() => {
    localStorage.removeItem('accessToken');

    return {};
  });

  const loginSubmitHandler = async (values) => {
    try {
      const result = await login(values);

      setAuth(result);

      localStorage.setItem('accessToken', result.accessToken);
      
      navigate(PATHS.home);
    } catch (err) {
      console.log(err);
    }
  }

  const registerSubmitHandler = async (values) => {
    try {
      if (values.password.length < 3 || values.repeatPassword.length < 3) {
        throw new Error('Password too short, minimum 3 characters.');
      } else if (values.password !== values.repeatPassword) {
        throw new Error('Password missmatch!');
      }

      if (emailRegex.test(values.email)) {
        const result = await register(values);

        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);
        
        navigate(PATHS.home);
      } else {
        throw new Error('invalid email!');
      }
    } catch (err) {
      console.log(err);
    }
  }

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem('accessToken');
    navigate(PATHS.home);
  }

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    email: auth.email,
    username: auth.username,
    isAuthenticated: !!auth.accessToken,
  }

  return (
    <AuthContext.Provider value={values}>
      <div id='root'>
        <Header />
        <Routes>
          <Route path={PATHS.home} element={<Home />} />
          <Route path={PATHS.cars} element={<Cars />} />
          <Route path={PATHS.register} element={<Registration />} />
          <Route path={PATHS.login} element={<Login />} />
          <Route path={PATHS.create} element={<CarCreate />} />
          <Route path={PATHS.logout} element={<LogoutComponent />} />
        </Routes>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;


