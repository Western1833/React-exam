import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { PATHS } from '../../utils/utils.js';
import { Link } from 'react-router-dom';
import styles from './card.module.css';

export default function CarInfoCard({
    imageUrl,
    brand,
    model,
    price,
    year,
    _id,
}) {
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
                <Link to={`${PATHS.details}/${_id}`}>
                    <Button variant="primary">Details</Button>
                </Link>
            </Card.Body>
        </Card>
    );
}