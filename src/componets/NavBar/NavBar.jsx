import React from 'react';
import nb from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
import BarUser from "./SidebarUser/SidebarUser";
import Icon from '@mdi/react';
import { mdiMusicNoteEighth } from '@mdi/js';
import { mdiCogOutline } from '@mdi/js';
import { mdiAccountMultiple } from '@mdi/js';
import { mdiBellOutline } from '@mdi/js';
import { mdiEmailOutline } from '@mdi/js';
import { mdiAccountOutline } from '@mdi/js';

const NavBar = (props) => {
    return (
        <div className={`${nb.nav}  ${props.navBar && nb.on}`}>
            <nav className={nb.nav_nav}>
                <div>
                    {props.isAuth && <BarUser id={props.id} goToProfile={props.goToProfile}
                                              profile={props.profile} login={props.login}/>}
                </div>
                <div className={nb.nav_btn}>
                    <div className={nb.item + ' ' + nb.first}>
                        <NavLink to='/profile' activeClassName={nb.active}>
                            <Icon path={mdiAccountOutline} size={'32px'} color="#ed104b"/>
                            Profile</NavLink>
                    </div>
                    <div className={nb.item}>
                        <NavLink to='/dialogs' activeClassName={nb.active}>
                            <Icon path={mdiEmailOutline} size={'32px'} color="#8224e3"/>
                            Messages</NavLink>
                    </div>
                    <div className={nb.item}>
                        <NavLink to='/news' activeClassName={nb.active}>
                            <Icon path={mdiBellOutline} size={'32px'} color="#f40000"/>
                            News</NavLink>
                    </div>
                    <div className={nb.item}>
                        <NavLink to='/users' activeClassName={nb.active}>
                            <Icon path={mdiAccountMultiple} size={'32px'} color="#0018f4"/>
                            Users</NavLink>
                    </div>
                    <div className={nb.item}>
                        <NavLink to='/music' activeClassName={nb.active}>
                            <Icon path={mdiMusicNoteEighth} size={'32px'} color="#8224e3"/>
                            Music</NavLink>
                    </div>
                    <div className={nb.item}>
                        <NavLink to='/settings' activeClassName={nb.active} >
                            <Icon path={mdiCogOutline} size={'32px'} color="#59d600"/>
                            Settings</NavLink>
                    </div>
                </div>
                <div className={nb.bottom}>
                    <Friends friends={props.friends}/>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
