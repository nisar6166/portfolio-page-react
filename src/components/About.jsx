import { Container, Row, Col, Image } from 'react-bootstrap';

export default function About() {
    return (
        <section id="about" className="py-5">
            <Container>
                <h2 className="section-title">About Me</h2>
                <Row className="align-items-center">
                    <Col md={6} className="mb-4 mb-md-0">
                        <Image src="public/images/fswd aboutme.png" roundedCircle fluid className="shadow" />
                    </Col>
                    <Col md={6}>
                        <h3 className="mb-3">Who am I?</h3>
                        <p className="lead">
                            I'm a passionate developer with experience in building web applications.
                        </p>
                        <p>
                            I have hands-on experience building responsive and interactive web apps using technologies like HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB. I'm also familiar with version control using Git and GitHub, and I’m comfortable working in collaborative environments.
                        </p>
                        <div className="mt-4">
                            <h4>Personal Info</h4>
                            <ul className="list-unstyled">
                                <li><strong>Name:</strong> Nisar Ali</li>
                                <li><strong>Email:</strong> nisarvilangalil1993@gmail.com</li>
                                <li><strong>Location:</strong> Kottakkal, Malappuram</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}