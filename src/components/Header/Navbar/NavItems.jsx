import {Nav} from "react-bootstrap";
import NavLink from "./NavLink.jsx";

function NavItems (){
    return (
        <Nav className="ms-auto">
            <NavLink link = "#about" text = "About" />
            <NavLink link = "#projects" text = "Projects" />
            <NavLink link = "#contact" text = "Contact" />
        </Nav>
    );
}

export default NavItems;