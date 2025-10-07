import {Container, Badge} from "react-bootstrap";
import Skill_Item from "./Skill_Item";

/*Skills Section*/
function Skills (props){
  return (
    <section id="skills" className="py-5">
      <Container className="text-center">
        <h3>Skills</h3>
        <div className="mt-3 d-flex flex-wrap justify-content-center gap-2">
          {props.info.map((skill, index) =>{
            return (
              <Skill_Item key={index} skill={skill} />
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Skills;