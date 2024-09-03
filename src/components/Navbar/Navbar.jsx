import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar= () => {
    return (
        <nav className={s.nav}>
        <div className ={s.item}>
          <NavLink to="/Profile" >Profile</NavLink>
        </div>
        <div className ={s.item}>
          <NavLink to="/Dialogs">Messages</NavLink>
        </div>
        <div className ={s.item}>
          <NavLink to="/users">Users</NavLink>
        </div>
        <div className ={s.item}>
          <a>News</a>
        </div>
        <div className ={s.item}>
          <a>Music</a>
        </div>
        <div className ={s.item}>
          <a>Settings</a>
        </div>
      </nav>
    );
}  

export default Navbar;