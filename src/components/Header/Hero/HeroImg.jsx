import {Image} from "react-bootstrap";

function HeroImg (){
    return(
        <Image src="/src/assets/profile-pic.jpg" 
            alt="Profile pic" 
            className="float-left heroImg" thumbnail fluid/>
    );
}

export default HeroImg;