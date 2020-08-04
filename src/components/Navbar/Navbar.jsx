
import React from 'react';
import s from './Navbar.module.css';

let Navbar = () => {
    return (
        <div className={s.nav}>
            <div>
                <a href="#s" className={s.item}>Что-то</a>
            </div>
            <div>
                <a href="#s" className={s.item}>Что-то</a>
            </div>
            <div>
                <a href="#s" className={s.item}>Что-то</a>
            </div>
            <div>
                <a href="#s" className={s.item}>Что-то</a>
            </div>
        </div>

    )
}

export default Navbar;