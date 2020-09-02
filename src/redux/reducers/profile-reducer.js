const actionTypes = {
    ADD_POST: 'ADD-POST',
    UPDATE_NEW_POST: 'UPDATE-NEW-POST',
    SET_USER_PROFILE: 'SET_USER_PROFILE'
}

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you', likesCount: 12 },
        { id: 2, message: 'Hi, how are you2', likesCount: 12 },
        { id: 3, message: 'Hi, how are you3', likesCount: 12 },
        { id: 4, message: 'It\'s my first post', likesCount: 17 }
    ],
    newTextForPost: 'My text1',
    profile: null
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.ADD_POST:
            let newPost = {
                id: 5,
                message: state.newTextForPost,
                likesCount: 0
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newTextForPost: ''
            };

        case actionTypes.UPDATE_NEW_POST:
            return {
                ...state,
                newTextForPost: action.newText
            };

        case actionTypes.SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };

        default:
            return state;
    }
}

export let AddPostActionCreator = () => {
    return {
        type: actionTypes.ADD_POST
    };
}

export let updateTextPostActionCreator = (text) => {
    return {
        type: actionTypes.UPDATE_NEW_POST,
        newText: text
    }
}

export let setUserProfile = (profile) => {
    return {
        type: actionTypes.SET_USER_PROFILE,
        profile: profile
    }
}


export default profileReducer;