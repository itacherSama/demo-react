const actionTypes = {
    'SET_ADD_MESSAGE': 'SET_ADD_MESSAGE'
}

let initialState = {
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
        { id: 6, name: 'Sveta' }
    ]
};

const dialogsReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case actionTypes.SET_ADD_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                message: action.message
            }

            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
        default:
            return state;
    }

}

export let setAddMessage = (valueMessage) => {
    return {
        type: actionTypes.SET_ADD_MESSAGE,
        message: valueMessage
    }
}


export default dialogsReducer;