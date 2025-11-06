import {Button} from "react-bootstrap";

function SkillsButton (props){
    return (
        <Button className="mt-3 fw-bold theme-button" onClick={props.click}>
            {props.btnText}
        </Button>
    );
}

export default SkillsButton;