import React from "react";
import style from './users.module.css'
import imguser from '../../assed/imguser.webp'
import { NavLink } from 'react-router-dom'
import Paginator from "../common/Paginator/Paginator";

let User = ({ user, unfollow, followingInProgress, follow }) => {

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