import {Container} from "react-bootstrap";
import ContactLink from "./ContactLink.jsx";
import ContactHeader from "./ContactHeader.jsx";

/*Contact Section*/
function Contact(props){
  const contactArray = Object.entries(props.links);

  return (
    <section id="contact" className="pt-4 pb-3
     contact-section text-center">
      <Container>
        <ContactHeader 
          contactTitleTxt = {props.info.title}
          contactDescTxt = {props.info.content}
        />
        <div className="d-flex justify-content-center gap-4 mt-3">
          {contactArray.map((link, index) =>{
            var class_name = "";

            switch(link[0]){
              case "Email":
                class_name = "bi-envelope-fill";
                break;
              case "GitHub":
                class_name = "bi-github";
                break;
              case "LinkedIn":
                class_name = "bi-linkedin";
                break;
            }

            return (
              <ContactLink 
                key = {index}
                link = {link[1]}
                darkMode = {props.darkMode}
                class = {class_name}
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