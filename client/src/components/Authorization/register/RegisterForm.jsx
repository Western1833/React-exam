import styles from '../loginAndRegister.module.css';

export default function RegisterForm() {
    return (
        <form className={styles['register']}>
            <h3>Register Here</h3>

            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Email or Phone" id="username"/>

            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" id="password"/>

            <label htmlFor="password">Repeat Password</label>
            <input type="password" placeholder="Repeat Password" id="re-password"/>

        <button>Register</button>
    </form>
    );
}