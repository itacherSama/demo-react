const SET_ADD_POST = 'profile/SET_ADD_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';
const SET_PHOTO_PROFILE = 'profile/SET_PHOTO_PROFILE';


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
        case SET_ADD_POST:
            let newPost = {
                id: state.posts.length,
                message: action.valueNewPost,
                likesCount: 0
            };

            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };

        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            };
        case SET_PHOTO_PROFILE:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos
                }

            };
        default:
            return state;
    }
}

export let setAddPost = (valueNewPost) => {
    return {
        type: SET_ADD_POST,
        valueNewPost: valueNewPost
    };
}

export let setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    }
}

export let setPhotoProfile = (photos) => {
    return {
        type: SET_PHOTO_PROFILE,
        photos: photos
    }
}

export let setUserStatus = (status) => {
    return {
        type: SET_USER_STATUS,
        status: status
    }
}


export default profileReducer;