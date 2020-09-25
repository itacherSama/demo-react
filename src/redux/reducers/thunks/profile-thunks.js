import {profileApi} from "../../../api/api";
import {setUserProfile, setUserStatus} from "../profile-reducer";


export const getProfile = (userId) => async (dispatch) => {
    let response = await profileApi.getProfile(userId);
    dispatch(setUserProfile(response));
}

export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileApi.getUserStatus(userId)
    dispatch(setUserStatus(response));
}

export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileApi.updateUserStatus(status);
    if (response.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}
