import {usersApi} from "../../../api/api";
import {
    setFollow,
    setFollowingInProgress,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    setToggleIsFetching,
    setUnfollow
} from "../users-reducer";

export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(setToggleIsFetching(true));
        let response = await usersApi.getUsers(currentPage, pageSize);
        dispatch(setToggleIsFetching(false));
        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount));

    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(setFollowingInProgress(true, userId));
    let response = await apiMethod(userId);

    if (response.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(setFollowingInProgress(false, userId));

}

export const follow = (userId) => {
    return async (dispatch) => {
        let apiMethod = usersApi.userFollow.bind(usersApi);
        followUnfollowFlow(dispatch, userId, apiMethod, setFollow);
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        let apiMethod = usersApi.userUnfollow.bind(usersApi);
        followUnfollowFlow(dispatch, userId, apiMethod, setUnfollow);
    }
}
