import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { PATHS } from '../../utils/utils.js';
import { Link } from 'react-router-dom';
import styles from './card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import AuthContext from '../../contexts/authContext.jsx';

export default function CarInfoCard({
    imageUrl,
    brand,
    model,
    price,
    year,
    _id,
}) {
    const [count, setCount] = useState(0);

    const {userId} = useContext(AuthContext);
    console.log(userId)
    console.log()

    const handleLikeClick = () => {
        setCount(count + 1);
    };

    return (
        <Card className={styles.carInfoCard}>
            <Card.Img
                variant="top"
                src={imageUrl}
                className={styles.cardImage}
            />
            <Card.Body className={styles.cardBody}>
                <Card.Title>{brand}</Card.Title>
                <Card.Text>
                    {model}
                </Card.Text>
                <Card.Text>
                    {year}
                </Card.Text>
                <Card.Text>
                    Price: {price} BGN
                </Card.Text>
                <div className={`${styles['button-container']}`}>
                    <Link to={`${PATHS.details}/${_id}`}>
                        <Button variant="primary">Details</Button>
                    </Link>
                    <Link >
                        <Button variant="primary" onClick={handleLikeClick}>
                            <FontAwesomeIcon icon={faThumbsUp} />
                            <span>{count}</span>
                        </Button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    );
}