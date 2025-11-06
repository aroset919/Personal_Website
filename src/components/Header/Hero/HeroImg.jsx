import {Image} from "react-bootstrap";
import profilePic from "/images/profile-pic.jpg";

function HeroImg (){
    return(
        <Image src={profilePic} 
            alt="Profile pic" 
            className="float-left heroImg" roundedCircle fluid/>
    );
}

export default HeroImg;