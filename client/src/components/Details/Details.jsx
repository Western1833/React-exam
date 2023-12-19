import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../Details/details.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import * as carsService from '../../services/carServices.js';
import AuthContext from '../../contexts/authContext.jsx';
import { PATHS } from '../../utils/utils.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

export function Details() {
    const { id } = useParams();
    const [car, setCar] = useState({});
    const [count, setCount] = useState(0);
    const { userId, username } = useContext(AuthContext);

    const isCreator = car._ownerId === userId;
    const isAuthenticated = localStorage.getItem('accessToken');

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
        } else {
            navigate(`${PATHS.details}/${id}`);
        }
    }

    const handleLikeClick = () => {
        setCount(count + 1);

        carsService.carLikes(car, id, count, [username])
        .then(res => {
            console.log({...res})
        })
        .catch(err => {
            console.error(err);
        });

        setCar((car) => ({
            ...car,
            likes: [car.likes, count],
            usernames: [car.usernames, username],
        }));
    };


    return (
        <Card className={styles.carInfoCard} >
            {!isAuthenticated && (
                <>
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
                        <Card.Text>
                            Likes: {car.usernames?.join(', ')}
                        </Card.Text>
                        </Card.Body>
                    </>
            )}
                    {isAuthenticated && isCreator && (
                        <Card.Body>
                        <Card.Img className={styles.cardImage} variant="top" src={car.imageUrl} />
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
                        <Card.Text>
                            Likes: {car.usernames?.join(', ')}
                        </Card.Text>
                            <div className={styles.buttonsDiv}>
                            <Link to={`${PATHS.details}/${id}/edit`}>
                                <Button variant="primary" size="lg">Edit</Button>
                            </Link>

                            <Button variant="primary" size="lg" onClick={onDelete}>Delete</Button>
                            <Button variant="primary" onClick={handleLikeClick}>
                                    <FontAwesomeIcon icon={faThumbsUp} />
                                    <span>{count}</span>
                            </Button>
                        </div>
                        </Card.Body>
                    )}

                    {isAuthenticated && !isCreator && (

                        <>
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
                        </Card.Body>
                            <Card.Text>
                                Likes: {car.usernames?.join(', ')}
                            </Card.Text>
                        </>
                    )}
        </Card>
    );
}