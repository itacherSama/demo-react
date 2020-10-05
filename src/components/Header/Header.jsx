import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Header.module.css';

let Header = (props) => {

    let onLogout = () => {
        props.logout();
    }

    return (
        <header className={s.header}>
            <img src="https://banner2.cleanpng.com/20180805/kaf/kisspng-computer-icons-clip-art-portable-network-graphics-assistance-apogea-notre-hotline-r%C3%A9pond-%C3%A0-toutes-5b670b34de0c91.2294563215334797329095.jpg" alt="imgs"/>
        <div className={s.blockLogin}>
            {
                props.isAuth ?
                    <div>{props.login} <button onClick={onLogout}>logout</button></div>
                    :
                    <NavLink to={'/login'}>
                    login
                </NavLink>
            }
        </div>
        </header>
    )
}

export default Header;