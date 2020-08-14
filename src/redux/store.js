const CONST_ACTION_TYPES = {
    'ADD_POST': 'ADD-POST',
    'UPDATE_NEW_POST': 'UPDATE-NEW-POST',
    'ADD_MESSAGE': 'ADD-MESSAGE',
    'UPDATE_NEW_MESSAGE': 'UPDATE-NEW-MESSAGE',

}

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you', likesCount: 12 },
                { id: 2, message: 'Hi, how are you2', likesCount: 12 },
                { id: 3, message: 'Hi, how are you3', likesCount: 12 },
                { id: 4, message: "It\'s my first post", likesCount: 17 }
            ],
            newTextForPost: 'My text1'
        },
        dialogsPage: {
            newTextForMessage: 'Введите текст',
            messages: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'How is your it kamasutra?' },
                { id: 3, message: 'Yo!' },
                { id: 4, message: 'Yo' },
                { id: 5, message: 'Yo' }
            ],
            dialogs: [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Victor' },
                { id: 5, name: 'Sanya' },
                { id: 5, name: 'Sveta' }
            ],
        },
        navbar: [
            {
                name: 'Profile',
                path: '/profile',
            },{
                name: 'Dialogs',
                path: '/dialogs',
            },{
                name: 'News',
                path: '/news',
            },{
                name: 'Music',
                path: '/music',
            },{
                name: 'Settings',
                path: '/settings',
            },
        ]
    },
    _callSubscriber() {
        console.log('change store', this);
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {

        this._callSubscriber = observer;
        console.log("i am in store", this);

    },


    dispatch(action) {
        if (action.type === CONST_ACTION_TYPES.ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newTextForPost,
                likesCount: 0
            };
            
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newTextForPost = '';
            this._callSubscriber(this);

        } else if (action.type === CONST_ACTION_TYPES.UPDATE_NEW_POST) {
            this._state.profilePage.newTextForPost = action.newText;
            this._callSubscriber(this);
        } else if (action.type === CONST_ACTION_TYPES.ADD_MESSAGE) {
            let newMessage = {
                id: 6,
                message: this._state.dialogsPage.newTextForMessage
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._callSubscriber(this);

        } else if (action.type === CONST_ACTION_TYPES.UPDATE_NEW_MESSAGE) {
            this._state.dialogsPage.newTextForMessage = action.message;
            this._callSubscriber(this);

        }
    }
}

export let AddPostActionCreator = () => {
    return {
        type: CONST_ACTION_TYPES.ADD_POST
    };
}

export let updateTextPostActionCreator = (text) => {
    return {
        type: CONST_ACTION_TYPES.UPDATE_NEW_POST,
        newText: text
    }
}

export let addMessageActionCreator = () => {
    return {
        type: CONST_ACTION_TYPES.ADD_MESSAGE
    }
}

export let updateMessageActionCreator = (newMessage) => {
    return {
        type: CONST_ACTION_TYPES.UPDATE_NEW_MESSAGE,
        message: newMessage
    }
}


window.store = store;
export default store;