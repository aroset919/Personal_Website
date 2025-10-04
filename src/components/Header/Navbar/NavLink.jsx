import {Nav} from "react-bootstrap";

function NavLink (props){
    return (
        <Nav.Link href={props.link} onClick={() => props.setExpanded(false)} className="theme-nav-link">{props.text}</Nav.Link>
    );
}

export default NavLink;