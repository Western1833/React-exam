import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import styles from '../Details/details.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as carsService from '../../services/carServices.js';

export function Details() {
    const {id} = useParams();
    const [car, setCar] = useState([]);

    useEffect(() => {
        carsService.getSingleCar(id)
        .then(result => setCar(result))
        .catch(err => {
            console.log(err);
        })
    }, [id]);

    console.log(car);
    return (
            <Card className={styles.carInfoCard} >
                <Card.Img className={styles.cardImage} variant="top" src={car.imageUrl}/>
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
                    {/* Use Link to navigate to a specific path */}
                    {/* <Link to="/your-path">
                <Button variant="primary" size="lg">Go somewhere</Button>
              </Link> */}
                </Card.Body>
            </Card>
    );
}