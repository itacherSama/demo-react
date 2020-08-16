import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/reducers/dialogs-reducer';

const Dialogs = (props) => {
    const state = props.state; 
    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );

    let messagesElements = state.messages.map( m => <Message message={m.message} />);

    let addNewMessage = () => {
        let action = addMessageActionCreator();
        props.dispatch(action);
    }

    let updateTextMessage = (e) => {
        let newMessage = e.target.value;
        let action = updateMessageActionCreator(newMessage);
        props.dispatch(action);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
            {dialogsElements}
             
            </div>
            <div className={s.messages}>
            {messagesElements}
            <div className={s.newMessage}>
                <textarea onChange={updateTextMessage} value={state.newTextForMessage}></textarea>
                <button onClick={addNewMessage}>Отправить</button>
            </div>
            </div>
        </div>
    )
}

export default Dialogs;