import { Details } from "./Details.jsx";
import styles from './details.module.css';

export default function DetailsMain() {
    return (
        <section className={styles['detailsContainer']}>
            <div className={styles['imageContainer']}>
                <img src="/images/black-concrete-wall.jpg" alt="" className={styles['image']} />
                <div className={styles['details']}>
                    <Details />
                </div>
            </div>
        </section>
    );
}