import {Container} from "react-bootstrap";
import ProjectButton from "./ProjectsButton.jsx";
import Intro from "./Intro";

/*Hero Section */
function Hero (props){
    return (
        <section className="text-center py-5 hero-section">
            <Container>
                <Intro 
                    headerText = {props.info.introHead}
                    descripText= {props.info.introText}
                />
                <ProjectButton 
                    heroBtnText = "View My Work"
                />
            </Container>
        </section>
    );
}

export default Hero;