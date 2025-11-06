function ContactLink (props){
    return (
        <a href={props.link} 
            target={props.mail ? "_self" : "_blank"} 
            rel={props.mail ? "" : "noreferrer"} 
            className={"btn me-3 btn-light btn-outline-dark"}
        >
            <i className={`bi ${props.class}`}></i> {props.text}
        </a>
    );
}

export default ContactLink;