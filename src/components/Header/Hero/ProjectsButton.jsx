import {Button} from "react-bootstrap";

function ProjectsButton (props){
    return (
        <Button className="mt-3 fw-bold theme-button" href="#projects">
            {props.heroBtnText}
        </Button>
    );
}

export default ProjectsButton;