import {Row, Col} from "react-bootstrap";
import A_Image from "./About_Image.jsx";
import A_Text from "./AboutText.jsx";

function About_Section (props){
    const aboutArray=[];

    if(props.right){
        aboutArray.push(<A_Text text={props.text}/>);
        aboutArray.push(                    
        <A_Image 
            right={props.right} 
            img={props.image}
            alt={props.alt}
        />);
        aboutArray.push(<div></div>);
    }else{
        aboutArray.push(<div></div>);
        aboutArray.push(                    
        <A_Image 
            right={props.right} 
            img={props.image}
            alt={props.alt}
        />);
        aboutArray.push(<A_Text text={props.text}/>);
    }

    return (
        <Row className="mb-5">
            <Col md={props.right ? 7 : 1}>
                {aboutArray[0]}
            </Col>
            <Col md={4}>
                {aboutArray[1]}
            </Col>
            <Col md={props.right ? 1 : 7}>
                {aboutArray[2]}
            </Col>
        </Row>
    )
}

export default About_Section;