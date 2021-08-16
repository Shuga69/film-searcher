import React from 'react';
import pexels from '../../assets/pexels.jpg'
import './Movie.css'
const Movie = ({title, vote_average, image}) => {
    let img = "https://image.tmdb.org/t/p/w185" + image;
    return (
        <div className="movie-card">
            <img src={img} width="200px" height="200px"/>
            <h3>{title}</h3>
            <p>Rating: {vote_average}</p>
        </div>
    );
};

export default Movie;