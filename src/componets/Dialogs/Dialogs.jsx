import React from 'react';
import d from './Dialogs.module.css';
import DialogsUser from "./DialogsUser/DialogsUser";
import Messages from "./Messages/Message";
import {ReduxMessageForm} from "./Messages/MessageForm";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogsUser name={d.name} key={d.id} id={d.id} img={d.img}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Messages message={m.message} key={m.id} id={m.id}/>)
    let addNewMessage = (value) => {
        props.addMessageActionCreator(value.addNewMessage)
    }
    return (
        <div className={d.dialogs}>
            <div className={d.dialogs_item}>
                {dialogsElements}
            </div>
            <div className={d.messages}>
                {messagesElements}
                <ReduxMessageForm onSubmit={addNewMessage}/>
            </div>

        </div>
    );
}

export default Dialogs;
