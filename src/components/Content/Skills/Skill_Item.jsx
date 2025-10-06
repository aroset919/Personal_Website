import {Badge} from "react-bootstrap";

function Skill_Item (props){
    return (
        <Badge className="theme-badge">{props.skill}</Badge>
    );
}

export default Skill_Item;