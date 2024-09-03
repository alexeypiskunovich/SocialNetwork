import React from 'react';
import s from'./Header.module.css'
import { NavLink } from 'react-router-dom';

const Header= (props) => {
    return (
         <header className={s.header}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiRNExqI9MjjvvTmiEKTeCXQUFQ77R1Y3vDA&s'/>
          <div className={s.loginBlock}>
            {props.isAuth 
            ? <div ><span className={s.UserName}>{props.login}-</span><button onClick={props.logout}>Log out</button></div>
            :<NavLink to={'/login'}>Login</NavLink>}
          </div>
         </header>
    );
}  

export default Header;