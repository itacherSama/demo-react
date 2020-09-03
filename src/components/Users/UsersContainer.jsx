import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching, followingInProgress
}
    from '../../redux/reducers/users-reducer';
import Preloader from "../anotherComponents/Preloader/Preloader";
import {usersApi} from "../../api/api";

class UsersComponent extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then((response) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.items);
                this.props.setTotalUsersCount(response.totalCount);

            });
    }

    onChangePage = (numberPage) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(numberPage);
        usersApi.getUsers(numberPage, this.props.pageSize)
            .then((response) => {
                this.props.setUsers(response.items);
                this.props.toggleIsFetching(false);

            });

    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                {...this.props}
                onChangePage={this.onChangePage}
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
        isFetching: state.usersPage.isFetching,
        arrFollowingInProgress: state.usersPage.arrFollowingInProgress
    }
}

let mapDispatchToProps = {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
        followingInProgress
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent);