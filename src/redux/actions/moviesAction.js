import {GET_MOVIE} from "../contacts/action-types";
export const getMovie = (movies) =>{
    return{
        type: GET_MOVIE,
        payload: movies
    }
};
