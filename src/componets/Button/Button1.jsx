import React from "react";
import b from './Button1.module.css'
const button1 = (props) => {
    return(
        <button className={b.btn} onClick={props.onClick}>{props.text}</button>
    )
}

export default button1;