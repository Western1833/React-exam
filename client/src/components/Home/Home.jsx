import styles from './home.module.css';
import CarInfoCard from '../Card/Card.jsx';

export default function Home() {
    return (
        <>
            <section className={styles['car-specs']}>
                <div className={styles['text-overlay']}>
                    <h1>Car Specs</h1>
                    <h3>Choose your next car</h3>
                </div>
                <div className={styles['car-list']}>
                    <div style={{ marginBottom: '20px' }}> {/* Adjust margin as needed */}
                        <CarInfoCard/>
                    <h3>There are no cars added yet, click <a href="">Here</a> to add a car.</h3>
                    </div>
                </div>
                <img className={styles['car-image']} src="./images/main-page-car.jpg" alt="" />
            </section>
        </>
    );
}