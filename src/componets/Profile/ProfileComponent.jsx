import React from 'react';
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getProfile, getStatus, savePhoto, saveProfile, updateProfileStatus, updateStatus} from "../../Redux/ProfileReducer";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";

class ProfileComponent extends React.Component {
    refreshProfile = () => {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId
            if(!userId){
                this.props.history.push('/login')
            }
        };
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }
    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            this.refreshProfile()
        }

    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile} status={this.props.status}
                         updateStatus={this.props.updateStatus} isAuth={this.props.isAuth}
                isOwner={!this.props.match.params.userId } savePhoto={this.props.savePhoto}
                         saveProfile={this.props.saveProfile}
                         updateProfile={this.props.updateProfile} updateProfileStatus={this.props.updateProfileStatus}/>
            </div>
        );
    }

}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
        updateProfile: state.profilePage.updateProfile
    }
}
export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto, saveProfile, updateProfileStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileComponent)