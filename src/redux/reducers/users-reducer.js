const actionTypes = {
    FOLLOW: 'FOLLOW',
    UNFOLLOW: 'UNFOLLOW',
    SET_USERS: 'SET_USERS',
    SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT: 'SET_TOTAL_USERS_COUNT',
    TOGGLE_IS_FETCHING: 'TOGGLE_IS_FETCHING',
}

let initialState = {
    users: [
        ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
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
                users: [...action.users]
            }
        case actionTypes.SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case actionTypes.SET_TOTAL_USERS_COUNT:
        return {
            ...state, totalUsersCount: 300
        }
        case actionTypes.TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
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

export const setCurrentPageAC = (currentPage) => {
    return {
        type: actionTypes.SET_CURRENT_PAGE,
        currentPage
    }
}

export const setTotalUsersCountAC = (count) => {
    return {
        type: actionTypes.SET_TOTAL_USERS_COUNT,
        totalUsersCount: count
    }
}

export const toggleIsFetchingAC = (isFetching) => {
    return {
        type: actionTypes.TOGGLE_IS_FETCHING,
        isFetching: isFetching
    }
}


export default usersReducer;