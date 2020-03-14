import React from 'react';
import d from './DialogsUser.module.css';
import {NavLink} from "react-router-dom";

const DialogsUser = (props) => {
    return (
        <div className={d.dialog}>
            <NavLink to={`/dialogs/${props.id}`}>
                <div className={d.avatar}>
                    <img src={props.img} alt=""/>
                </div>
                <div className="name">
                    {props.name}
                </div>
            </NavLink>
        </div>
    )
}

export default DialogsUser;
