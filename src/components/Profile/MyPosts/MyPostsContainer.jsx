import React from 'react';
import { setAddPost, setUpdateTextPost } from '../../../redux/reducers/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    let profilePage = state.profilePage;
    return {
        posts: profilePage.posts,
        newTextForPost: profilePage.newTextForPost
    }
}

let mapDispatchToProps = {
    setAddPost,
    setUpdateTextPost
};

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;