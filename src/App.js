import React from 'react';
import './App.css';
import PostSection from "./components/post/MovieSection";
import Header from "./components/header/Header";
function App() {

    return (
        <div className="container">
            <Header/>
           <PostSection/>
        </div>
    );

}

export default App;