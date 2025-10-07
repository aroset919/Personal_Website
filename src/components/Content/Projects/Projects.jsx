import {Container, Row} from "react-bootstrap";
import Project_Item from "./Project_Item.jsx";

/*Projects Section*/
function Projects (props){
    const projectArray = Object.values(props.info);

    return (
        <section id="projects" className="py-5 projects-section">
            <Container>
            <h3 className="text-center mb-4">Projects</h3>
            <Row>
                {projectArray.map((project, index) => {
                return (
                    <Project_Item 
                    key={index}
                    projectTitle={project.title}
                    projectDesc={project.description}
                    text={project.link_text}
                    link={project.link}
                />
                );
            })}
            </Row>
            </Container>
        </section>
    );
}

export default Projects;