import RegisterForm from "./RegisterForm.jsx";
import styles from './registration.module.css';

export default function Registration() {
  return (
    <section className={styles['registrationContainer']}>
      <div className={styles['imageContainer']}>
        <img src="/images/register-image.jpg" alt="" className={styles['image']} />
        <div className={styles['register']}>
          <RegisterForm />
        </div>
      </div>
    </section>
  );
}
