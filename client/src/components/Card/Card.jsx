import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CarInfoCard({
    imageUrl,
    brand,
    model,
    price
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
                    Price: {price} BGN
                </Card.Text>
                <Button variant="primary">Details</Button>
            </Card.Body>
        </Card>
    );
}