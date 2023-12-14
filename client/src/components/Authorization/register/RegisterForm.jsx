import { useContext } from 'react';
import styles from '../loginAndRegister.module.css';
import AuthContext from '../../../contexts/authContext.jsx';
import useForm from '../../../hooks/useForm.js';

export default function RegisterForm() {
    const {registerSubmitHandler} = useContext(AuthContext);

    const {values, onChange, onSubmit} = useForm(registerSubmitHandler, {
        email: '',
        username: '',
        password: '',
        repeatPassword: ''
    });

    return (
        <form className={styles['register']} onSubmit={onSubmit}>
            <h3>Register Here</h3>

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

            <label htmlFor="username">Username</label>
            <input
            type="text"
            placeholder="Username"
            id="username"
            name='username'
            autoComplete="username"
            value={values.username}
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

            <label htmlFor="re-password">Repeat Password</label>
            <input
            type="password"
            placeholder="Repeat Password"
            id="re-password"
            name='repeatPassword'
            autoComplete="current-password"
            value={values.repeatPassword}
            onChange={onChange}
            />
        <button>Register</button>
    </form>
    );
}