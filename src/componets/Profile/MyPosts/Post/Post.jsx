import React from 'react';
import pr from './Post.module.css';
import user from './../../../../assets/img/user.jpg'

const Post = (props) => {
    return (
        <div className={pr.item}>
            <div className={pr.item_content}>
                <div className={pr.name_ava}>
                    <img src={user}/>
                    <p>name</p>
                </div>
                <div className={pr.message}>
                    {props.message}
                </div>
                    <div className={pr.likes}>
                        <p>
                            Like {props.likeCount}
                        </p>
                    </div>


            </div>

        </div>

    );
}

export default Post;
