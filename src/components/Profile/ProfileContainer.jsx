import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import Profile from "./Profile";
import {
    getProfile,
    getUserStatus,
    savePhoto,
    saveProfile,
    updateUserStatus
} from "../../redux/reducers/thunks/profile-thunks";
// import styles from './Profile.module.css';


class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId || this.props.autorizedAuthId;
        if (!userId) this.props.history.push('/login') ;
        this.props.getProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) this.refreshProfile();

    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                    isOwner={!this.props.match.params.userId}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateUserStatus={this.props.updateUserStatus}
                    savePhoto={this.props.savePhoto}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isAuth: state.auth.isAuth,
        autorizedAuthId: state.auth.userId
    }
}

const mapDispatchToProps = {
    getProfile,
    getUserStatus,
    updateUserStatus,
    savePhoto,
    saveProfile
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    // withAuthRedirect
)(ProfileContainer);