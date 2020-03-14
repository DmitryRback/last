import React from "react";
import us from './Users.module.css'
import userPhoto from './../../assets/img/user.jpg'
import {NavLink} from "react-router-dom";

const User = ({user, key, Progress, unfollow,follow}) => {
    return (
        <div className={us.user} key={key}>
            <div className={us.avatar}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} alt=''/>
                </NavLink>
                <div className={us.name}>
                    <p>{user.name}</p>
                </div>
            </div>
                <div className={us.button}>
                    {user.followed
                        ? <button disabled={Progress.some(id => id == user.id)}
                                  onClick={() => {
                                      unfollow(user.id)
                                  }

                                  }>Unfollow</button>

                        : <button disabled={Progress.some(id => id == user.id)}
                                  onClick={() => {
                                      follow(user.id)
                                  }
                                  }>Follow</button>}
                </div>
            </div>
    )
}



export default User;