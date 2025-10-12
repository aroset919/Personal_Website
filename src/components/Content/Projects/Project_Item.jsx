import {Col, Card} from "react-bootstrap";
import ProjectImg from "./Project_Image";

function Project_Item (props){
    return(
        <Col md={props.count} className="mb-4">
        <Card className="h-100 shadow theme-card">
            <Card.Body>
            <Card.Title>{props.projectTitle}</Card.Title>
            <Card.Text>{props.projectDesc}</Card.Text>
            <ProjectImg 
                img={props.image}
                alt={props.alt}
            />
            <Card.Link href={props.link} className="theme-link">{props.text}</Card.Link>
            </Card.Body>
        </Card>
        </Col>
    );
}

export default Project_Item;