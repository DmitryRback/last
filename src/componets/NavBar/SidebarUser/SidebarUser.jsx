import React from "react";
import {NavLink} from "react-router-dom";
import avatar from './../../../assets/img/user.jpg'
import u from './SidebarUser.module.css'

const BarUser = (props) => {
    if(props.profile === null){
        return (<div>loading...</div>)
    }
    return (
        <div className={u.barUser}>
            <NavLink to={'/profile'}>
                <img onClick={() => props.goToProfile(props.id)} src={!props.profile ? avatar
                    : (!props.profile.photos.small ? avatar : props.profile.photos.small)}/>
            </NavLink>
            <div>{ props.profile.fullName }</div>

        </div>
    )
}

export default BarUser;