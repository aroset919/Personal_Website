import {useState} from "react";
import SkillsButton from "./SkillsButton";
import Skill_Canvas from "./Skills_Canvas";

/*Skills Section*/
function Skills (props){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div>
      <SkillsButton 
        btnText="View My Skills"
        click={handleShow}
      />

      <Skill_Canvas 
        close={handleClose}
        show={show}
        info = {props.info}
      />
    </div>
  );
}

export default Skills;