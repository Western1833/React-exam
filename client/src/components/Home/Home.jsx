import styles from './home.module.css';
import CarInfoCard from '../Card/Card.jsx';
import * as carService from '../../services/carServices.js';
import { useEffect, useState } from 'react';
import { PATHS } from '../../utils/utils.js';

export default function Home() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getLatestCars()
            .then(response =>{
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch cars');
                }
            })
            .then(result => setCars(result))
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <>
            <section className={styles['car-specs']}>
                    {cars.length ? (
                            <div className={styles['car-list']}>
                                {cars.map(car => (
                                    <CarInfoCard key={car._id} {...car} />
                                ))}
                            </div>
                    )
                        :
                        (<div className={styles['car-list']}>
                            <h2>There are no cars added yet, click <a href={PATHS.create}>Here</a> to add a car.</h2>
                        </div>)
                    }
                <img  className={styles['car-image']} src="./images/main-page-car.webp" alt="" />
            </section>
        </>
    );
}