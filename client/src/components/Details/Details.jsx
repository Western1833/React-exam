import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../Details/details.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import * as carsService from '../../services/carServices.js';
import AuthContext from '../../contexts/authContext.jsx';
import { PATHS } from '../../utils/utils.js';

export function Details() {
    const { id } = useParams();
    const [car, setCar] = useState({});
    const { userId } = useContext(AuthContext);

    const isCreator = car._ownerId === userId;

    const navigate = useNavigate();

    useEffect(() => {
        carsService.getSingleCar(id)
            .then(result => setCar(result))
            .catch(err => {
                console.log(err);
            })
    }, [id]);

    const onDelete = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this item?");
        if (confirmDelete) {
            await carsService.deleteCar(id);
            navigate(PATHS.cars);
        }else{
            navigate(`${PATHS.details}/${id}`);
        }
    }

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
                        <Link to={`${PATHS.details}/${id}/edit`}>
                            <Button variant="primary" size="lg">Edit</Button>
                        </Link>

                        <Button variant="primary" size="lg" onClick={onDelete}>Delete</Button>

                    </div>
                )}
            </Card.Body>
        </Card>
    );
}