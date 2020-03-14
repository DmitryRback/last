import React from 'react';
import pr from './MyPosts.module.css';
import Post from './Post/Post'
import {AddPostsFormRedux} from "./PostsForm";

function Posts(props) {
    let postElements = props.postsArr.map(p =>
        <Post message={p.message} key={p.id} likeCount={p.likesCount}/>);

    let AddUserPost = (value) => {
        props.addPostActionCreator(value.postText)
    };
    return (
        <div className={pr.post}>
            <h2>My posts</h2>
            <AddPostsFormRedux onSubmit={AddUserPost}/>
            <div className={pr.post}>
                {postElements}
            </div>
        </div>
    );
}

export default Posts;
