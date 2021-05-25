import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Navbar.module.css'

const Navbar = (props) => {
    return (
        <div>
            <nav className={style.nav}>
                <div className={`${style.item}`}>
                    <NavLink to='/profile' activeClassName={style.activeLink}>Profile</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/dialogs' activeClassName={style.activeLink}>Messages</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/news' activeClassName={style.activeLink}>News</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/users' activeClassName={style.activeLink}>Users</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/music' activeClassName={style.activeLink}>Music</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/settings' activeClassName={style.activeLink}>Settings</NavLink>
                </div>
            </nav>
        </div>
    )
}



export default Navbar