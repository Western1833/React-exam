import { createContext } from "react";
import { PATHS, emailRegex } from '../utils/utils.js';
import { login, register } from '../services/authService.js';
import { useNavigate } from 'react-router-dom';
import { usePersistedState } from "../hooks/usePersistedState.js";

const AuthContext = createContext();

export function AuthProvider({
    children
}){

    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});
  
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
      userId: auth._id,
      isAuthenticated: !!auth.accessToken,
    }

    return(
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;