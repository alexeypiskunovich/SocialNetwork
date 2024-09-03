import { profileApi, usersApi } from "../api/api";
const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USERS_PROFILE='SET_USERS_PROFILE';
const SET_STATUS='SET_STATUS';
const DELETE_POST='DELETE_POST';

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
    ],
    newPostText: 'samurai',
    profile:null,
    status:"",
}

const profilReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                text: action.text,
                likesCount: 0,
            };
            return {
                ...state,
                postData : [...state.postData, newPost],
                
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        
        case SET_USERS_PROFILE: {
            return {
                ...state,
                profile:action.profile
            };
        }
        case DELETE_POST:
            return{
                ...state,
                postData:state.postData.filter(p=>p.id!=action.postId)
            }
        default:
            return state;
    }
}

export const addPostActionCreater = (text) => ({
    type: ADD_POST,
    text,
});
export const setUsersProfile = (profile) => ({
    type: SET_USERS_PROFILE,
    profile
});
export const setStatus=(status)=>({
    type: SET_STATUS,
    status
})
export const deletePost=(postId)=>({
    type: DELETE_POST,
    postId
})


export const getUsersProfile = (userId) => async (dispatch)=>{
    let response = await usersApi.getProfile(userId)
        dispatch(setUsersProfile(response.data));
      
};
export const getStatus = (userId) => async (dispatch)=>{
    let response= await profileApi.getStatus(userId)
        dispatch(setStatus(response.data));

};
export const updateStatus = (status) => async (dispatch)=>{
    let response =profileApi.updateStatus(status)
        
        dispatch(setStatus(status));
      
};

export default profilReducer;