import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import Preloader from "../anotherComponents/Preloader/Preloader";
import {follow, getUsers, unfollow} from "../../redux/reducers/thunks/users-thunks";
import {compose} from "redux";
import {
    getArrFollowingInProgress,
    getCurrentPage,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, requestUsers
} from "../../redux/reducers/selectors/users-selectors";

class UsersComponent extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onChangePage = (numberPage) => {
        const {pageSize} = this.props;

        this.props.getUsers(numberPage, pageSize);
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
        users: requestUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        arrFollowingInProgress: getArrFollowingInProgress(state),
    }
}

let mapDispatchToProps = {
        follow,
        unfollow,
        getUsers
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(UsersComponent);