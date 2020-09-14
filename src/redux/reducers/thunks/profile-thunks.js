import {profileApi} from "../../../api/api";
import {setUserProfile, setUserStatus} from "../profile-reducer";


export const getProfile = (userId) => (dispatch) => {
    profileApi.getProfile(userId)
        .then((response) => {
            dispatch(setUserProfile(response));
        });
}

export const getUserStatus = (userId) => (dispatch) => {
    profileApi.getUserStatus(userId)
        .then((response) => {
            dispatch(setUserStatus(response));
        });
}

export const updateUserStatus = (status) => (dispatch) => {
    profileApi.updateUserStatus(status)
        .then((response) => {
            if (response.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        });
}
