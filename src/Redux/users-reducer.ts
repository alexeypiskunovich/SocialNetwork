import {  BaseThunkType, InferActionsTypes } from './redux-store';
import { UserType } from "../types/types";
import { updateObjectInArray } from "../utils/validators/objects-helpers.ts";
import { Dispatch } from 'redux';
import { usersApi } from '../api/users-api.ts';



let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>,//array of users ids
    filter:{
        term:'',
        friend:null as null | boolean
    }
}

const usersReducer = (state = initialState, action:ActionTypes):InitialState => {
    switch (action.type) {
        case 'SN/USERS/FOLLOW':
            return {
                ...state,
                users:updateObjectInArray(state.users,action.userId, "id", {followed: true})
                // users: state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return {
                //             ...u,
                //             followed: true
                //         }
                //     }
                //     return u;
                // })
            };
        case 'SN/USERS/UNFOLLOW':
            return {
                ...state,
                users:updateObjectInArray(state.users,action.userId, "id", {followed: false})
            };
        case 'SN/USERS/SET_USERS':
            return {
                ...state,
                users: action.users // заменяем текущий массив пользователей новым массивом
            };

        case 'SN/USERS/SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.currentPage // заменяем текущий массив пользователей новым массивом
            };
        case 'SN/USERS/SET_TOTAL_USERS_COUNT':
            return {
                ...state,
                totalUsersCount: action.count // заменяем текущий массив пользователей новым массивом
            };
        case 'SN/USERS/TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching // заменяем текущий массив пользователей новым массивом
            };
        case 'SN/USERS/SET_FILTER':
            return{
                ...state,
                filter:action.payload
            }
        case 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id != action.userId) // заменяем текущий массив пользователей новым массивом
            };
        default:
            return state;
    }
}




export const actions={
    followSuccess:(userId:number) => ({
        type: 'SN/USERS/FOLLOW',
        userId
    } as const),
    
    unfollowSuccess : (userId:number) => ({
        type: 'SN/USERS/UNFOLLOW',
        userId
    }as const),
    
    setUsers :(users: Array<UserType>) => ({
        type: 'SN/USERS/SET_USERS',
        users
    }as const),
    
    setCurrentPage : (currentPage:number) => ({
        type: 'SN/USERS/SET_CURRENT_PAGE',
        currentPage
    }as const),
    setFilter: (filter:FilterType) => ({
        type: 'SN/USERS/SET_FILTER',
        payload:filter
    }as const),
    
    setTotalUsersCount : (totalUsersCount:number) => ({
        type: 'SN/USERS/SET_TOTAL_USERS_COUNT',
        count: totalUsersCount
    }as const),
    
    toggleIsFetching :(isFetching:boolean) => ({
        type: 'SN/USERS/TOGGLE_IS_FETCHING',
        isFetching
    }as const),
    
    toggleFollowingProgress : (isFetching: boolean, userId:number) => ({
        type: 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS',
        isFetching,
        userId
    }as const),
    
}




export const requestUsers = (Page: number,
                            pageSize:number, filter:FilterType):ThunkType=>{
    return async (dispatch) => {
        dispatch(actions.toggleIsFetching(true));
        dispatch(actions.setCurrentPage(Page));
        dispatch(actions.setFilter(filter))
        let data = await usersApi.getUsers(Page, pageSize, filter.term, filter.friend)
        
        dispatch(actions.toggleIsFetching(false));
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setTotalUsersCount(data.totalCount));
    }
}

const _followUnfollowFlow=async (dispatch:Dispatch<ActionTypes>,userId:number, apiMethod:any, actionCreator:(userId:number)=>ActionTypes)=>{//рефакторинг follow и unfollow, переобазнячил переменными разные дйствия чтобы обьеденить в одну функкцию, а потом просто ее вызфвыть 
    dispatch(actions.toggleFollowingProgress(true, userId));
    let data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    } 
    dispatch(actions.toggleFollowingProgress(false, userId));

}

export const follow = (userId:number):ThunkType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch,userId, usersApi.follow.bind(usersApi), actions.followSuccess);
    }
}
export const unfollow = (userId:number):ThunkType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch,userId, usersApi.unfollow.bind(usersApi), actions.unfollowSuccess);
    }
}

export default usersReducer;

type ActionTypes=InferActionsTypes<typeof actions>
export type InitialState=typeof initialState
export type FilterType=typeof initialState.filter
type ThunkType=BaseThunkType<ActionTypes>