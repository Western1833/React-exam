import { useEffect, useState } from 'react';
import CarInfoCar from '../Card/Card.jsx';
import * as gameService from '../../services/carServices.js';
import './myCarsStyles.css';
import { search } from '../../services/searchService.js';

export default function MyCars() {
    const [cars, setCars] = useState([]);

    const userId = JSON.parse(localStorage.getItem('auth'));

    useEffect(() => {

        gameService.myCarsService(userId._id)
            .then(result => setCars(result))
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className="cars-page">
            <div className='title'>
                <h1 className="head">My cars</h1>
            </div>
            {cars.length && (
                <>
                    <div className="car-list">
                        {cars.map(car => (
                            <CarInfoCar key={car._id} {...car} />
                        ))
                        }
                    </div>
                </>
            )}
            {cars.length === 0 && (
                <p className='noCarsMessage'>No cars added yet.</p>
            )}
        </div>
    );
}