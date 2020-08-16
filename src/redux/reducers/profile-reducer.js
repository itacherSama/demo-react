const actionTypes = {
    'ADD_POST': 'ADD-POST',
    'UPDATE_NEW_POST': 'UPDATE-NEW-POST'
}

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you', likesCount: 12 },
        { id: 2, message: 'Hi, how are you2', likesCount: 12 },
        { id: 3, message: 'Hi, how are you3', likesCount: 12 },
        { id: 4, message: "It\'s my first post", likesCount: 17 }
    ],
    newTextForPost: 'My text1'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_POST:
            let newPost = {
                id: 5,
                message: state.newTextForPost,
                likesCount: 0
            };

            state.posts.push(newPost);
            state.newTextForPost = '';
            return state;

        case actionTypes.UPDATE_NEW_POST:
            state.newTextForPost = action.newText;
            return state;

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


export default profileReducer;