import dialogsReducer from "./reducers/dialogs-reducer";
import profileReducer from "./reducers/profile-reducer";
import navbarReducer from "./reducers/navbar-reducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);
        this._callSubscriber(this);

    }
}

export default store;