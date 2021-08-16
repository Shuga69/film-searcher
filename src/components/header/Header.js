import React, {useEffect, useState} from 'react'
import './Header.css'
import Search from "../Search/Search";

const Header = () => {

    return (
        <div className="header__inner">
            {/*<Link to={"/top-movies/"}>*/}
            {/*    <img src={logo} alt="Logo"/>*/}
            {/*</Link>*/}
            <div className="brand-container">
                <h1>Top movies</h1>
                <p>The best movies only on Top movies</p>
            </div>
            <Search/>
        </div>
    )
};



export default Header;