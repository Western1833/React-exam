import { useContext, useEffect, useState } from 'react';
import CarInfoCar from '../Card/Card.jsx';
import * as carService from '../../services/carServices.js';
import './myCarsStyles.css';
import { PaginationComponent } from '../Pagination/Pagination.jsx';
import AuthContext from '../../contexts/authContext.jsx';
import { PATHS } from '../../utils/utils.js';

export default function MyCars() {
    const [cars, setCars] = useState([]);
    const [carsLength, setCarsLength] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const { userId } = useContext(AuthContext);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    useEffect(() => {
        fetch(`${PATHS.baseUrl}${PATHS.cars}?where=_ownerId%3D%22${userId}%22`)
        .then(res => res.json())
        .then(result => setCarsLength(result))
        .catch(err => {
            console.log(err.message)
        })
    }, [userId]);

    useEffect(() => {
        carService.myCarsService(userId, currentPage)
            .then(result => setCars(result))
            .catch(err => {
                console.log(err);
            });
    }, [currentPage, userId]);

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
            <div className='pagination'>
                <PaginationComponent onPageChange={handlePageChange} length={carsLength.length} activePage={currentPage}/>
            </div>
        </div>
    );
}