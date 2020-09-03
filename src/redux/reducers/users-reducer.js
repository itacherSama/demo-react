const actionTypes = {
    FOLLOW: 'FOLLOW',
    UNFOLLOW: 'UNFOLLOW',
    SET_USERS: 'SET_USERS',
    SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT: 'SET_TOTAL_USERS_COUNT',
    TOGGLE_IS_FETCHING: 'TOGGLE_IS_FETCHING',
    FOLLOWING_IN_PROGRESS: 'FOLLOWING_IN_PROGRESS',
}

let initialState = {
    users: [
        ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    arrFollowingInProgress: []
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
        case actionTypes.FOLLOWING_IN_PROGRESS:
            return {
                ...state, arrFollowingInProgress: action.isFetching ?
                    [...state.arrFollowingInProgress, action.id] :
                    state.arrFollowingInProgress.filter((id) => action.id != id)
            }
        default:
            return state;
    }
}

export const follow = (userId) => {
    return {
        type: actionTypes.FOLLOW,
        userId
    };
}

export const unfollow = (userId) => {
    return {
        type: actionTypes.UNFOLLOW,
        userId
    }
}

export const setUsers = (users) => {
     return {
         type: actionTypes.SET_USERS,
         users
     }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: actionTypes.SET_CURRENT_PAGE,
        currentPage
    }
}

export const setTotalUsersCount = (count) => {
    return {
        type: actionTypes.SET_TOTAL_USERS_COUNT,
        totalUsersCount: count
    }
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: actionTypes.TOGGLE_IS_FETCHING,
        isFetching: isFetching
    }
}

export const followingInProgress = (isFetching, id) => {
    return {
        type: actionTypes.FOLLOWING_IN_PROGRESS,
        isFetching: isFetching,
        id: id
    }
}



export default usersReducer;