import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Navigation.jsx';
import Home from './components/Home/Home.jsx';
import { Route, Routes } from 'react-router-dom';
import Registration from './components/Authorization/register/Registration.jsx';
import Footer from './components/Footer/Footer.jsx';
import Login from './components/Authorization/login/Login.jsx';
import Cars from './components/Cars/Cars.jsx';
import CarCreate from './components/Create/CarCreate.jsx';
import { useState } from 'react';
import AuthContext from './contexts/authContext.js';

function App() {
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = async (values) => {
    console.log(values);
  }

  return (
    <AuthContext.Provider value={{loginSubmitHandler}}>
      <div id='root'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cars' element={<Cars />} />
          <Route path='/users/register' element={<Registration />} />
          <Route path='/users/login' element={<Login />} />
          <Route path='/create' element={<CarCreate />} />
        </Routes>
        <Footer/>
      </div>
    </AuthContext.Provider>
  );
}

export default App;


