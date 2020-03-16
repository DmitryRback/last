import React from 'react';
import {connect} from "react-redux";
import NavBar from "./NavBar";
import {getProfile} from "../../Redux/ProfileReducer";
import {compose} from "redux";

class NavBarContainer extends React.Component{
    goToProfile = (id) =>{
        this.props.getProfile(id)
    }
    render() {
        return(
            <NavBar {...this.props} goToProfile={this.goToProfile} navBar={this.props.navBar}/>
            )
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.siteBar.friends,
        id: state.auth.userId,
        profile: state.profilePage.profile,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        navBar: state.siteBar.navBar
    }
}

export default compose(
    connect(mapStateToProps, {getProfile,}),

)(NavBarContainer)
