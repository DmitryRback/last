import React from 'react';
import hd from './Header.module.css';
import logo from './../../assets/img/logos.svg'
import {NavLink} from "react-router-dom";
import menu from './../../assets/img/menu.png'
import person from './../../assets/img/baseline_person_outline_white_18dp.png'
import Icon from '@mdi/react';
import {mdiBackburger} from '@mdi/js';
import {LoginBlock} from "./LoginBlock/LoginBlock";

const Header = (props) => {
    return (
        <header className={hd.header}>
            <div className={hd.logo}>
                <img src={logo}/>
            </div>
            <div className={hd.menu}>
                <Icon path={mdiBackburger} size={'28px'} color={"white"}  onClick={props.changeVisibleNavBar}/>
            </div>
            <LoginBlock isAuth={props.isAuth} id={props.id} LogoutThunk={props.LogoutThunk} profile={props.profile}/>
            {/*<div className={hd.login_block}>*/}
            {/*    {props.isAuth ? <div className={hd.login}>*/}
            {/*            <button className={hd.exit} onClick={props.LogoutThunk}>Exit</button>*/}
            {/*            /!*<NavLink to={'/profile/' + props.id}>*!/*/}
            {/*            /!*    <img onClick={() => props.goToProfile(props.id)} src={!props.fullProfile ? avatar*!/*/}
            {/*            /!*        : (!props.fullProfile.photos.small ? avatar : props.fullProfile.photos.small)}/>*!/*/}
            {/*            /!*</NavLink>*!/*/}
            {/*            /!*<div>{props.login}</div>*!/*/}

            {/*        </div>*/}
            {/*        : <NavLink to={'/login'} className={hd.login_btn}>*/}
            {/*            <div><img src={person}/>Login</div>*/}
            {/*            </NavLink>}*/}

            {/*</div>*/}
        </header>
    );
}

export default Header;
