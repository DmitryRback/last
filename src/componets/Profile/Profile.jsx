import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsComponent from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div >
            <ProfileInfo savePhoto={props.savePhoto} isAuth={props.isAuth}  {...props} />
            <PostsComponent  />
        </div>
    );
}

export default Profile;
