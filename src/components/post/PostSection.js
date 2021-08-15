import React, {useEffect} from 'react';
import Post from "./Post";
import {connect} from "react-redux";
import {getPosts as getPostsAction} from "../../redux/reducers/postReducer";
import './PostSection.css'

const PostSection = ({posts,getPosts}) => {
    useEffect(()=>{
        getPosts();
    },[]);

    console.log(posts);
    return (
        <div className="post-section">
            {posts.length && posts.map(item=> <Post key={item.id} title={item.title} body={item.body}/>)}
        </div>
    );

}

export default connect(
    ({posts})=>({posts: posts.posts}),
    {
        getPosts: getPostsAction
    }
) (PostSection);
