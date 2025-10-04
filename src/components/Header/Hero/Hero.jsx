import {Container} from "react-bootstrap";
import ProjectButton from "./ProjectsButton.jsx";
import Intro from "./Intro";

/*Hero Section */
function Hero (){
    return (
        <section className="text-center py-5 hero-section">
            <Container>
                <Intro />
                <ProjectButton />
            </Container>
        </section>
    );
}

export default Hero;