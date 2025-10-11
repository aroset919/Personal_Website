import {Container, Row, Col} from "react-bootstrap";
import HeroImg from "./HeroImg.jsx";
import HeroBox from "./HeroBox.jsx";

/*Hero Section */
function Hero (props){
    return (
        <section id="home" className="text-center pb-5 hero-section">
            <Container fluid>
                <Row>
                <Col  xs={12} sm={12} md={4}>
                    <HeroImg />
                </Col>
                <Col  xs={12} sm={12} md={8}>
                    <HeroBox info={props.info}/>
                </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Hero;