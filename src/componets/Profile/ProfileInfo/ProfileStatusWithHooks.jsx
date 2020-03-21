import React, {useEffect, useState} from 'react';
import pr from './ProfileInfo.module.css';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../../Common/FormControls/FormControls";
import l from "../../Login/Login.module.css";
import {maxLengthCreator, required} from "../../../Utils/Validator/Validators";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
            setStatus(props.status)
        }, [props.status]
    )

    const activateEditMode = () => {
        setEditMode(true)
    }
    const con = (formData) => {
        props.updateStatus(formData.status)
        setEditMode(false)
    }
    return (
        <div>
            <b>Status:</b>
            {!editMode && <div>
                <span className={pr.statusMessage}
                      onDoubleClick={activateEditMode}>{`${props.status || 'no status'}`}</span>
            </div>}
            {editMode && <ProfileStatusWithHooksReduxForm onSubmit={con} status={status} initialValues={{status}}/>}
        </div>
    )
}

const maxLength = maxLengthCreator(300)

const ProfileStatusWithHooksForm = ({handleSubmit, status}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field className={pr.status} component={Input}
                   name={'status'} validate={[required, maxLength]}/>
            <button>save</button>
        </form>
    )
}

const ProfileStatusWithHooksReduxForm = reduxForm({form: 'statusValue'})(ProfileStatusWithHooksForm);

export default ProfileStatusWithHooks;