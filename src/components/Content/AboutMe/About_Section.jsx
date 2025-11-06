import {Row, Col} from "react-bootstrap";
import A_Image from "./About_Image.jsx";
import A_Text from "./AboutText.jsx";

function About_Section (props){
    return (
        <Row className="mb-5">
            <Col className="a_section">
                <A_Image 
                    img={props.image}
                    alt={props.alt}
                />
                <A_Text text={props.text}/>
            </Col>
            <Col sm={0} md={0} lg={1}></Col>
        </Row>
    );
}

export default About_Section;