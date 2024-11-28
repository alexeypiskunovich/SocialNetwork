import React from "react";
import style from './users.module.css'
import { NavLink } from 'react-router-dom'
import { UserType } from "../../types/types.ts";
import imguser from "../../assed/imguser.webp"



type PropsType ={
    user:UserType
    unfollow:(userId:number)=>void
    followingInProgress:Array<number>
    follow:(userId:number)=>void
}
let User: React.FC<PropsType> = ({ user, unfollow, followingInProgress, follow }) => {

    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/Profile/' + user.id}>
                        <div>
                            <img src={user.photos && user.photos.small != null ? user.photos.small : imguser} className={style.userPhoto} />
                        </div>
                    </NavLink>
                </div>

                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => { unfollow(user.id) }}
                        >Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => { follow(user.id) }}
                        >Follow</button>
                    }

                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>

        </div>)

}





export default User;