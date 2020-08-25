const actionTypes = {
    'ADD_MESSAGE': 'ADD-MESSAGE',
    'UPDATE_NEW_MESSAGE': 'UPDATE-NEW-MESSAGE',
}

let initialState = {
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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case actionTypes.ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newTextForMessage
            }

            return {
                ...state,
                messages: [...state.messages, newMessage],
                newTextForMessage: ''
            };

        case actionTypes.UPDATE_NEW_MESSAGE:
            return {
                ...state,
                newTextForMessage: action.message
            };
        default:
            return state;
    }

}

export let addMessageActionCreator = () => {
    return {
        type: actionTypes.ADD_MESSAGE
    }
}

export let updateMessageActionCreator = (newMessage) => {
    return {
        type: actionTypes.UPDATE_NEW_MESSAGE,
        message: newMessage
    }
}

export default dialogsReducer;