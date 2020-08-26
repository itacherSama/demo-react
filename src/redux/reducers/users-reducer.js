const tionTypes = {
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

const usersReducer = (state = initialState, tion) => {

    switch (tion.type) {
        case tionTypes.FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === tion.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case tionTypes.UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === tion.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case tionTypes.SET_USERS:
            return {
                ...state,
                users: [...tion.users]
            }
        case tionTypes.SET_CURRENT_PAGE:
            return {
                ...state, currentPage: tion.currentPage
            }
        case tionTypes.SET_TOTAL_USERS_COUNT:
        return {
            ...state, totalUsersCount: 300
        }
        case tionTypes.TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: tion.isFetching
            }
        default:
            return state;
    }
}

export const follow = (userId) => {
    return {
        type: tionTypes.FOLLOW,
        userId
    };
}

export const unfollow = (userId) => {
    return {
        type: tionTypes.UNFOLLOW,
        userId
    }
}

export const setUsers = (users) => {
     return {
         type: tionTypes.SET_USERS,
         users
     }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: tionTypes.SET_CURRENT_PAGE,
        currentPage
    }
}

export const setTotalUsersCount = (count) => {
    return {
        type: tionTypes.SET_TOTAL_USERS_COUNT,
        totalUsersCount: count
    }
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: tionTypes.TOGGLE_IS_FETCHING,
        isFetching: isFetching
    }
}


export default usersReducer;