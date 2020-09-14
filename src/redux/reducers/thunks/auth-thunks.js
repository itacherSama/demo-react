import {authApi} from "../../../api/api";

import {setAuthUser} from "../auth-reducer";

export const getAuthUser = () => (dispatch) => {
    authApi.me()
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
