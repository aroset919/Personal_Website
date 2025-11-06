import {Card} from "react-bootstrap";
import ProjectButton from "./ProjectsButton.jsx";
import Intro from "./Intro";
import Skills from "../../Content/Skills/Skills.jsx";

function HeroBox (props) {
  return (
    <div className="hero-box-container">
      <Card className="hero-box">
        <Card.Body>
            <Intro
                headerText = {props.info.introHead}
                descripText= {props.info.introText} 
            />
            <div className="d-flex justify-content-center gap-3">
              <ProjectButton 
                  heroBtnText = "View My Work"
              />
              <Skills 
                info={props.skillInfo}
              />
            </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HeroBox;