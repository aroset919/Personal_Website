import {Container} from "react-bootstrap";
import A_Section from "./About_Section.jsx";

/*AboutMe Section*/
function AboutMe (props){
    const aboutContent = props.info.content;

    return (
        <section id="about" className="py-5 aboutme-section">
            <Container className="text-center aboutme-container">
                <h1>{props.info.title}</h1>
                <A_Section 
                    text={aboutContent.text}
                    image={aboutContent.image}
                    alt={aboutContent.alt}
                />
            </Container>
        </section>
    );
}

export default AboutMe;