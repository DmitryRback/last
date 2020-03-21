import React from "react";
import pd from "./profileData.module.css";
import {mdiEmoticonOutline} from '@mdi/js';
import {mdiEmoticonNeutralOutline} from '@mdi/js';
import {mdiFacebook} from '@mdi/js';
import {mdiWeb} from '@mdi/js';
import {mdiVk} from '@mdi/js';
import {mdiTwitter} from '@mdi/js';
import {mdiInstagram} from '@mdi/js';
import {mdiYoutube} from '@mdi/js';
import {mdiGithub} from '@mdi/js';
import {mdiBattlenet} from '@mdi/js';
import Icon from "@mdi/react";

export const ProfileData = ({profile}) => {
    return (
        <>
            <div className={pd.fullDescription}>
                <div className={pd.jobDescription}>
                    <div className={pd.itemJobDescription}>
                        <b>Looking for a job:</b> {profile.lookingForAJob
                        ? <Icon path={mdiEmoticonOutline} size={'24px'} color={'green'}/>
                        : <Icon path={mdiEmoticonNeutralOutline} size={'24px'} color={'red'}/>}
                    </div>
                    <div className={pd.itemDescription}>
                        <b>My professionals skills: </b>{profile.lookingForAJobDescription}
                    </div>
                    <div className={pd.itemDescription}>
                        <b>AboutMe:</b> {profile.aboutMe}
                    </div>
                </div>
                <div className={pd.contacts}>
                    <h3>Contacts</h3>
                    <div className={pd.block}>
                        {Object.keys(profile.contacts).filter(function (val) {
                            return profile.contacts[val] != null && profile.contacts[val] !== ""
                        }).map(key => {
                            return <Contact contactTitle={key} key={key} contactValue={profile.contacts[key]}/>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}


export const Contact = ({contactTitle, contactValue}) => {
    return (

        <div>
            <a href={contactValue} target="_blank" className={pd.item}>
            {(contactTitle === "facebook") && <Icon path={mdiFacebook} size={'24px'} color={'#3b5998'}/>}
            {(contactTitle === "website") && <Icon path={mdiWeb} size={'24px'} color={'black'}/>}
            {(contactTitle === "vk") && <Icon path={mdiVk} size={'24px'} color={'#4c75a3'}/>}
            {(contactTitle === "twitter") && <Icon path={mdiTwitter} size={'24px'} color={'#38A1F3'}/>}
            {(contactTitle === "instagram") && <Icon path={mdiInstagram} size={'24px'} color={'black'}/>}
            {(contactTitle === "youtube") && <Icon path={mdiYoutube} size={'24px'} color={'red'}/>}
            {(contactTitle === "github") && <Icon path={mdiGithub} size={'24px'} color={'black'}/>}
            {(contactTitle === "mainLink") && <Icon path={mdiBattlenet} size={'24px'} color={'black'}/>}
        </a>
        </div>
    )
}