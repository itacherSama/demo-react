
import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

let Navbar = (props) => {
    let linksItems = props.sidebar.links.map((link) => {
        return (
            <div>
                <NavLink
                    to={link.path}
                    className={s.item}
                    activeClassName={s.activeLink}>
                    {link.name}
                </NavLink>
            </div>
        )
    });
    return (
        <div className={s.nav}>
            {linksItems}
        </div>

    )
}

export default Navbar;