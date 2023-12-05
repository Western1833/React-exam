import { useEffect, useState } from 'react';
import CarInfoCar from '../Card/Card.jsx';
import * as gameService from '../../services/carServices.js';
import './Cars.css';

export default function Cars() {
    const [cars, setCars] = useState([]);;

    useEffect(() => {
        gameService.getAllCars()
            .then(result => setCars(result))
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className="cars-page">
            {cars.length && (
                <>
                    <div className='title'>
                        <h1 className="head">All Cars</h1>
                    </div>
                    <div className="car-list">
                        {cars.map(car => (
                            <CarInfoCar key={car._id} {...car} />
                        ))}

                    </div>
                </>
            )}
            {cars.length === 0 && (
                <p className='noCarsMessage'>No cars added yet.</p>
            )}
        </div>
    );
}