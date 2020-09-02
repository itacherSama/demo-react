const actionTypes = {
    'SET_AUTH_USER': 'SET_AUTH_USER',
    TOGGLE_IS_FETCHING: 'TOGGLE_IS_FETCHING',
}

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.SET_AUTH_USER:
            return {
                ...state,
                ...action.profile,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUser = (userId, login, email) => {
    return {
        type: actionTypes.SET_AUTH_USER,
        profile: {
            userId,
            login,
            email
        }
    }
}


export default authReducer;