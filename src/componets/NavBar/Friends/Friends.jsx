import React from 'react';
import fr from './Friends.module.css';
import Friend from "./Friend/Friend";


const Friends = (props) => {
    let friendsElement = props.friends.map(f => <Friend name={f.name} key={f.id} id={f.id} img={f.img}/>)

    return (
        <div>
            <div className={fr.friends}>
                <p>Friends</p>
            </div>
            <div className={fr.users}>
                {friendsElement}
            </div>
        </div>
    )
}


export default Friends;
