const actionTypes = {
    FOLLOW: 'FOLLOW',
    UNFOLLOW: 'UNFOLLOW',
    SET_USERS: 'SET_USERS'
}

let initialState = {
    users: [
        ]
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case actionTypes.UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case actionTypes.SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export const followAC = (userId) => {
    return {
        type: actionTypes.FOLLOW,
        userId
    };
}

export const unFollowAC = (userId) => {
    return {
        type: actionTypes.UNFOLLOW,
        userId
    }
}

export const setUsersAC = (users) => {
     return {
         type: actionTypes.SET_USERS,
         users
     }
}


export default usersReducer;