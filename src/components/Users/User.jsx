import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.jpg';
import {NavLink} from "react-router-dom";

let User = ({user, arrFollowingInProgress, follow, ...props}) => {

    return (<div>

    <span>
        <div>
            <NavLink to={`/profile/${user.id}`}>
                <img
                    src={user.photos.small !== null ? user.photos.small : userPhoto}
                    className={styles.usersPhoto}
                    alt={user.id}
                />
            </NavLink>
        </div>
        <div>

            {user.followed ? <button
                    disabled={arrFollowingInProgress.some((userId) => user.id === userId)}
                    onClick={() => {
                        props.unfollow(user.id);
                    }}>Unollow</button> :
                <button
                    disabled={arrFollowingInProgress.some((userId) => user.id === userId)}
                    onClick={() => {
                        follow(user.id);
                    }}>Follow</button>}

        </div>
    </span>
        <span>
        <span>
            <div>{user.name}</div>
            <div>{user.status}</div>
        </span>
        <span>
            <div>{"user.location.country"}</div>
            <div>{"user.location.city"}</div>
        </span>
    </span>

    </div>)
}

export default User;
