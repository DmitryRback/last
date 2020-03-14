import React from 'react';
import d from './Message.module.css';
const Messages = (props) =>{
    return (
        <div className={d.message}><p className={d.me}>{props.message}</p></div>
    )
}
export default Messages;