
import React from 'react'

function Input(props) {

    return(
        <>
        <div>
            <input type={props.type} className={props.className} name={props.name} placeholder={props.placeholder} placeholder={props.placeholder}/>
        </div>
        </>
    )
}

export default Input