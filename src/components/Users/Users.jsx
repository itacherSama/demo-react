import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.jpg';
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={styles.boxForNum}>
                        <span className={props.currentPage === p && styles.selectedPage}
                              onClick={e => {
                                  props.onChangePage(p);
                              }}>{p}</span>
                    </span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={`/profile/${u.id}`}>
                                <img
                                    src={u.photos.small !== null ? u.photos.small : userPhoto}
                                    className={styles.usersPhoto}
                                    alt={u.id}
                                />
                            </NavLink>
                        </div>
                        <div>

                            {u.followed ? <button
                                    disabled={props.arrFollowingInProgress.some((userId) => u.id === userId)}
                                    onClick={() => {
                                        props.unfollow(u.id);
                                    }}>Unollow</button> :
                                <button
                                    disabled={props.arrFollowingInProgress.some((userId) => u.id === userId)}
                                    onClick={() => {
                                        props.follow(u.id);
                                    }}>Follow</button>}

                        </div>
                    </span>
                <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
            </div>)
        }
    </div>
}

export default Users;
