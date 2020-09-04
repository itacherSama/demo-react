
import React from 'react';
import styles from './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/reducers/profile-reducer";
import {withRouter} from "react-router-dom";
import {profileApi} from "../../api/api";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }

        profileApi.getProfile(userId)
            .then((response) => {
                this.props.setUserProfile(response);

            });
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
        profile: state.profilePage.profile
    }
}

const mapDispatchToProps = {
    setUserProfile
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(ProfileContainer);