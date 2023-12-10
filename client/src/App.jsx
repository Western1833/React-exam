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

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = async (values) => {
    try {
      const result = await login(values);

      setAuth(result);

      navigate(PATHS.home);
    } catch (err) {
      console.log(err);
    }
  }

  const registerSubmitHandler = async (values) => {
    try {
      if(values.email){
        if (values.password.length < 3 && values.repeatPassword.length < 3) {
          throw new Error('Password too short, minimum 3 characters.');
        } else if (values.password !== values.repeatPassword) {
          throw new Error('Password missmatch!');
        }
  
        if (emailRegex.test(values.email)) {
          const result = await register(values);
  
          setAuth(result);
  
          navigate(PATHS.home);
        }else{
          throw new Error('invalid email!');
        }
      }else{
        throw new Error('Please enter email.');
      }
    } catch (err) {
      console.log(err);
    }
  }

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    email: auth.email,
    isAuthenticated: !!auth.email,
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
        </Routes>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;


