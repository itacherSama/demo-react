
import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../anotherComponents/Preloader/Preloader";
import ImgUser from '../../../assets/images/user.jpg';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateUserStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (

        <div>
            <div className={styles.content_top}>
                <img className={styles.content_top_img} src="https://i.artfile.ru/4368x2912_518090_[www.ArtFile.ru].jpg" alt="sdsa" />
            </div>
            <div className={styles.descriptionBlock}>
                <div className={styles.boxImg}><img src={profile.photos.large || ImgUser} alt=""/></div>
                <div>{profile.fullName}</div>
                <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
                <div>{profile.aboutMe}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;