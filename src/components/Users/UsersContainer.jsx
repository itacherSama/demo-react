import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { followAC, unFollowAC, setUsersAC } from '../../redux/reducers/users-reducer';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unFollowAC(userId));
        },
        setUsers: (userId) => {
            dispatch(setUsersAC(userId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);