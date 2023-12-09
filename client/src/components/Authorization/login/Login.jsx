import LoginForm from "./LoginForm.jsx";
import styles from './login.module.css';

export default function Login({
    loginSubmitHandler
}) {
    return (
        <section className={styles['loginContainer']}>
            <div className={styles['imageContainer']}>
                <img src="/images/login-image.jpg" alt="" className={styles['image']} />
                <div className={styles['login']}>
                    <LoginForm loginSubmitHandler={loginSubmitHandler}/>
                </div>
            </div>
        </section>
    );
}