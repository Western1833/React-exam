import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { PATHS } from "../../utils/utils.js";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext.jsx";

export default function Header() {
  const {isAuthenticated, username} = useContext(AuthContext);

  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to={PATHS.home} className="fs-4">Car Sales</Navbar.Brand>
          <Nav className="ms-auto">
              {isAuthenticated ? (
                <span style={{ marginRight: '10px', color: 'white', fontSize: '1.3em', lineHeight: '2.5', marginLeft: '10px', display: 'inline-block', verticalAlign: 'middle' }}>{`Hello, ${username}!`}</span>
              ): ''}
              <Nav.Link as={Link} to={PATHS.home} className="fs-4">Home</Nav.Link>
              <Nav.Link as={Link} to={PATHS.cars} className="fs-4">Cars</Nav.Link>
              {isAuthenticated ? (
                <>
                  <Nav.Link as={Link} to={PATHS.myCars} className="fs-4">My cars</Nav.Link>
                  <Nav.Link as={Link} to={PATHS.create} className="fs-4">Add car</Nav.Link>
                  <Nav.Link as={Link} to={PATHS.logout} className="fs-4">Logout</Nav.Link>
                </>
              )
              : 
              <>
                <Nav.Link as={Link} to={PATHS.login} className="fs-4">Login</Nav.Link>
                <Nav.Link as={Link} to={PATHS.register} className="fs-4">Register</Nav.Link>
              </>
            }
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}



