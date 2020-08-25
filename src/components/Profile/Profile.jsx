
import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo.jsx/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {;
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;