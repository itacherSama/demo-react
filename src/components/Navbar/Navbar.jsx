
import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

let Navbar = () => {
    return (
        <div className={s.nav}>
            <div>
                <NavLink to="/profile" className={s.item} activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="dialogs" className={s.item} activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div>
                <NavLink to="news" className={s.item} activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div>
                <NavLink to="music" className={s.item} activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div>
                <NavLink to="settings" className={s.item} activeClassName={s.activeLink}>Settings</NavLink>
            </div>
        </div>

    )
}

export default Navbar;