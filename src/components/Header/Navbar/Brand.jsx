import {Navbar} from "react-bootstrap";

function Brand (props){
    return(
        <Navbar.Brand href={props.link}>{props.text}</Navbar.Brand>
    );
}

export default Brand;