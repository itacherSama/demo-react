
import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../anotherComponents/Preloader/Preloader";
import ImgUser from '../../../assets/images/user.jpg';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (

        <div>
            <div className={styles.content_top}>
                <img className={styles.content_top_img} src="https://i.artfile.ru/4368x2912_518090_[www.ArtFile.ru].jpg" alt="sdsa" />
            </div>
            <div className={styles.descriptionBlock}>
                <div className={styles.boxImg}><img src={props.profile.photos.large || ImgUser} alt=""/></div>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;