import { useNavigate, useParams } from 'react-router-dom';
import { create, editCar, getSingleCar } from '../../services/carServices.js';
import './edit.css';
import { PATHS } from '../../utils/utils.js';
import useForm from '../../hooks/useForm.js';
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

    const onEditCarHandler = async (values) => {
        await editCar(values)

        navigate(PATHS.details)
    }

    const { values, onChange, onSubmit } = useForm(onEditCarHandler, car);

    return (
        <section id="create-page" >
            <form id="create" onSubmit={onSubmit}>
                <div className="container2">
                    <h1>Edit Car</h1>
                    <label htmlFor="imageUrl" className='label'>Image:</label>
                    <input type="text" value={values.imageUrl} className='input' id="imageUrl" name="imageUrl" onChange={onChange} placeholder="Upload a photo" />

                    <label htmlFor="brand" className='label'>Brand:</label>
                    <input type="text" value={values.brand} className='input' id="brand" name="brand" onChange={onChange} placeholder="Enter brand" />

                    <label htmlFor="model" className='label'>Model:</label>
                    <input type="text" value={values.model} className='input' id="model" name="model" onChange={onChange} placeholder="Enter model" />


                    <label htmlFor="year" className='label'>Year:</label>
                    <input type="number" value={values.year} className='input' id="year" name="year" onChange={onChange} placeholder="Production year" />

                    <label htmlFor="price" className='label'>Price:</label>
                    <input type="number" value={values.price} className='input' id="price" name="price" onChange={onChange} placeholder="Enter price" />

                    <label htmlFor="phoneNumber" className='label'>Phone number:</label>
                    <input type="text" value={values.phoneNumber} className='input' id="phoneNumber" name="phoneNumber" onChange={onChange} placeholder="Enter phone number..." />

                    <input className="submitBtn" type="submit" value="Create Car" />
                </div>
            </form>
        </section>
    );
}