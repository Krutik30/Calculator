function Display(props){

    return(
        <div className="Display">
            <p className="text-display expression">{props.props.expression}</p>
            <hr />
            <p className="text-display" id="display">{props.props.answer}</p>
        </div>
    )
}

export default Display;