import {Container, Badge} from "react-bootstrap";
import Skill_Item from "./Skill_Item";

/*Skills Section*/
function Skills (){
    return (
      <section id="skills" className="py-5">
        <Container className="text-center">
          <h3>Skills</h3>
          <div className="mt-3 d-flex flex-wrap justify-content-center gap-2">
            <Skill_Item skill="JavaScript" />
            <Skill_Item skill="Python" />
            <Skill_Item skill="React" />
            <Skill_Item skill="Node.js" />
            <Skill_Item skill="SQL" />
            <Skill_Item skill="Cybersecurity" />
          </div>
        </Container>
      </section>
    );
}

export default Skills;