import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsComponent from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div >
            <ProfileInfo saveProfile={props.saveProfile} savePhoto={props.savePhoto} isAuth={props.isAuth}  {...props}
                         updateProfileStatus={props.updateProfileStatus}/>
            <PostsComponent  />
        </div>
    );
}

export default Profile;
