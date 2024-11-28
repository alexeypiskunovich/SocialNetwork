import React from 'react';
import s from './Myposts.module.css';
import Post from './Post/Posts.tsx';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { required } from '../../../utils/validators/validators.ts';
import { createField, GetStringKeys, Textarea } from '../../common/FormsControl/FormsControl.tsx';
import { PostType } from '../../../types/types.ts';


export type MapPropType = {
    postData: Array<PostType>
    addPost: (textMessageProfile: string) => void
}
export type DispatchPropType = {
    postData: Array<PostType>
    addPost: (textMessageProfile: string) => void
}
export type AddPostFormValuesType = {
    textMessageProfile: string
}
type AddPostFormValuesTypeKeys = GetStringKeys<AddPostFormValuesType>;


const MyPosts: React.FC<MapPropType & DispatchPropType> = (props) => {
    let postsElement = [...props.postData].reverse().map(p => (
        <Post key={p.id} message={p.text} LikesCount={p.likesCount} />
    ));

    let onAddPost = (value: AddPostFormValuesType) => {
        props.addPost(value.textMessageProfile);
    }

    return (
        <div className={s.PostBlock}>
            <h2>My posts</h2>
            <AddPostReduxForm onSubmit={onAddPost} />
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
};

let AddPostForm: React.FC<InjectedFormProps<AddPostFormValuesType, {}>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    {createField<AddPostFormValuesTypeKeys>("Your post", "textMessageProfile", [required], Textarea)}
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
        </form>
    );
}

let AddPostReduxForm = reduxForm<AddPostFormValuesType, {}>({
    form: "MyPostAddPostForm"
})(AddPostForm);

export default MyPosts;
