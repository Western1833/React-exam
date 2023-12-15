import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { PATHS } from '../../utils/utils.js';
import { Link } from 'react-router-dom'; 

export default function CarInfoCard({
    imageUrl,
    brand,
    model,
    price,
    year
}) {
    return (
        <Card style={{ width: '18rem', backgroundColor: "#C0C0C0" }}>
            <Card.Img
                variant="top"
                src={imageUrl}
                style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                }}
            />
            <Card.Body>
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
                <Link to={PATHS.details}>
                    <Button variant="primary">Details</Button>
                </Link>
            </Card.Body>
        </Card>
    );
}