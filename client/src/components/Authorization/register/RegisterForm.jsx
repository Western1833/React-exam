import { useState } from 'react';
import styles from '../loginAndRegister.module.css';
import { register } from '../../../services/authService.js';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../utils/utils.js';

export default function RegisterForm() {
    const [formValues, setFormValues] = useState({
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
        <form className={styles['register']} onSubmit={onRegisterHandler}>
            <h3>Register Here</h3>

            <label htmlFor="username">Email</label>
            <input
            type="text"
            placeholder="Email"
            id="email"
            name='email'
            value={formValues.email}
            onChange={changeHandler}
            />

            <label htmlFor="password">Password</label>
            <input
            type="password"
            placeholder="Password"
            id="password"
            name='password'
            value={formValues.password}
            onChange={changeHandler}
            />

            <label htmlFor="password">Repeat Password</label>
            <input
            type="password"
            placeholder="Repeat Password"
            id="re-password"
            name='repeatPassword'
            value={formValues.repeatPassword}
            onChange={changeHandler}
            />

        <button>Register</button>
    </form>
    );
}