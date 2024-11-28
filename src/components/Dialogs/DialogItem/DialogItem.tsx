import React from "react";
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom'

type PropsType={
    name:string
    id:number
}


const DialogItem: React.FC<PropsType> = (props) => {
    
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialog" + props.id} >{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;