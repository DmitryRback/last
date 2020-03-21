import React from "react";
import Button from "../../../Button/Button1";
import pdf from "./profileDataForm.module.css";
import {Input, createField, Textarea} from "../../../Common/FormControls/FormControls";
import {reduxForm} from "redux-form";
import l from "../../../Login/Login.module.css";

const ProfileDataForm = ({ handleSubmit, exitForEditMode, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={pdf.btn}>
                <Button text={'Save profile'} />
                <Button text={'Cancel'} onClick={exitForEditMode}/>
            </div>
            {
                error && <div className={l.fullError}>
                    {error}
                </div>
            }
            <div className={pdf.fullDescription}>
                <div className={pdf.jobDescription}>
                    <div className={pdf.item}>
                        <div className={pdf.description}> <b>Full name:</b> </div>
                        {createField('', Input,'fullName','Full name')}
                    </div>
                    <div className={pdf.itemJob}>
                        <b>Looking for a job:</b>
                        {createField('', Input, 'lookingForAJob', null, null,
                            {type: 'checkbox'})}
                    </div>
                    <div className={pdf.item}>
                        <div className={pdf.description}> <b>My professionals skills:</b> </div>

                        {createField('', Textarea, 'lookingForAJobDescription',
                            'My professionals skills')}
                    </div>
                    <div>
                        <div className={pdf.description}> <b>AboutMe:</b> </div>
                        {createField('', Textarea, 'aboutMe',
                            'About me')}
                    </div>

                </div>

                <div className={pdf.contactsEdit}>
                    <h3>Contacts</h3> {Object.keys(profile.contacts).map(key => {
                    return <div key={key}>
                        <div className={pdf.description}><b>{key}</b>:</div>
                        {createField('', Input,'contacts.' + [key],[key])}
                    </div>
                })}
                </div>
            </div>
        </form>
    )
}

const ProfileDataReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm);

export default ProfileDataReduxForm