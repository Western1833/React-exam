import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { PATHS } from "../../utils/utils.js";

export default function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to={PATHS.home} className="fs-4">CarSpecs</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to={PATHS.home} className="fs-4">Home</Nav.Link>
            <Nav.Link as={Link} to={PATHS.cars} className="fs-4">Cars</Nav.Link>
            <Nav.Link as={Link} to={PATHS.login} className="fs-4">Login</Nav.Link>
            <Nav.Link as={Link} to={PATHS.register} className="fs-4">Register</Nav.Link>
            <Nav.Link as={Link} to={PATHS.logout} className="fs-4">Logout</Nav.Link>
            <Nav.Link as={Link} to={PATHS.create} className="fs-4">Add car</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}



