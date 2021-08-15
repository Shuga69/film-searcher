import {GET_POSTS} from "../contacts/action-types";
import {setPosts} from "../actions/postAction";

const defaultState = {
    posts: [],
};

export const postReducer = (state = defaultState, {type, payload})=>{
    switch (type) {
        case GET_POSTS:
            return {...state, posts: payload};
        default:
            return state;
    }
};

export const getPosts = () => async (dispatch) => {
    try {
        await fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => dispatch(setPosts(data)));
    }catch (error) {
        console.log(error)
    }
};