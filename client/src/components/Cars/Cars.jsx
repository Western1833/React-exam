import { useEffect, useState } from 'react';
import CarInfoCar from '../Card/Card.jsx';
import * as gameService from '../../services/carServices.js';
import './Cars.css';
import { search } from '../../services/searchService.js';

export default function Cars() {
    const [cars, setCars] = useState([]);
    const [currentCarBrand, setCarBrand] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        gameService.getAllCars()
            .then(result => setCars(result))
            .catch(err => {
                console.log(err);
            });
    }, []);

    const handleBrandChange = (e) => {
        const carBrand = e.target.value;
        setCarBrand(carBrand);
    }

    const searchHandler = async () => {
        const result = await search(currentCarBrand);

        setSearchResult(result);
    }

    return (
        <div className="cars-page">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", height: '100px' }}>
                    <p style={{ fontSize: '30px', color: 'white', marginRight: '20px' }}>Search:</p>
                    <select id="brandSelect" style={{ width: '200px', height: '50px' }} onChange={handleBrandChange}>
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

                    <button style={{
                        height: '50px',
                        width: '100px',
                        margin: '20px',
                        color: 'white',
                        backgroundColor: "#0d6efd",
                        fontSize: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} onClick={searchHandler}>
                        Search
                    </button>
                </div>
            </div>
            {cars.length && (
                <>
                    <div className='title'>
                        <h1 className="head">All Cars</h1>
                    </div>
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
        </div>
    );
}