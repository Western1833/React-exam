import RegisterForm from "./RegisterForm.jsx";
import styles from '../Authorization/registration.module.css';

export default function Registration() {
  return (
    <section className={styles['registrationContainer']}>
      <div className={styles['imageContainer']}>
        <img src="./images/black-concrete-wall.jpg" alt="" className={styles['image']} />
        <div className={styles['register']}>
          <RegisterForm />
        </div>
      </div>
    </section>
  );
}
