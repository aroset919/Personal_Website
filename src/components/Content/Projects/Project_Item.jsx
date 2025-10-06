import {Col, Card} from "react-bootstrap"

function Project_Item (props){
    return(
        <Col md={4} className="mb-4">
        <Card className="h-100 shadow theme-card">
            <Card.Body>
            <Card.Title>{props.projectTitle}</Card.Title>
            <Card.Text>{props.projectDesc}</Card.Text>
            <Card.Link href={props.link} className="theme-link">{props.text}</Card.Link>
            </Card.Body>
        </Card>
        </Col>
    );
}

export default Project_Item;