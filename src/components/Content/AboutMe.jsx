import {Container} from "react-bootstrap";

/*AboutMe Section*/
function AboutMe (){
    return (
        <section id="about" className="py-5">
            <Container className="text-center">
            <h3>About Me</h3>
            <p className="mt-3">
                I’m an entry-level software developer with experience in full-stack development, data analysis, and cybersecurity fundamentals. I enjoy building applications that combine creativity with functionality.
            </p>
            </Container>
        </section>
    );
}

export default AboutMe;