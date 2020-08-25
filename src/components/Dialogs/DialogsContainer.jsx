import React from 'react';
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/reducers/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

/* const DialogsContainer = (props) => {
    const state = props.store.getState().dialogsPage;

    let addNewMessage = () => {
        let action = addMessageActionCreator();
        props.store.dispatch(action);
    }

    let updateTextMessage = (newMessage) => {
        let action = updateMessageActionCreator(newMessage);
        props.store.dispatch(action);
    }

    return <Dialogs 
                addNewMessage={addNewMessage}
                updateTextMessage={updateTextMessage}
                dialogs={state.dialogs}
                messages={state.messages}
                newTextForMessage={state.newTextForMessage} />
}
 */

let mapStateToProps = (state) => {
    let dialogsPage = state.dialogsPage;
    return {
        dialogs: dialogsPage.dialogs,
        messages: dialogsPage.messages,
        newTextForMessage: dialogsPage.newTextForMessage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage() {
            console.log("addNewMessage");
            let action = addMessageActionCreator();
            dispatch(action);
        },
        updateTextMessage(newMessage) {
            console.log("updateTextMessage");
            let action = updateMessageActionCreator(newMessage);
            dispatch(action);
        }
    }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;