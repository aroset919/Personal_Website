import {Container} from "react-bootstrap";

/*Contact Section*/
function Contact(props){
    return (
      <section id="contact" className="py-5 contact-section text-center">
        <Container>
          <h3>Contact</h3>
          <p className="mt-3">Let’s connect! Feel free to reach out via email or LinkedIn.</p>
          <div className="d-flex justify-content-center gap-4 mt-3">
            <a href="mailto:arose919@gmail.com"  className={`btn me-3 ${
          props.darkMode ? "btn-light" : "btn-outline-primary"
        }`}>
               <i className="bi bi-envelope-fill"></i> Email
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer"   className={`btn me-3 ${
          props.darkMode ? "btn-light" : "btn-outline-primary"
        }`}>
              <i className="bi bi-github"></i> GitHub
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer"   className={`btn me-3 ${
          props.darkMode ? "btn-light" : "btn-outline-primary"
        }`}>
              <i className="bi bi-linkedin"></i> LinkedIn
            </a>
          </div>
        </Container>
      </section>
    );
}

export default Contact;