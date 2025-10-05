import {Container} from "react-bootstrap";
import ContactLink from "./ContactLink.jsx";
import ContactHeader from "./ContactHeader.jsx";

/*Contact Section*/
function Contact(props){
    return (
      <section id="contact" className="py-5 contact-section text-center">
        <Container>
          <ContactHeader />
          <div className="d-flex justify-content-center gap-4 mt-3">
            <ContactLink 
              link = "mailto:arose919@gmail.com"
              darkMode = {props.darkMode}
              class = "bi-envelope-fill"
              text = "Email"
              mail = {true}
            />

            <ContactLink 
              link = "https://github.com/"
              darkMode = {props.darkMode}
              class = "bi-github"
              text = "GitHub"
              mail = {true}
            />

            <ContactLink 
              link = "https://linkedin.com/"
              darkMode = {props.darkMode}
              class = "bi-linkedin"
              text = "LinkedIn"
              mail = {true}
            />
          </div>
        </Container>
      </section>
    );
}

export default Contact;