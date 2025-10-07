import {Container} from "react-bootstrap";

/*AboutMe Section*/
function AboutMe (props){
    return (
        <section id="about" className="py-5">
            <Container className="text-center">
            <h3>{props.info.title}</h3>
            <p className="mt-3">{props.info.content}</p>
            </Container>
        </section>
    );
}

export default AboutMe;