import React from "react";
import Button from "../../../Button/Button1";
import pd from "./profileData.module.css";

export const ProfileData = ({profile, goToEditMode}) => {
    return (
        <>
            <Button text={'Edit profile'} onClick={() => goToEditMode()}/>
            <div className={pd.fullDescription}>
                <div className={pd.jobDescription}>
                    <div>
                        <b>Full name:</b>{profile.fullName}
                    </div>
                    <div>
                        <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
                    </div>
                    <div>
                        <b>My professionals skills: </b>{profile.lookingForAJobDescription}
                    </div>
                    <div>
                        <b>AboutMe:</b>{profile.aboutMe}
                    </div>
                </div>
                <div className={pd.contacts}>
                    <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <Contact contactTitle={key} key={key} contactValue={profile.contacts[key]}/>
                })}
                </div>
            </div>
        </>
    )
}

export const Contact = ({contactTitle, contactValue}) => {
    return (
        <div><b>{contactTitle}</b>: <a href={contactValue} target="_blank">{contactValue}</a></div>
    )
}