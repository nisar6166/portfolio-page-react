import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

export default function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="home" smooth={true}  duration={300} offset={-70}>Home</Nav.Link>
            <Nav.Link as={Link} to="about" smooth={true} duration={300} offset={-70}>About</Nav.Link>
            <Nav.Link as={Link} to="skills" smooth={true} duration={300} offset={-70}>Skills</Nav.Link>
            <Nav.Link as={Link} to="projects" smooth={true} duration={300} offset={-70}>Projects</Nav.Link>
            <Nav.Link as={Link} to="contact" smooth={true} duration={300} offset={-70}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}