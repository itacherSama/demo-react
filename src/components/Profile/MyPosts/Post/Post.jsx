
import React from 'react';
import s from './Post.module.css';
import Avatar from '../../../anotherComponents/Avatar/Avatar';

let Post = (props) => {
    return (

        <div className={s.item}>
            <img src="" alt="" />
            <Avatar state={{
                src: "https://i.ytimg.com/vi/_ejzVZMoZcU/maxresdefault_live.jpg",
                alt: "My post"
                }} />
            {props.message}
            <div>
                <span>like {props.likesCount}</span>

            </div>
        </div>
    )
}

export default Post;