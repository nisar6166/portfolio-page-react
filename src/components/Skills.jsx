import { Container, Row, Col } from 'react-bootstrap';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiBootstrap, SiMongodb } from 'react-icons/si';

export default function Skills() {
  const skills = [
    { icon: <FaReact />, name: 'React' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <FaHtml5 />, name: 'HTML5' },
    { icon: <FaCss3Alt />, name: 'CSS3' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <SiBootstrap />, name: 'Bootstrap' },
    { icon: <SiMongodb />, name: 'MongoDB' }
  ];

  return (
    <section id="skills" className="bg-light py-5">
      <Container>
        <h2 className="section-title">My Skills</h2>
        <Row className="g-4">
          {skills.map((skill, index) => (
            <Col key={index} xs={6} sm={4} md={3} lg={2}>
              <div className="text-center p-3 skill-item">
                <div className="skill-icon text-primary">{skill.icon}</div>
                <h5>{skill.name}</h5>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}