import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import { LogoutThunk, setAuthUserData, setFullProfile} from "../../Redux/AuthReducer";
import {withRouter} from "react-router-dom";
import {getProfile} from "../../Redux/ProfileReducer";
import {compose} from "redux";
import {changeVisibleNavBar} from "../../Redux/SiteBarReducer";

class HeaderContainer extends React.Component {

    changeVisibleNavBar = () =>{
        this.props.changeVisibleNavBar()
    }
    goToProfile = (id) =>{
        this.getProfile(id)
    }
    render() {
        return (
            <Header {...this.props} goToProfile={this.goToProfile} changeVisibleNavBar={this.changeVisibleNavBar}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        id: state.auth.userId,
        email: state.auth.email,
        fullProfile: state.auth.fullProfile,
    }
}
export default compose(
    connect(mapStateToProps, {setAuthUserData, setFullProfile, getProfile, LogoutThunk, changeVisibleNavBar}),
    withRouter
)(HeaderContainer)