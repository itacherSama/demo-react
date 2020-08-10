
import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

let MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);


    return (

        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>add post</button>
            </div>
            <div className={s.posts}>
                
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;