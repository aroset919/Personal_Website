import {Button} from "react-bootstrap";

function NavButton (props){
    return (
        <Button
            variant="outline-light"
            size="sm"
            className="me-2"
            onClick={props.toggleTheme}
        >
            <i className={props.darkMode ? "bi bi-sun-fill" : "bi bi-moon-fill"}></i>
        </Button>
    );
}

export default NavButton;