import { useNavigate } from 'react-router-dom';
import { create } from '../../services/carServices.js';
import './CarCreate.css';
import { PATHS } from '../../utils/utils.js';
import { useState } from 'react';

export default function CarCreate(){
    const navigate = useNavigate();
    const [carValues, setCarValues] = useState({
        imageUrl: '',
        brand: '',
        model: '',
        year: '',
        price: '',
        phoneNumber: ''
    });

    const onCreateCarHandler = async (e) => {
        e.preventDefault();

        await create(carValues);

        navigate(PATHS.cars)
    }

    const handleValueChange = (e) => {
        const {name, value} = e.target;
        setCarValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return(
        <section id="create-page" >
            <form id="create" onSubmit={onCreateCarHandler}>
                <div className="container2">
                    <h1>Create Car</h1>
                    <label htmlFor="imageUrl" className='label'>Image:</label>
                    <input onChange={handleValueChange} type="text" className='input' id="imageUrl" name="imageUrl" placeholder="Upload a photo" />
                    
                    <label htmlFor="brandSelect" className='label'>Brand:</label>
                    <select id="brandSelect" className='input' onChange={handleValueChange} name='brand'>
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
                    <input onChange={handleValueChange} type="text" className='input' id="model" name="model" placeholder="Enter model" />


                    <label htmlFor="year" className='label'>Year:</label>
                    <input onChange={handleValueChange} type="number" className='input' id="year" name="year" placeholder="Production year"/>

                    <label htmlFor="price" className='label'>Price:</label>
                    <input onChange={handleValueChange} type="number" className='input' id="price" name="price" placeholder="Enter price"/>

                    <label htmlFor="phoneNumber" className='label'>Phone number:</label>
                    <input onChange={handleValueChange} type="text" className='input' id="phoneNumber" name="phoneNumber" placeholder="Enter phone number..."/>

                    <input className="submitBtn" type="submit" value="Create Car" />
                </div>
            </form>
        </section>
    );
}