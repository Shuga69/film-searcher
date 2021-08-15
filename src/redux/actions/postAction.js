import {GET_POSTS} from "../contacts/action-types";
export const setPosts = (posts) =>{
    return{
        type: GET_POSTS,
        payload: posts
    }
};