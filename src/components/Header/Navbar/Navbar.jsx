import {Container, Navbar} from "react-bootstrap";
import Brand from "./Brand.jsx";
import Button from "./Button.jsx";
import NavItems from "./NavItems.jsx";

/*Navbar*/
function HeaderNavbar (props){
    return(
      <Navbar style={{ backgroundColor: "#023E8A" }} variant="dark" expand="md" expanded={props.expanded} className="shadow-sm sticky-top">
        <Container>
          <Brand link = "#home" text = "Aleena Torres"/>
          <div className="d-flex align-items-center">
            <Button />
            <Navbar.Toggle onClick={() => props.setExpanded(props.expanded ? false : true)} />
          </div>
          <Navbar.Collapse>
            <NavItems />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default HeaderNavbar;