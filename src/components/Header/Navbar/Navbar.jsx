import {Container, Navbar} from "react-bootstrap";
import Brand from "./Brand.jsx";
import Button from "./DarkModeButton.jsx";
import NavItems from "./NavItems.jsx";

/*Navbar*/
function HeaderNavbar (props){
    return(
      <Navbar variant="dark" expand="md" expanded={props.expanded} className="shadow-sm sticky-top navbar">
        <Container>
          <Brand link = "#home" text = {`${props.info.fName} ${props.info.lName}`}/>
          <div className="d-flex align-items-center">
            <Button 
              darkMode={props.darkMode}
              toggleTheme={props.toggleTheme}
            />
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