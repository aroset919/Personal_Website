import {Container, Row} from "react-bootstrap";
import Project_Item from "./Project_Item.jsx";

/*Projects Section*/
function Projects (){
    return (
        <section id="projects" className="py-5 projects-section">
            <Container>
            <h3 className="text-center mb-4">Projects</h3>
            <Row>
                <Project_Item 
                    projectTitle="Project One"
                    projectDesc="A web app that does amazing things."
                    text="View on GitHub"
                    link="#"
                />

                <Project_Item
                    projectTitle="Project Two"
                    projectDesc="Another cool project with real-world impact."
                    text="Live Demo"
                    link="#"
                />

                <Project_Item
                    projectTitle="Project Three"
                    projectDesc="A creative coding experiment."
                    text="View on GitHub"
                    link="#"
                />
            </Row>
            </Container>
        </section>
    );
}

export default Projects;