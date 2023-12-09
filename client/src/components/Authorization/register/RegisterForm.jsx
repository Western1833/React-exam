import { useContext, useState } from 'react';
import styles from '../loginAndRegister.module.css';
import { register } from '../../../services/authService.js';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../utils/utils.js';
import AuthContext from '../../../contexts/authContext.js';
import useForm from '../../../hooks/useForm.js';

export default function RegisterForm() {
    const {registerSubmitHandler} = useContext(AuthContext);

    const {values, onChange, onSubmit} = useForm(registerSubmitHandler, {
        email: '',
        password: '',
        repeatPassword: ''
    });
    const navigate = useNavigate();

    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    const onRegisterHandler = async (e) => {
        e.preventDefault();

        
        try{
            if(formValues.password !== formValues.repeatPassword){
                throw new Error("Passwords don't match!");
            }
            await register(formValues);

            navigate(PATHS.login);
        }catch(err){
            console.log(err.message);
        }
    }

    return (
        <form className={styles['register']} onSubmit={onSubmit}>
            <h3>Register Here</h3>

            <label htmlFor="username">Email</label>
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

            <label htmlFor="password">Repeat Password</label>
            <input
            type="password"
            placeholder="Repeat Password"
            id="re-password"
            name='repeatPassword'
            value={values.repeatPassword}
            onChange={onChange}
            />

        <button>Register</button>
    </form>
    );
}