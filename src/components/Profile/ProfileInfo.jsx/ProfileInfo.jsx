
import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.content_top}>
                <img className={s.content_top_img} src="https://i.artfile.ru/4368x2912_518090_[www.ArtFile.ru].jpg" alt="sdsa" />
            </div>
            <div className={s.descriptionBlock}>
                ava + desc
            </div>
        </div>
    )
}

export default ProfileInfo;