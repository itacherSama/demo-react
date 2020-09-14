const actionTypes = {
    SET_ADD_POST: 'SET_ADD_POST',
    SET_USER_PROFILE: 'SET_USER_PROFILE',
    SET_USER_STATUS: 'SET_USER_STATUS',

}

let initialState = {
    posts: [
        { id: 0, message: 'Hi, how are you', likesCount: 12 },
        { id: 1, message: 'Hi, how are you2', likesCount: 12 },
        { id: 2, message: 'Hi, how are you3', likesCount: 12 },
        { id: 3, message: 'It\'s my first post', likesCount: 17 }
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.SET_ADD_POST:
            let newPost = {
                id: state.posts.length,
                message: action.valueNewPost,
                likesCount: 0
            };

            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        case actionTypes.SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };

        case actionTypes.SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
}

export let setAddPost = (valueNewPost) => {
    return {
        type: actionTypes.SET_ADD_POST,
        valueNewPost: valueNewPost
    };
}

export let setUserProfile = (profile) => {
    return {
        type: actionTypes.SET_USER_PROFILE,
        profile: profile
    }
}

export let setUserStatus = (status) => {
    return {
        type: actionTypes.SET_USER_STATUS,
        status: status
    }
}


export default profileReducer;