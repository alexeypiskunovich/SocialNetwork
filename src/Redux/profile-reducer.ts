import { FormAction, stopSubmit } from "redux-form";
import { usersApi } from "../api/users-api.ts";
import { profileApi } from "../api/profile-api.ts";
import { BaseThunkType, InferActionsTypes } from "./redux-store.ts";


type PostType = {
    id: number
    text: string
    likesCount: number
}
type ContactType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
type PhotosType = {
    small: string | null
    large: string | null
}
type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactType
    photos: PhotosType
    aboutMe: string
}

let initialState = {
    postData: [{
        id: 1,
        text: 'Hi, how are you',
        likesCount: 12
    },
    {
        id: 2,
        text: 'It is my first post',
        likesCount: 11
    },
    ] as Array<PostType>,
    
    profile: null as ProfileType | null,
    status: "",
}

const profilReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/PROFILE/ADD_POST': {
            let newPost = {
                id: 5,
                text: action.text,
                likesCount: 0,
            };
            return {
                ...state,
                postData: [...state.postData, newPost],

            };
        }
        case 'SN/PROFILE/SET_STATUS': {
            return {
                ...state,
                status: action.status
            };
        }

        case 'SN/PROFILE/SET_USERS_PROFILE': {
            return {
                ...state,
                profile: action.profile
            };
        }
        case 'SN/PROFILE/DELETE_POST':
            return {
                ...state,
                postData: state.postData.filter(p => p.id != action.postId)
            }
        case 'SN/PROFILE/SAVE_PHOTO_SUCCESS':
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos } as ProfileType
            }
        default:
            return state;
    }
}

export const actions = {
    addPostActionCreater: (text: string) => ({
        type: 'SN/PROFILE/ADD_POST',
        text,
    } as const),
    setUsersProfile: (profile: ProfileType) => ({
        type: 'SN/PROFILE/SET_USERS_PROFILE',
        profile
    } as const),
    setStatus: (status: string) => ({
        type: 'SN/PROFILE/SET_STATUS',
        status
    } as const),
    deletePost: (postId: number) => ({
        type: 'SN/PROFILE/DELETE_POST',
        postId
    } as const),
    savePhotoSuccess: (photos: PhotosType) => ({
        type: 'SN/PROFILE/SAVE_PHOTO_SUCCESS',
        photos
    } as const)
}



export const getUsersProfile = (userId: number): ThunkType => async (dispatch) => {
    let data = await usersApi.getProfile(userId)
    dispatch(actions.setUsersProfile(data));

};
export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileApi.getStatus(userId)
    dispatch(actions.setStatus(data));

};
export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    let response = profileApi.updateStatus(status)
    dispatch(actions.setStatus(status));

};
export const savePhoto = (file: File): ThunkType => async (dispatch, getState) => {
    const data = await profileApi.savePhoto(file);
    if (data.resultCode === 0) {
        dispatch(actions.savePhotoSuccess(data.photos));
        const userId = getState().auth.userId;
        if (userId) {
            dispatch(getUsersProfile(userId)); // Обновляем профиль после сохранения фото
        }
    }
};

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const data = await profileApi.saveProfile(profile);
    if (data.resultCode === 0) {
        if (userId != null) {
            dispatch(getUsersProfile(userId));
        } else {
            throw new Error("userId can'be")
        }
    } else {

        dispatch(stopSubmit("edit-profile", { error: data.messages[1] }))
        return Promise.reject(data.messages[1]);
    }

};

export default profilReducer;
export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>