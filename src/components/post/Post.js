import React from 'react';
import pexels from '../../assets/pexels.jpg'
import './Post.css'
const Post = ({title, body}) => {
    return (
        <div className="post-container">

            <h1>{title}</h1>
            <img src={pexels} width="200px" height="200px"/>
            <p>{body}</p>
        </div>
    );
};

export default Post;