
import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo.jsx/ProfileInfo';


const Profile = (props) => {;
    return (
        <div>
            <ProfileInfo />
            <MyPosts state={props.state.profilePage} dispatch={props.dispatch} />
        </div>
    )
}

export default Profile;