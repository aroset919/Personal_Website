import {Card} from "react-bootstrap";
import ProjectButton from "./ProjectsButton.jsx";
import Intro from "./Intro";

function HeroBox (props) {
  return (
    <div className="hero-box-container">
      <Card className="hero-box">
        <Card.Body>
            <Intro
                headerText = {props.info.introHead}
                descripText= {props.info.introText} 
            />
            <ProjectButton 
                heroBtnText = "View My Work"
            />
        </Card.Body>
      </Card>
    </div>
  );
};

export default HeroBox;