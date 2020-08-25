import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
 
    let dialogsElements = props.dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );

    let messagesElements = props.messages.map( m => <Message message={m.message} key={m.id} />);

    let onAddNewMessage = () => {
        props.addNewMessage();
    }

    let onUpdateTextMessage = (e) => {
        let newMessage = e.target.value;
        props.updateTextMessage(newMessage);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
            {dialogsElements}
             
            </div>
            <div className={s.messages}>
            {messagesElements}
            <div className={s.newMessage}>
                <textarea onChange={onUpdateTextMessage} value={props.newTextForMessage}></textarea>
                <button onClick={onAddNewMessage}>Отправить</button>
            </div>
            </div>
        </div>
    )
}

export default Dialogs;