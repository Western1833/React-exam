import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <header>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/" className="fs-4">CarSpecs</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/" className="fs-4">Home</Nav.Link> {/* Adjust font size using 'fs-5' */}
            <Nav.Link href="#features" className="fs-4">Login</Nav.Link>
            <Nav.Link href="#pricing" className="fs-4">Register</Nav.Link>
            <Nav.Link href="#pricing" className="fs-4">Logout</Nav.Link>
            <Nav.Link href="#pricing" className="fs-4">Add car</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}


