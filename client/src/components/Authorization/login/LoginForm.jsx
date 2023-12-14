import { useContext } from 'react';
import styles from '../loginAndRegister.module.css';
import useForm from '../../../hooks/useForm.js';
import AuthContext from '../../../contexts/authContext.jsx';

export default function LoginForm(){
  const {loginSubmitHandler} = useContext(AuthContext);

  const {values, onChange, onSubmit} = useForm(loginSubmitHandler, {
    email: '',
    password: ''
  });

    return(

    <form className={styles['login']} onSubmit={onSubmit}>
        <h3>Login Here</h3>

        <label htmlFor="email">Email</label>
        <input
        type="text"
        placeholder="Email"
        id="email"
        name='email'
        autoComplete="email"
        value={values.email}
        onChange={onChange}
        />

        <label htmlFor="password">Password</label>
        <input
        type="password"
        placeholder="Password"
        id="password"
        name='password'
        autoComplete="current-password"
        value={values.password}
        onChange={onChange}
        />
        <button>Log In</button>
    </form>
    );
}