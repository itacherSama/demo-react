import {authApi, usersApi} from "../../../api/api";
import {
    setFollow,
    setFollowingInProgress,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    setToggleIsFetching,
    setUnfollow
} from "../users-reducer";
import {setAuthUser} from "../auth-reducer";

export const getUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(setToggleIsFetching(true));
    usersApi.getUsers(currentPage, pageSize)
        .then((response) => {
            dispatch(setToggleIsFetching(false));
            dispatch(setUsers(response.items));
            dispatch(setTotalUsersCount(response.totalCount));

        });
}

export const follow = (userId) => (dispatch) => {
    dispatch(setFollowingInProgress(true, userId));
    usersApi.userFollow(userId)
        .then((response) => {
            if (response.resultCode === 0) {
                dispatch(setFollow(userId));
                dispatch(setFollowingInProgress(false, userId));

            }
        });
}

export const unfollow = (userId) => (dispatch) => {
    dispatch(setFollowingInProgress(true, userId));
    usersApi.userUnfollow(userId)
        .then((response) => {
            if (response.resultCode === 0) {
                dispatch(setUnfollow(userId));
                dispatch(setFollowingInProgress(false, userId));

            }
        });
}
