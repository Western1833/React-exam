import { useState } from 'react';
import styles from '../loginAndRegister.module.css';
import { login } from '../../../services/authService.js';

export default function LoginForm(){
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  });

  const changeHandler = (e) => {
    setFormValue(state => ({
      ...state,
      [e.target.name]: e.target.value
    }));
  }

    async function onLoginHandler(e){
      e.preventDefault();

      try{
        await login(formValue);
      }catch(err){
        console.log(err.message);
        return
      }
    }

    return(

    <form className={styles['login']} onSubmit={onLoginHandler}>
        <h3>Login Here</h3>

        <label htmlFor="email">Email</label>
        <input
        type="text"
        placeholder="Email"
        id="email"
        name='email'
        value={formValue.email}
        onChange={changeHandler}
        />

        <label htmlFor="password">Password</label>
        <input
        type="password"
        placeholder="Password"
        id="password"
        name='password'
        value={formValue.password}
        onChange={changeHandler}
        />

        <button>Log In</button>
    </form>
    );
}