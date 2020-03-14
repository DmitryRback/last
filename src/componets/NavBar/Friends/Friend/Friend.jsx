import React from "react";
import fr from './Friend.module.css'

const Friend = (props) =>{
    return (
        <div className={fr.user}>
        <img src={props.img}/>
        <p>{props.name}</p>
        </div>
    )
}
export default Friend;