import {Container, Row, Col, Card} from "react-bootstrap";

/*Projects Section*/
function Projects (){
    return (
        <section id="projects" className="py-5 projects-section">
            <Container>
            <h3 className="text-center mb-4">Projects</h3>
            <Row>
                <Col md={4} className="mb-4">
                <Card className="h-100 shadow theme-card">
                    <Card.Body>
                    <Card.Title>Project One</Card.Title>
                    <Card.Text>A web app that does amazing things.</Card.Text>
                    <Card.Link href="#" className="theme-link">View on GitHub</Card.Link>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4} className="mb-4">
                <Card className="h-100 shadow theme-card">
                    <Card.Body>
                    <Card.Title>Project Two</Card.Title>
                    <Card.Text>Another cool project with real-world impact.</Card.Text>
                    <Card.Link href="#" className="theme-link">Live Demo</Card.Link>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4} className="mb-4">
                <Card className="h-100 shadow theme-card">
                    <Card.Body>
                    <Card.Title>Project Three</Card.Title>
                    <Card.Text>A creative coding experiment.</Card.Text>
                    <Card.Link href="#" className="theme-link">View on GitHub</Card.Link>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            </Container>
        </section>
    );
}

export default Projects;