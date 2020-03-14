import React, {useEffect, useState} from 'react';
import pr from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() =>{
        setStatus(props.status)}, [props.status]
    )

    const activateEditMode = () => {
        setEditMode(true)
    },
    deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    },
    onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }



    return (
        <div >

            {!editMode && <div>
                <span className={pr.statusMessage} onDoubleClick={activateEditMode}>{`${props.status || 'no status'}`}</span>
            </div>}
            {editMode && <div>
                <input
                    onChange={onStatusChange}
                    autoFocus={true}
                    value={status}/>
                <button onClick={deactivateEditMode} >save</button>
            </div>}
        </div>

    )

}


export default ProfileStatusWithHooks;
