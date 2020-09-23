import {authApi} from "../../../api/api";

import {setAuthUser} from "../auth-reducer";
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

export const login = (email, password, rememberMe) => (dispatch) => {
    authApi.login(email, password, rememberMe)
        .then((response) => {
            if (response.resultCode === 0) {
                dispatch(getAuthUser());
            } else {
                const message = response.messages.length ? response.messages[0] : 'Some errors';
                dispatch(stopSubmit('loginForm', {_error: message}));

            }
        });
}

export const logout = () => (dispatch) => {
    authApi.logout()
        .then((response) => {
            if (response.resultCode === 0) {
                dispatch(setAuthUser(null, null, null, false));

            }
        });
}
