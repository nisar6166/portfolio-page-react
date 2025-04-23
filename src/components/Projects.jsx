import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A full-featured online store with cart functionality",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "public/images/ecommerce.jpg",
      link: "#"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Responsive portfolio built with React and Bootstrap",
      technologies: ["React", "Bootstrap"],
      image: "public/images/portfolio.png",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="section-title">My Projects</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {projects.map(project => (
            <Col key={project.id}>
              <Card className="h-100 project-card shadow-sm">
                <Card.Img variant="top" src={project.image} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="mb-3">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} bg="primary" className="me-2">{tech}</Badge>
                    ))}
                  </div>
                  <Button variant="outline-primary" href={project.link}>View Project</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}