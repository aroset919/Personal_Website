import { Offcanvas } from "react-bootstrap";
import Skill_Item from "./Skill_Item";

function Skill_Canvas(props){
  const skillList = Object.entries(props.info);

  return (
  <Offcanvas 
    show={props.show} 
    onHide={props.close}
    className="theme-dark"
  >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title><h1>Skills</h1></Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body>
      <div className="mt-3 justify-content-center">
        {skillList.map((header, index) =>{
          return (
            <div key={index}>
            <Skill_Item key={index} skill={header[0]} class="skill-header" />
            {header[1].map((skill, ind) =>{
              return (
                  <Skill_Item key={ind} skill={skill} class="skill-item"/>
              )
            })}
            </div>
          );
        })}
      </div>
      </Offcanvas.Body>

  </Offcanvas>
  );
}

export default Skill_Canvas;