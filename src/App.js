import React,{ useEffect } from 'react';
import {connect} from 'react-redux';
import './App.css';
import {getPosts as getPostsAction} from './redux/reducers/postReducer'
import Post from "./components/post/Post";
import PostSection from "./components/post/PostSection";
function App() {

    return (
        <div className="container">
           <PostSection/>
        </div>
    );

}

export default App;