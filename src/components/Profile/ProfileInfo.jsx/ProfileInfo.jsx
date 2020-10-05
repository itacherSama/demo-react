
import React, {useState} from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../anotherComponents/Preloader/Preloader";
import ImgUser from '../../../assets/images/user.jpg';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateUserStatus, isOwner, saveProto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainProtoSelected = (e) => {
        const file = e.target.files;
        if (file.length) {
            saveProto(file[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            toggleEditMode();
        });
    }
    
    const toggleEditMode = () => {
        setEditMode(!editMode);
    }

    return (

        <div>
            <div className={styles.content_top}>
                <img className={styles.content_top_img} src="https://i.artfile.ru/4368x2912_518090_[www.ArtFile.ru].jpg" alt="sdsa" />
            </div>
            <div className={styles.descriptionBlock}>
                <div className={styles.boxImg}><img src={profile.photos.large || ImgUser} alt=""/></div>
                <div>
                    {isOwner && <input type="file" onChange={onMainProtoSelected}/>}
                </div>
                <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>

                { editMode
                    ? <ProfileDataForm initialValues={profile} onSubmit={onSubmit} profile={profile} />
                    : <ProfileData profile={profile} isOwner={isOwner} toggleEditMode={toggleEditMode} />}

            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, toggleEditMode}) => {

    return <div>
        {isOwner && <div>
            <button onClick={toggleEditMode}>edit</button>
        </div>}
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        { profile.lookingForAJob && <div>
            <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>}
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        }) }
        </div>
    </div>
}




const Contact = ({contactTitle, contactValue}) => {
    return <div className={styles.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;