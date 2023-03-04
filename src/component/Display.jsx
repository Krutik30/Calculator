function Display(props){

    return(
        <div className="Display">
            <p className="text-display expression">{props.answer}</p>
            <hr />
            <p className="text-display" id="display">{props.longS}</p>
        </div>
    )
}

export default Display;