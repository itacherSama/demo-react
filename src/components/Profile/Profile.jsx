
import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

let Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.content_top}><img className={s.content_top_img} src="https://i.artfile.ru/4368x2912_518090_[www.ArtFile.ru].jpg" alt="sdsa"/></div>
            <MyPosts />
        </div>
    )
}

export default Profile;