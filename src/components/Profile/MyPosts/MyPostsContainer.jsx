import React from 'react';
import { AddPostActionCreator, updateTextPostActionCreator } from '../../../redux/reducers/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    let profilePage = state.profilePage;
    return {
        posts: profilePage.posts,
        newTextForPost: profilePage.newTextForPost
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            console.log("addPost");

            let action = AddPostActionCreator();
            dispatch(action);
        },
        updateTextPost: (text) => {
            console.log("updateTextPost");
            let action = updateTextPostActionCreator(text);
            dispatch(action);
        }
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;