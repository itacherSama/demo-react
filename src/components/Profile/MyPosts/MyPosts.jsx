
import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

let MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onUpdateTextPost = () => {
        let text = newPostElement.current.value;
        props.updateTextPost(text);
    }
 
    return (

        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <textarea ref={newPostElement} onChange={onUpdateTextPost} value={props.newTextForPost} />
            </div>
            <div>
                <button onClick={ onAddPost }>add post</button>
            </div>
            <div className={s.posts}>
                
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;