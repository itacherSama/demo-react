import React from 'react';
import s from './Avatar.module.css';


const Avatar = (props) => {
    return (
        <div className={s.block_avatar}>
            <img src={props.state.src} alt={props.state.alt} />
        </div>
    )
}

export default Avatar;