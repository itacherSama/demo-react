import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import Avatar from '../../anotherComponents/Avatar/Avatar';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (

        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path} className={s.dialog_link} activeClassName={s.active}>
                <Avatar state={{
                    src: "https://i.pinimg.com/736x/fa/59/91/fa59912b46937e1c99061c1861004bc4.jpg",
                    alt: "My ava"
                }} />
                <div className={s.dialog_text}>
                    {props.name}
                </div>
            </NavLink>
        </div>
    )
}

export default DialogItem;