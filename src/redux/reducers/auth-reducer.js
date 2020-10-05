const SET_AUTH_USER = 'auth/SET_AUTH_USER';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH_USER:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUser = (userId, login, email, isAuth) => {
    return {
        type: SET_AUTH_USER,
        payload: {
            userId,
            login,
            email,
            isAuth
        }
    }
}

export const setCaptchaUrlSuccess = (captchaUrl) => {
    return {
        type: SET_AUTH_USER,
        payload: {
            captchaUrl
        }
    }
}


export default authReducer;