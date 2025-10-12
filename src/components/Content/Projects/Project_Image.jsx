import {Image} from "react-bootstrap";

function ProjectImg (props){
    return(
        <Image src={props.img} 
            alt={props.alt}
            className="projectImg" rounded fluid/>
    );
}

export default ProjectImg;