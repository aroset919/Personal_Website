function ContactHeader (props){
    return (
        <div>
            <h3>{props.contactTitleTxt}</h3>
            <p className="mt-3">{props.contactDescTxt}</p>  
        </div>
    );
}

export default ContactHeader;