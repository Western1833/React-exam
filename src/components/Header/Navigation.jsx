import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <header>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">CarSpecs</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">Login</Nav.Link>
            <Nav.Link href="#pricing">Register</Nav.Link>
            <Nav.Link href="#pricing">Logout</Nav.Link>
            <Nav.Link href="#pricing">Add car</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

