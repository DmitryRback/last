import React from "react";
import {NavLink} from "react-router-dom";
import hd from './LoginBtn.module.css'

export const LoginBtn = (props) => {
    return (
        <div>
            <NavLink to={'/login'}  className={hd.login_btn}>
                <div><img src={props.person}/>Login</div>
            </NavLink>
        </div>
    )
}