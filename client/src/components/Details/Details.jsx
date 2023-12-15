import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import styles from '../Details/details.css';

export function Details(props) {
    return (
        <div className={{backgroundImage: '/images/black-concrete-wall.jpg'}}>
            <Card className={styles.largerCard} >
                <Card.Img variant="top" src="holder.js/100px180"/>
                <Card.Body>
                    <Card.Text>
                        Brand:
                    </Card.Text>
                    <Card.Text>
                        Model:
                    </Card.Text>
                    <Card.Text>
                        Year:
                    </Card.Text>
                    <Card.Text>
                        Price:
                    </Card.Text>
                    <Card.Text>
                        Phone number:
                    </Card.Text>
                    {/* Use Link to navigate to a specific path */}
                    {/* <Link to="/your-path">
                <Button variant="primary" size="lg">Go somewhere</Button>
              </Link> */}
                </Card.Body>
            </Card>
        </div>
    );
}