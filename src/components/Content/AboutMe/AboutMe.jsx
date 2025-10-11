import {Container} from "react-bootstrap";
import A_Section from "./About_Section.jsx";

/*AboutMe Section*/
function AboutMe (props){
    var right = false;
    const aboutContent = Object.values(props.info.content);

    return (
        <section id="about" className="py-5 aboutme-section">
            <Container className="text-center aboutme-container">
            <h3>{props.info.title}</h3>
            {aboutContent.map((x, ind)=>{
                right=!right;
                return (
                <A_Section 
                    key={ind}
                    right={right}
                    text={x.text}
                    image={x.image}
                    alt={x.alt}
                />
                );
            })}
            </Container>
        </section>
    );
}

export default AboutMe;