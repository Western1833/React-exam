import { useNavigate } from 'react-router-dom';
import { create } from '../../services/carServices.js';
import './CarCreate.css';
import { PATHS } from '../../utils/utils.js';

export default function CarCreate(){
    const navigate = useNavigate();

    const onCreateCarHandler = async (e) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.target));

        await create(data);

        navigate(PATHS.cars);
    }

    return(
        <section id="create-page" >
            <form id="create" onSubmit={onCreateCarHandler}>
                <div className="container2">
                    <h1>Create Game</h1>
                    <label htmlFor="game-img" className='label'>Image:</label>
                    <input type="text" className='input' id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="leg-title" className='label'>Brand:</label>
                    <input type="text" className='input' id="brand" name="brand" placeholder="Enter brand..." />

                    <label htmlFor="category" className='label'>Model:</label>
                    <input type="text" className='input' id="model" name="model" placeholder="Enter model..." />


                    <label htmlFor="levels" className='label'>Fuel type:</label>
                    <select name="fuelType" id="fuelTypes">
                        <option value="Petrol">Petrol</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="Electric">Electric</option>
                    </select>

                    <label htmlFor="levels" className='label'>Price:</label>
                    <input type="number" className='input' id="price" name="price" placeholder="Enter price..."/>

                    <label htmlFor="levels" className='label'>Phone number:</label>
                    <input type="text" className='input' id="phoneNumber" name="phoneNumber" placeholder="Enter phone number..."/>

                    <input className="submitBtn" type="submit" value="Create Game" />
                </div>
            </form>
        </section>
    );
}