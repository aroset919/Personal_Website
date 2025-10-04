import { useState, useEffect } from "react";
import { Container, Navbar, Nav, Button, Row, Col, Card, Badge } from "react-bootstrap";

export default function App() {
  const [expanded, setExpanded] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // Load theme preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    }
  }, []);

  // Save theme preference when it changes
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "theme-dark" : "theme-light"}>
      {/* Navbar */}
      <Navbar style={{ backgroundColor: "#023E8A" }} variant="dark" expand="md" expanded={expanded} className="shadow-sm sticky-top">
        <Container>
          <Navbar.Brand href="#home">Aleena Torres</Navbar.Brand>
          <div className="d-flex align-items-center">
            <Button
              variant="outline-light"
              size="sm"
              className="me-2"
              onClick={toggleTheme}
            >
              <i className={darkMode ? "bi bi-sun-fill" : "bi bi-moon-fill"}></i>
            </Button>
            <Navbar.Toggle onClick={() => setExpanded(expanded ? false : true)} />
          </div>
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link href="#about" onClick={() => setExpanded(false)} className="theme-nav-link">About</Nav.Link>
              <Nav.Link href="#projects" onClick={() => setExpanded(false)} className="theme-nav-link">Projects</Nav.Link>
              <Nav.Link href="#skills" onClick={() => setExpanded(false)} className="theme-nav-link">Skills</Nav.Link>
              <Nav.Link href="#contact" onClick={() => setExpanded(false)} className="theme-nav-link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section className="text-center py-5 hero-section">
        <Container>
          <h2 className="display-4 fw-bold">Hi, I’m Aleena 👋</h2>
          <p className="lead mt-3">
            I’m a Software Developer passionate about building innovative apps, solving problems, and exploring new technologies.
          </p>
          <Button className="mt-3 fw-bold theme-button" href="#projects">
            View My Work
          </Button>
        </Container>
      </section>

      {/* About Me */}
      <section id="about" className="py-5">
        <Container className="text-center">
          <h3>About Me</h3>
          <p className="mt-3">
            I’m an entry-level software developer with experience in full-stack development, data analysis, and cybersecurity fundamentals. I enjoy building applications that combine creativity with functionality.
          </p>
        </Container>
      </section>

      {/* Projects */}
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

      {/* Skills */}
      <section id="skills" className="py-5">
        <Container className="text-center">
          <h3>Skills</h3>
          <div className="mt-3 d-flex flex-wrap justify-content-center gap-2">
            <Badge className="theme-badge">JavaScript</Badge>
            <Badge className="theme-badge">Python</Badge>
            <Badge className="theme-badge">React</Badge>
            <Badge className="theme-badge">Node.js</Badge>
            <Badge className="theme-badge">SQL</Badge>
            <Badge className="theme-badge">Cybersecurity</Badge>
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="py-5 contact-section text-center">
        <Container>
          <h3>Contact</h3>
          <p className="mt-3">Let’s connect! Feel free to reach out via email or LinkedIn.</p>
          <div className="d-flex justify-content-center gap-4 mt-3">
            <a href="mailto:arose919@gmail.com"  className={`btn me-3 ${
          darkMode ? "btn-light" : "btn-outline-primary"
        }`}>
               <i className="bi bi-envelope-fill"></i> Email
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer"   className={`btn me-3 ${
          darkMode ? "btn-light" : "btn-outline-primary"
        }`}>
              <i className="bi bi-github"></i> GitHub
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer"   className={`btn me-3 ${
          darkMode ? "btn-light" : "btn-outline-primary"
        }`}>
              <i className="bi bi-linkedin"></i> LinkedIn
            </a>
          </div>
        </Container>
      </section>

      <footer className="text-center py-3 footer-section">
        © {new Date().getFullYear()} Aleena Torres. All rights reserved.
      </footer>
    </div>
  );
}