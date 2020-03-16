import React from "react";
import Button from "../../../Button/Button1";
import pd from "../profileData/profileData.module.css";
import {Contact} from "../profileData/profileData";
import {Input, createField, Textarea} from "../../../Common/FormControls/FormControls";
import {reduxForm} from "redux-form";
import handleSubmit from "redux-form/lib/handleSubmit";
import l from "../../../Login/Login.module.css";

const ProfileDataForm = ({ handleSubmit, exitForEditMode, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Button text={'Save profile'} />
            <Button text={'Cancel'} onClick={exitForEditMode}/>
            {
                error && <div className={l.fullError}>
                    {error}
                </div>
            }
            <div className={pd.fullDescription}>
                <div className={pd.jobDescription}>
                    <div>
                        <b>Full name:</b>
                        {createField('', Input,'fullName','Full name')}
                    </div>
                    <div>
                        <b>Looking for a job:</b>
                        {createField('', Input, 'lookingForAJob', null, null,
                            {type: 'checkbox'})}
                    </div>
                    <div>
                        <b>My professionals skills:</b>
                        {createField('', Textarea, 'lookingForAJobDescription',
                            'My professionals skills')}
                    </div>
                    <div>
                        <b>AboutMe:</b>
                        {createField('', Textarea, 'aboutMe',
                            'About me')}
                    </div>

                </div>

                <div className={pd.contacts}>
                    <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <div key={key}>
                        <b>{key}</b>:  {createField('', Input,'contacts.' + [key],[key])}
                    </div>
                })}
                </div>
            </div>
        </form>
    )
}

const ProfileDataReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm);

export default ProfileDataReduxForm