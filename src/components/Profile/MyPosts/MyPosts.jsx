
import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import AddNewPostForm from "./AddNewPostForm/AddNewPostForm";

let MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount} />);

    let onAddPost = (formPost) => {
        props.setAddPost(formPost.newPost);
    }
 
    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <AddNewPostForm onSubmit={onAddPost}/>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;