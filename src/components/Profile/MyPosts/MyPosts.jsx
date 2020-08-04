
import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

let MyPosts = () => {
    return (

        <div>My post
            <div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>add post</button>
            </div>
            <div className={s.posts}>
               <Post />
               <Post />
               <Post />
        </div>
        </div>
    )
}

export default MyPosts;