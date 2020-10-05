import {profileApi} from "../../../api/api";
import {setPhotoProfile, setUserProfile, setUserStatus} from "../profile-reducer";
import {stopSubmit} from "redux-form";


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

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileApi.savePhoto(file);
    if (response.resultCode === 0) {
        dispatch(setPhotoProfile(response.data.photos));
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    let response = await profileApi.saveProfile(profile);
    if (response.resultCode === 0) {
        dispatch(getProfile(userId));
    } else {
        dispatch(stopSubmit('edit-profile', {_error: response.messages[0]}));
        return Promise.reject(response.messages[0]);
    }
}
