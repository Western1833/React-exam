import styles from './home.module.css';
import CarInfoCard from '../Card/Card.jsx';
import * as carService from '../../services/carServices.js';
import { useEffect, useState } from 'react';
import { PATHS } from '../../utils/utils.js';

export default function Home() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAllCars()
            .then(result => setCars(result.slice(-3)))
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <>
            <section className={styles['car-specs']}>
                {cars.length ? (
                    <div className={styles['car-list']}>
                        <p style={{fontSize: '26px', color: 'black'}}><b>Lastly added cars:</b></p>
                        {cars.map(car => (
                            <CarInfoCard key={car._id} {...car} />
                        ))}
                    </div>
                )
                : 
                    (<div className={styles['car-list']}>
                        <h3>There are no cars added yet, click <a href={PATHS.create}>Here</a> to add a car.</h3>
                    </div>)
                }
                <img className={styles['car-image']} src="./images/main-page-car.jpg" alt="" />
            </section>
        </>
    );
}