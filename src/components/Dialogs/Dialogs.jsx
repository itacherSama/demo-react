import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/store';

const Dialogs = (props) => {
    const state = props.state; 
    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );

    let messagesElements = state.messages.map( m => <Message message={m.message} />);

    let newMessageElement = React.createRef();

    let addNewMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let updateTextMessage = () => {
        let newMessage = newMessageElement.current.value;
        props.dispatch(updateMessageActionCreator(newMessage));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
            {dialogsElements}
             
            </div>
            <div className={s.messages}>
            {messagesElements}
            <div className={s.newMessage}>
                <textarea ref={newMessageElement} onChange={updateTextMessage} value={state.newTextForMessage}></textarea>
                <button onClick={addNewMessage}>Отправить</button>
            </div>
            </div>
        </div>
    )
}

export default Dialogs;