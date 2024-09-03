import React, {Component } from 'react'; 
import s from './Myposts.module.css';
import Post from './Post/Posts';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../../utils/validators/validators';
import { maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControl/FormsControl';

const MyPosts = React.memo((props) => {
    
    
    console.log(props);
    let postsElement=
        [...props.postData].reverse().map(p => <Post message={p.text} LikesCount={p.likesCount} />);
    
    let onAddPost=(value)=>{
      props.addPost(value.textMessageProfile);
    }

     return (
    <div className={s.PostBlock}>
      
      <h2>My posts</h2>
      
      <AddPostReduxForm onSubmit={onAddPost}/>
      <div className={s.posts}>
        {postsElement}
      </div>
    </div>

  );
})

let AddPostForm=(props)=>{
  return(
    <form onSubmit={props.handleSubmit}>
      <div>
        <div>
          <Field component={Textarea} name="textMessageProfile" validate={[required, maxLengthCreator(10)]} placeholder={'Post message '}/>
        </div>
        <div>
          <button >Add posts </button>
        </div>
      </div>
    </form>
  )
}

let AddPostReduxForm=reduxForm({form:"MyPostAddPostForm"})(AddPostForm)

export default MyPosts;