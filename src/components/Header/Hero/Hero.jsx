import {Container, Row, Col} from "react-bootstrap";
import HeroImg from "./HeroImg.jsx";
import HeroBox from "./HeroBox.jsx";
import background from "/images/backgroundimg.jpg";

/*Hero Section */
function Hero (props){
    const backgroundStyle={backgroundImage: `url(${background})`};
    return (
        <section id="home" className="text-center pb-5 hero-section"
            style={backgroundStyle}
        >
            <Container fluid>
                <Row>
                <Col  xs={12} sm={12} md={4}>
                    <HeroImg />
                </Col>
                <Col xs={0} sm={0} md={1}>
                </Col>
                <Col  xs={12} sm={12} md={6}>
                    <HeroBox info={props.info} skillInfo={props.skillInfo}/>
                </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Hero;