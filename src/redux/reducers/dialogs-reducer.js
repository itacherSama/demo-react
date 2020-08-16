const actionTypes = {
    'ADD_MESSAGE': 'ADD-MESSAGE',
    'UPDATE_NEW_MESSAGE': 'UPDATE-NEW-MESSAGE',
}

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.dialogsPage.newTextForMessage
            }
            state.dialogsPage.messages.push(newMessage);
            return state;

        case actionTypes.UPDATE_NEW_MESSAGE:
            state.dialogsPage.newTextForMessage = action.message;
            return state;
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