import { useEffect, useState } from 'react';
import CarInfoCar from '../Card/Card.jsx';
import * as carService from '../../services/carServices.js';
import './Cars.css';
import { search } from '../../services/searchService.js';
import { PaginationComponent } from '../Pagination/Pagination.jsx';

export default function Cars() {
    const [cars, setCars] = useState([]);
    const [carsLength, setCarsLength] = useState(0);
    const [currentCarBrand, setCarBrand] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    useEffect(() => {
        carService.getAllCars()
            .then(result => setCarsLength(result))
            .catch(err => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        carService.getCarsPagination(currentPage)
            .then(result => setCars(result))
            .catch(err => {
                console.log(err);
            });
    }, [currentPage]);

    const handleBrandChange = (e) => {
        const carBrand = e.target.value;
        setCarBrand(carBrand);

        if (carBrand === '') {
            setCarBrand('');
            setSearchResult([]);
        }
    }

    const searchHandler = async () => {
        const result = await search(currentCarBrand, currentPage);

        setSearchResult(result);
    }

    return (
        <div className="cars-page">
            <div className='searchWrapper'>
                <div className='searchDiv'>
                    <p>Search:</p>
                    <select id="brandSelect" onChange={handleBrandChange}>
                        <option value="">Select a brand</option>
                        <option value="Audi">Audi</option>
                        <option value="BMW">BMW</option>
                        <option value="Citroen">Citroen</option>
                        <option value="Dacia">Dacia</option>
                        <option value="Fiat">Fiat</option>
                        <option value="Hyundai">Hyundai</option>
                        <option value="Jaguar">Jaguar</option>
                        <option value="Kia">Kia</option>
                        <option value="Lexus">Lexus</option>
                        <option value="Mercedes-Benz">Mercedes-Benz</option>
                        <option value="Nissan">Nissan</option>
                        <option value="Opel">Opel</option>
                        <option value="Porsche">Porsche</option>
                        <option value="Renault">Renault</option>
                        <option value="Skoda">Skoda</option>
                        <option value="VW">VW</option>
                    </select>

                    <button id='submitSearchBtn' onClick={searchHandler}>
                        Search
                    </button>
                </div>
            </div>
            {cars.length && (
                <>
                    {searchResult.length ?
                        <div className='title'>
                            <h1 className="head">Searched Cars</h1>
                        </div> :
                        <div className='title'>
                            <h1 className="head">All Cars</h1>
                        </div>
                    }

                    <div className="car-list">
                        {searchResult.length ?
                            searchResult.map(car => (
                                <CarInfoCar key={car._id} {...car} />
                            )) :
                            cars.map(car => (
                                <CarInfoCar key={car._id} {...car} />
                            ))
                        }
                    </div>
                </>
            )}
            {cars.length === 0 && (
                <p className='noCarsMessage'>No cars added yet.</p>
            )}
            {searchResult.length ? (
                ''
            ) :
                <div className='pagination'>
                    <PaginationComponent onPageChange={handlePageChange} length={carsLength.length} activePage={currentPage} />
                </div>
            }
        </div>
    );
}