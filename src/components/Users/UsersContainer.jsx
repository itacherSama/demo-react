import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {
    followAC,
    unFollowAC,
    setUsersAC,
    setCurrentPageAC,
    setTotalUsersCountAC, toggleIsFetchingAC
} from '../../redux/reducers/users-reducer';
import Axios from "axios";
import Preloader from "../anotherComponents/Preloader/Preloader";

class UsersComponent extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        Axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?
                page=${this.props.currentPage}
                &
                count=${this.props.pageSize}`)
            .then((response) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);

            });
    }

    onChangePage = (numberPage) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(numberPage);
        Axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.toggleIsFetching(false);

            });

    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onChangePage={this.onChangePage}
                unfollow={this.props.unfollow}
                follow={this.props.follow}

            />
        </>
    }

}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (countUsers) => {
            dispatch(setTotalUsersCountAC((countUsers)));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent);