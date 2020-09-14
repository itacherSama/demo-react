
import React from 'react';
import styles from './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {getProfile, getUserStatus, updateUserStatus} from "../../redux/reducers/thunks/profile-thunks";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 11095;
        }

        this.props.getProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

const mapDispatchToProps = {
    getProfile,
    getUserStatus,
    updateUserStatus
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    // withAuthRedirect
)(ProfileContainer);