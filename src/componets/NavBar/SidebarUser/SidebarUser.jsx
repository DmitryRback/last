import React from "react";
import {NavLink} from "react-router-dom";
import avatar from './../../../assets/img/user.jpg'
import u from './SidebarUser.module.css'

const BarUser = (props) => {
    return (
        <div className={u.barUser}>
            <NavLink to={'/profile/' + props.id}>
                <img onClick={() => props.goToProfile(props.id)} src={!props.fullProfile ? avatar
                    : (!props.fullProfile.photos.small ? avatar : props.fullProfile.photos.small)}/>
            </NavLink>
            <div>{props.login}</div>

        </div>
    )
}

export default BarUser;