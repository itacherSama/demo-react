import {updateObjectInArray} from "../../utils/object-helpers";

    const FOLLOW = 'users/FOLLOW';
    const UNFOLLOW = 'users/UNFOLLOW';
    const SET_USERS = 'users/SET_USERS';
    const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
    const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
    const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
    const FOLLOWING_IN_PROGRESS = 'users/FOLLOWING_IN_PROGRESS';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    arrFollowingInProgress: []
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case FOLLOWING_IN_PROGRESS:
            return {
                ...state, arrFollowingInProgress: action.isFetching ?
                    [...state.arrFollowingInProgress, action.id] :
                    state.arrFollowingInProgress.filter((id) => action.id !== id)
            }
        default:
            return state;
    }
}

export const setFollow = (userId) => {
    return {
        type: FOLLOW,
        userId
    };
}

export const setUnfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}

export const setTotalUsersCount = (count) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount: count
    }
}

export const setToggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    }
}

export const setFollowingInProgress = (isFetching, id) => {
    return {
        type: FOLLOWING_IN_PROGRESS,
        isFetching: isFetching,
        id: id
    }
}


export default usersReducer;