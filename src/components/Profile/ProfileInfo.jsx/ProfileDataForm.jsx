import React from "react";
import {CreateField, Input, Textarea} from "../../anotherComponents/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import s from './ProfileInfo.module.css';
import styles from './../../anotherComponents/FormsControls/FormsControls.module.css';


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div><button>save</button> </div>
        {error && <div className={styles.errors}>
            {error}
        </div>}
        <div>
            <b>Full name</b>: {CreateField('Full name', 'fullName', [], Input)}
        </div>
        <div>
            <b>Looking for a job</b>: {CreateField('', 'lookingForAJob', [], Input, {type: 'checkbox'} )}
        </div>
        <div>
            <b>My professional skills</b>: {CreateField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
        </div>
        <div>
            <b>About me</b>: {CreateField('About me', 'aboutMe', [], Textarea )}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div className={s.contact} key={key}>
                <b>{key}: {CreateField(key, 'contacts.' + key, [], Input)}</b>
            </div>
        }) }
        </div>
    </form>
}

const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);
export default ProfileDataReduxForm;
// <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>