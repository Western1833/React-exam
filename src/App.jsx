import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Navigation.jsx';
import Home from './components/Home/Home.jsx';
import { Route, Routes } from 'react-router-dom';
import Registration from './components/Authorization/register/Registration.jsx';
import Footer from './components/Footer/Footer.jsx';
import Login from './components/Authorization/login/Login.jsx';

function App() {
  return (
    <div id='root'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;


