import {Container} from "react-bootstrap";
import ProjectButton from "./ProjectsButton.jsx";
import Intro from "./Intro";

/*Hero Section */
function Hero (){
    return (
        <section className="text-center py-5 hero-section">
            <Container>
                <Intro 
                    headerText="Hi, I’m Aleena 👋"
                    descripText="I’m a Software Developer passionate about building innovative apps, solving problems, and exploring new technologies."
                />
                <ProjectButton 
                    heroBtnText = "View My Work"
                />
            </Container>
        </section>
    );
}

export default Hero;