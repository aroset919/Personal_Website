import {Container, Badge} from "react-bootstrap";

/*Skills Section*/
function Skills (){
    return (
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
    );
}

export default Skills;