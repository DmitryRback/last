import React from 'react';
import {addPostActionCreator} from "../../../Redux/ProfileReducer";
import Posts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return{
        newPostText: state.profilePage.newPostText,
        postsArr: state.profilePage.posts,
    }
}

export default connect(mapStateToProps, {addPostActionCreator})(Posts)
