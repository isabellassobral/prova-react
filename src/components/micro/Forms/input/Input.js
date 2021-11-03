
import React from 'react'

function Input(props) {

    return(
        <>
        <div className={"form-group" + props.className}>
            <label for={props.label} className={props.className}>{props.text}</label>
            <input type={props.type} className={props.className} id={props.id} name={props.name} placeholder={props.placeholder}/>
        </div>
        </>
    )
}

export default Input