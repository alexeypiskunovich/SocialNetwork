import React, { FC, useEffect } from "react";
import Paginator from "../common/Paginator/Paginator.tsx";
import User from "./user.tsx";
import UsersSearchForm from "./UsersSearchForm.tsx";
import { FilterType, requestUsers, follow as followUser, unfollow as unfollowUser } from "../../Redux/users-reducer.ts";
import { useDispatch, useSelector } from "react-redux";
import { getCurretPage, getFollowingInProgress, getPageSize, getTotalUsersCount, getUsers, getUsersFilter } from "../../Redux/users-selectors.ts";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from 'query-string'; 

type PropsType = {};

type QueryParamsType= {term?:string; page?:string; friend?:string}
export const Users: FC<PropsType> = (props) => {
    const users = useSelector(getUsers);
    const totalUsersCount = useSelector(getTotalUsersCount);
    const currentPage = useSelector(getCurretPage);
    const pageSize = useSelector(getPageSize);
    const filter = useSelector(getUsersFilter);
    const followingInProgress = useSelector(getFollowingInProgress);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation(); // Используем useLocation

    
    useEffect(() => {
        const parsed = queryString.parse(location.search)as QueryParamsType
        let actualPage=currentPage
        let actualFilter=filter

        if (!!parsed.page) actualPage=Number(parsed.page)
        

        if (!!parsed.term) actualFilter={...actualFilter, term:parsed.term as string}
        if (!!parsed.friend) actualFilter={...actualFilter, friend:parsed.friend==="null" ? null:parsed.friend=== "true" ? true:false}

        dispatch(requestUsers(actualPage, pageSize, actualFilter));
    }, []);
    // Обновляем URL при изменении фильтров или текущей страницы
    useEffect(() => {
        const query:QueryParamsType={}

        if (!!filter.term) query.term=filter.term
        if(filter.friend!==null) query.friend= String(filter.friend)
        if(currentPage!==1) query.page=String(currentPage)

        navigate({
            pathname: "/developers",
            search: queryString.stringify(query)
        });
    }, [filter, currentPage, navigate]);


    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter));
    };

    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter));
    };

    const handleFollow = (userId: number) => {
        dispatch(followUser(userId));
    };

    const handleUnfollow = (userId: number) => {
        dispatch(unfollowUser(userId));
    };

    return (
        <div>
            
            <UsersSearchForm onFilterChanged={onFilterChanged} />
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                totalUsersCount={totalUsersCount} pageSize={pageSize} />
            <div>
                {
                    users.map(u => (
                        <User user={u}
                            key={u.id}
                            followingInProgress={followingInProgress}
                            unfollow={handleUnfollow}
                            follow={handleFollow} />
                    ))
                }
            </div>
        </div>
    );
};