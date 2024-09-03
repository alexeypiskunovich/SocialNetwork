import React from 'react';
import { addPostActionCreater} from '../../../Redux/profile-reducer';
import MyPosts from "./Myposts"
import { connect } from 'react-redux';

const mapStateToProps =(state)=>{
  return{
    postData:state.profilePage.postData,
    newPostText:state.profilePage.newPostText,

  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    
    addPost:(text)=>{
     dispatch(addPostActionCreater(text))

    }
  }
}


const MyPostsContainer=connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;