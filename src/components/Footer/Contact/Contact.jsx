import {Container} from "react-bootstrap";
import ContactLink from "./ContactLink.jsx";
import ContactHeader from "./ContactHeader.jsx";

/*Contact Section*/
function Contact(props){
  const contactArray = Object.entries(props.links);

  return (
    <section id="contact" className="py-5 contact-section text-center">
      <Container>
        <ContactHeader 
          contactTitleTxt = {props.info.title}
          contactDescTxt = {props.info.content}
        />
        <div className="d-flex justify-content-center gap-4 mt-3">
          {contactArray.map((link, index) =>{
            return (
              <ContactLink 
                key = {index}
                link = {link[1]}
                darkMode = {props.darkMode}
                class = "bi-envelope-fill"
                text = {link[0]}
                mail = {link[0] == "Email"}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Contact;