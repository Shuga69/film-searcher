import React, {useEffect} from 'react';
import Movie from "./Movie";
import {connect} from "react-redux";
import {getAllMovie as getMovieAction} from "../../redux/reducers/moviesReducer";
import './MovieSection.css'

const MovieSection = (props) => {
    useEffect(()=>{
        props.getAllMovie();
    },[]);
    return (
        <div className="movie-section">
            <h2>Найкращі фільми</h2>
            <div className="movie__inner">
        {
            props.movies.length !==0 ? props.movies.map(item=> <Movie key={item.id} title={item.title} image={item.poster_path} vote_average={item.vote_average}/>):<h3>Не знайдено</h3>
        }
            </div>
    </div>
);
};
export default connect(
    ({movies})=>({movies: movies.movies}),
    {
        getAllMovie: getMovieAction
    }
) (MovieSection);

