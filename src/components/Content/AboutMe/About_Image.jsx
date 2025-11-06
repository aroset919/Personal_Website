import {Figure, Image} from "react-bootstrap";

function AboutImg (props){
    return(
        <Figure className="float-right aboutImg">
            <Image src={props.img} 
            alt={props.alt}
            className="border-0"
            thumbnail fluid
            />

            <Figure.Caption>
                {props.alt}
            </Figure.Caption>
        </Figure>
    );
}

export default AboutImg;