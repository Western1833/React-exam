import LoginForm from "./LoginForm.jsx";
import styles from './login.module.css';

export default function Login() {
    return (
        <section className={styles['loginContainer']}>
            <div className={styles['imageContainer']}>
                <img src="/images/login-image.jpg" alt="" className={styles['image']} />
                <div className={styles['login']}>
                    <LoginForm />
                </div>
            </div>
        </section>
    );
}