import React from "react";
import { useSelector } from "react-redux";
import { FilterType } from "../../Redux/users-reducer.ts";
import Preloader from "../common/preloader/Preloader.tsx";
import { getIsFetching} from "../../Redux/users-selectors.ts";
import { UserType } from "../../types/types.ts";
import { Users } from "./users.tsx";


type UsersPagePropstype={
    pageTitle:string
}
export const UsersPage:React.FC<UsersPagePropstype>=(props)=>{
    const isFetching= useSelector(getIsFetching)
    return<>
    <h2>{props.pageTitle}</h2>
       {isFetching ? <Preloader/> : null}
       <Users/>
    </>
}





