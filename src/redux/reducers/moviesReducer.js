import {GET_MOVIE} from "../contacts/action-types";
import {getMovie} from "../actions/moviesAction";


const defaultState = {
    movies: []
};

export const moviesReducer = (state = defaultState, {type, payload})=>{
    switch (type) {
        case GET_MOVIE:
            return {...state, movies: payload};
        default:
            return state;
    }
};

export const getAllMovie = () => async (dispatch) => {
    try {
        await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=067dcc3067b9033cb3827552cc15eb92&language=en-US&page=1')
            .then((response) => response.json())
            .then((data) => dispatch(getMovie(data.results)));
    }catch (error) {
        console.log(error)
    }
};
