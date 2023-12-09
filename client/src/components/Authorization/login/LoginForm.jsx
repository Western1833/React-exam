import { useState } from 'react';
import styles from '../loginAndRegister.module.css';
import { login } from '../../../services/authService.js';
import { useNavigate } from 'react-router-dom';
import useForm from '../../../hooks/useForm.js';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LoginForm({
  loginSubmitHandler,
}){
  const {values, onChange, onSubmit} = useForm(loginSubmitHandler, {
    email: '',
    password: ''
  });

  // const [formValue, setFormValue] = useState({
  //   email: '',
  //   password: '',
  // });
  // const navigate = useNavigate();

  // const changeHandler = (e) => {
  //   setFormValue(state => ({
  //     ...state,
  //     [e.target.name]: e.target.value
  //   }));
  // }

  //   async function onLoginHandler(e){
  //     e.preventDefault();


  //     try{
  //       if(emailRegex.test(formValue.email)){
  //         await login(formValue);

  //         navigate('/');
  //       }else{
  //         throw new Error('Invalid email!');
  //       }
  //     }catch(err){
  //       console.log(err.message);
  //       return;
  //     }
  //   }

    return(

    <form className={styles['login']} onSubmit={onSubmit}>
        <h3>Login Here</h3>

        <label htmlFor="email">Email</label>
        <input
        type="text"
        placeholder="Email"
        id="email"
        name='email'
        value={values.email}
        onChange={onChange}
        />

        <label htmlFor="password">Password</label>
        <input
        type="password"
        placeholder="Password"
        id="password"
        name='password'
        value={values.password}
        onChange={onChange}
        />
        <button>Log In</button>
    </form>
    );
}