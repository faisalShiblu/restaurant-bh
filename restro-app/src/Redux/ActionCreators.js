import * as actionType from './ActionType'
import axios from 'axios';
import { baseURL } from './baseURL';


export const loadDishes = dishes => ({
    type: actionType.LOAD_DISHES,
    payload: dishes
});

export const dishesLoading = () => ({
    type: actionType.DISHES_LOADING
});

export const dishesFailed = (errorMessage) => ({
    type: actionType.DISHES_FAILED,
    payload: errorMessage
});

export const fetchDishes = () => {
    return dispatch => {
        dispatch(dishesLoading());
        // setTimeout(() => {
        //     dispatch(loadDishes(Dishes))
        // }, 900);
        axios.get(baseURL + "dishes")
            .then(response => response.data)
            .then(dishes => dispatch(loadDishes(dishes)))
            .catch(error => dispatch(dishesFailed(error.message)));
    }
}

export const loadComments = comments => ({
    type: actionType.LOAD_COMMENT,
    payload: comments
});

export const commentsLoading = () => ({
    type: actionType.COMMENT_LOADING
});

export const fetchComments = () => {
    return dispatch => {
        dispatch(commentsLoading());
        axios.get(baseURL + "comments")
            .then(response => response.data)
            .then(comments => dispatch(loadComments(comments)));
    }
}

export const addComment = (dishId, rating, comment, author) => dispatch => {
    const newComment = {
        dishId: dishId,
        rating: rating,
        comment: comment,
        author: author
    }
    newComment.date = new Date().toISOString();
    axios.post(baseURL + "comments", newComment)
        .then(response => response.data)
        .then(cm => dispatch(commentConcat(cm)));
};

export const commentConcat = (comment) => ({
    type: actionType.ADD_COMMENT,
    payload: comment
})