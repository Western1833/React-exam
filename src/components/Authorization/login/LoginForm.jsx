import styles from '../loginAndRegister.module.css';

export default function LoginForm(){
    return(
    <form className={styles['login']}>
        <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username"/>

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password"/>

        <button>Log In</button>
    </form>
    );
}