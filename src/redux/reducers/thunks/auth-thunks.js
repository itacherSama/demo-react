import {authApi, securityApi} from "../../../api/api";
import {setAuthUser, setCaptchaUrlSuccess} from "../auth-reducer";
import {stopSubmit} from "redux-form";

export const getAuthUser = () => (dispatch) => {
    return authApi.me()
        .then((response) => {
            if (response.resultCode === 0) {
                let {id, login, email} = response.data;
                dispatch(setAuthUser(id, login, email, true));
            }
        });
}

export const login = (dataAuth) => async (dispatch) => {
    let response = await authApi.login(dataAuth);
    if (response.resultCode === 0) {
        dispatch(getAuthUser());
    } else {
        if (response.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        const message = response.messages.length ? response.messages[0] : 'Some errors';
        dispatch(stopSubmit('loginForm', {_error: message}));

    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityApi.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(setCaptchaUrlSuccess(captchaUrl));


}

export const logout = () => (dispatch) => {
    authApi.logout()
        .then((response) => {
            if (response.resultCode === 0) {
                dispatch(setAuthUser(null, null, null, false));

            }
        });
}
