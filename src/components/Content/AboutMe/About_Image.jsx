import {Image} from "react-bootstrap";

function AboutImg (props){
    return(
        <Image src={props.img} 
            alt={props.alt}
            className={`${props.right ? "float-right" : "float-left"} aboutImg`} thumbnail fluid/>
    );
}

export default AboutImg;