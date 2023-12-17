import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import styles from '../Details/details.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import * as carsService from '../../services/carServices.js';
import AuthContext from '../../contexts/authContext.jsx';

export function Details() {
    const { id } = useParams();
    const [car, setCar] = useState({});
    const {userId} = useContext(AuthContext);

    const isCreator = car._ownerId === userId;


    useEffect(() => {
        carsService.getSingleCar(id)
            .then(result => setCar(result))
            .catch(err => {
                console.log(err);
            })
    }, [id]);

    return (
        <Card className={styles.carInfoCard} >
            <Card.Img className={styles.cardImage} variant="top" src={car.imageUrl} />
            <Card.Body>
                <Card.Text>
                    Brand: {car.brand}
                </Card.Text>
                <Card.Text>
                    Model: {car.model}
                </Card.Text>
                <Card.Text>
                    Year: {car.year}
                </Card.Text>
                <Card.Text>
                    Price: {car.price}
                </Card.Text>
                <Card.Text>
                    Phone number: {car.phoneNumber}
                </Card.Text>
                {isCreator && (
                    <div className={styles.buttonsDiv}>
                        <Link to={`/cars/${id}/edit`}>
                            <Button variant="primary" size="lg">Edit</Button>
                        </Link>
                        <Link to={`/cars/${id}/delete`}>
                            <Button variant="primary" size="lg">Delete</Button>
                        </Link>
                    </div>
                )}
            </Card.Body>
        </Card>
    );
}