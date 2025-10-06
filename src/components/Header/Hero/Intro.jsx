function Intro(props){
    return (
        <div>
            <h2 className="display-4 fw-bold">{props.headerText}</h2>
            <p className="lead mt-3">
                {props.descripText}
            </p>
        </div>
    );
}

export default Intro;