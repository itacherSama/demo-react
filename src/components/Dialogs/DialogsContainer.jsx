import React from 'react';
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/reducers/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
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

export default DialogsContainer;