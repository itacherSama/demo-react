import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import Preloader from "../anotherComponents/Preloader/Preloader";
import {follow, getUsers, unfollow} from "../../redux/reducers/thunks/users-thunks";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class UsersComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onChangePage = (numberPage) => {
        this.props.getUsers(numberPage, this.props.pageSize);
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
        arrFollowingInProgress: state.usersPage.arrFollowingInProgress,
    }
}

let mapDispatchToProps = {
        follow,
        unfollow,
        getUsers
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(UsersComponent);