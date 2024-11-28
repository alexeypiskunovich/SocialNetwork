// MyPostsContainer.tsx
import React from 'react';
import { actions } from '../../../Redux/profile-reducer.ts';
import MyPosts from "./Myposts.tsx";
import { connect } from 'react-redux';
import { AppStateType } from '../../../Redux/redux-store.ts';
import { PostType } from '../../../types/types.ts';

type MapPropType = {
    postData: PostType[];
}

type DispatchPropType = {
    addPost: (textMessageProfile: string) => void;
}

// Обновленный mapStateToProps с явным указанием типа
const mapStateToProps = (state: AppStateType): MapPropType => {
    return {
        postData: state.profilePage.postData,
    };
}

// Объедините MapPropType и DispatchPropType
const MyPostsContainer = connect<MapPropType, DispatchPropType, {}, AppStateType>(
    mapStateToProps,
    { addPost: actions.addPostActionCreater }
)(MyPosts);

export default MyPostsContainer;
