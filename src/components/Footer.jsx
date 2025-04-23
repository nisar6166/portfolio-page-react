import { Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container className="text-center">
        <div className="social-icons mb-3">
          <a href="https://github.com" className="text-white mx-2"><FaGithub size={20} /></a>
          <a href="https://www.linkedin.com/jobs/" className="text-white mx-2"><FaLinkedin size={20} /></a>
          <a href="https://twitter.com" className="text-white mx-2"><FaTwitter size={20} /></a>
        </div>
        <p className="mb-0">© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </Container>
    </footer>
  );
}