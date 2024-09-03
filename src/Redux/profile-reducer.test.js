import profilReducer, { addPostActionCreater, deletePost } from "./profile-reducer";
import ReactDOM from "react-dom";
import App from "../App";
import React from "react"

it('lenght of posts should be incremented', ()=>{
    //1.test data
    let action =addPostActionCreater("yo yo yo");
    let state = {
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
        
    }
    //2.action
    let newState=profilReducer(state, action)
    //3.expectation
    expect(newState.postData.length).toBe(5);
});

it('after deleting length of message should be decrement', ()=>{
    //1.test data
    let action = deletePost(1);
   
    //2.action
    let newState=profilReducer(state, action)
    //3.expectation
    expect(newState.postData.length).toBe(3);
});

it('after deleting length of message should not be decrement if id is incrorrect', ()=>{
    //1.test data
    let action = deletePost(1000);
   
    //2.action
    let newState=profilReducer(state, action)
    //3.expectation
    expect(newState.postData.length).toBe(4);
});