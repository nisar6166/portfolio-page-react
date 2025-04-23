import { Container, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="hero-section bg-primary text-white">
      <Container className="text-center py-5">
        <h1 className="display-3 fw-bold mb-3">Hi, I'm <span className="text-warning">Nisar Ali</span></h1>
        <h2 className="h4 mb-4">Full Stack Web Developer</h2>
        <div className="d-flex justify-content-center gap-3 mb-4">
          <a href="https://github.com" className="text-white"><FaGithub size={28} /></a>
          <a href="https://linkedin.com" className="text-white"><FaLinkedin size={28} /></a>
        </div>
        <Button variant="warning" className="me-2" as="a" href="#projects">View My Work</Button>
        <Button variant="outline-light" as="a" href="/resume.pdf" download>
          <FaFileDownload className="me-2" /> Download Resume
        </Button>
      </Container>  
    </section>
  );
}