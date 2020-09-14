import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import AddNewMessageForm from "./AddNewMessageForm/AddNewMessageForm";

const Dialogs = (props) => {
 
    let dialogsElements = props.dialogs.map( d => <DialogItem name={d.name} id={d.id} key={d.id} /> );
    let messagesElements = props.messages.map( m => <Message message={m.message} key={m.id} />);

    let onAddNewMessage = formValue => {
        props.setAddMessage(formValue.newMessage);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            <div className={s.newMessage}>
                <AddNewMessageForm onSubmit={onAddNewMessage}/>
            </div>
            </div>
        </div>
    )
}

export default Dialogs;