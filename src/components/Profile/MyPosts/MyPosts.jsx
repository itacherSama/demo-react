
import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { AddPostActionCreator, updateTextPostActionCreator } from '../../../redux/reducers/profile-reducer';

let MyPosts = (props) => {
    let postsElements = props.state.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        let action = AddPostActionCreator();
        props.dispatch(action);
    }

    let updateTextPost = () => {
        let text = newPostElement.current.value;
        let action = updateTextPostActionCreator(text);

        props.dispatch(action);
    }
 
    return (

        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <textarea ref={newPostElement} onChange={updateTextPost} value={props.state.newTextForPost} />
            </div>
            <div>
                <button onClick={ addPost }>add post</button>
            </div>
            <div className={s.posts}>
                
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;