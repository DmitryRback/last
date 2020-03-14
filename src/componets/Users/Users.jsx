import React from "react";
import user from './Users.module.css';
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

const Users = ({totalItemsCount, pageSize, onPageChange, currentPage, ...props}) => {
    return (
        <div className={user.users_container}>
            <Paginator totalItemsCount={totalItemsCount} pageSize={pageSize} onPageChange={onPageChange}
                       currentPage={currentPage}/>
            <div className={user.users}>
                {
                    props.users.map((u) => <User key={u.id} user={u} Progress={props.Progress}
                                                 unfollow={props.unfollow} follow={props.follow}/>
                    )
                }
            </div>

        </div>
    )
}


export default Users;