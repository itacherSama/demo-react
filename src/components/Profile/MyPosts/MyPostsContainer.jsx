
import React from 'react';
import { AddPostActionCreator, updateTextPostActionCreator } from '../../../redux/reducers/profile-reducer';
import MyPosts from './MyPosts';

let MyPostsContainer = (props) => {
    let state = props.store.getState().profilePage;

    let addPost = () => {
        let action = AddPostActionCreator();
        props.store.dispatch(action);
    }

    let updateTextPost = (text) => {
        let action = updateTextPostActionCreator(text);
        props.store.dispatch(action);
    }
 
    return <MyPosts 
            addPost={addPost}
            updateTextPost={updateTextPost}
            posts={state.posts}
            newTextForPost={state.newTextForPost} />
}

export default MyPostsContainer;