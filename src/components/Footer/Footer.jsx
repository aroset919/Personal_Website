/*Footer Section*/
function Footer(props){
    return(
        <footer className="text-center py-3 footer-section">
            © {new Date().getFullYear()} {`${props.info.fName} ${props.info.lName} All rights reserved.`}
        </footer>
    );
}

export default Footer;