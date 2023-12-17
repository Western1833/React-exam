import { useNavigate, useParams } from 'react-router-dom';
import { editCar, getSingleCar } from '../../services/carServices.js';
import './edit.css';
import { PATHS } from '../../utils/utils.js';
import { useEffect, useState } from 'react';

export default function EditCar() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [car, setCar] = useState({});

    useEffect(() => {
        getSingleCar(id)
            .then(result => setCar(result))
            .catch(err => {
                console.log(err);
            })
    }, [id]);

    const handleUpdateToCar = (e) => {
        const { name, value } = e.target;
        setCar(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const updateCar = async (e) => {
        e.preventDefault();

        await editCar(id, car);

        navigate(`${PATHS.details}/${id}`);
    }

    return (
        <section id="create-page" >
            <form id="create" onSubmit={updateCar}>
                <div className="container2">
                    <h1>Edit Car</h1>
                    <label htmlFor="imageUrl" className='label'>Image:</label>
                    <input type="text" value={car.imageUrl} onChange={handleUpdateToCar} className='input' id="imageUrl" name="imageUrl" placeholder="Upload a photo" />

                    <label htmlFor="brandSelect" className='label'>Brand:</label>
                    <select id="brandSelect" value={car.brand} className='input' onChange={handleUpdateToCar} name='brand'>
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

                    <label htmlFor="model" className='label'>Model:</label>
                    <input type="text" value={car.model} onChange={handleUpdateToCar} className='input' id="model" name="model" placeholder="Enter model" />


                    <label htmlFor="year" className='label'>Year:</label>
                    <input type="number" value={car.year} onChange={handleUpdateToCar} className='input' id="year" name="year" placeholder="Production year" />

                    <label htmlFor="price" className='label'>Price:</label>
                    <input type="number" value={car.price} onChange={handleUpdateToCar} className='input' id="price" name="price" placeholder="Enter price" />

                    <label htmlFor="phoneNumber" className='label'>Phone number:</label>
                    <input type="text" value={car.phoneNumber} onChange={handleUpdateToCar} className='input' id="phoneNumber" name="phoneNumber" placeholder="Enter phone number..." />

                    <input className="submitBtn" type="submit" value="Create Car" />
                </div>
            </form>
        </section>
    );
}