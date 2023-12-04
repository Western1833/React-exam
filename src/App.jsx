import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Navigation.jsx';
import Home from './components/Home/Home.jsx';
import { Route, Routes } from 'react-router-dom';
import Registration from './components/Authorization/Registration.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div id='root'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Registration />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;


