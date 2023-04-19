import * as actionType from './ActionType'
import Dishes from "../Data/Dishes";

export const addComment = (dishId, rating, comment, author) => ({
    type: actionType.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        comment: comment,
        author: author
    }
});

export const loadDishes = dishes => ({
    type: actionType.LOAD_DISHES,
    payload: dishes
});

export const dishesLoading = () => ({
    type: actionType.DISHES_LOADING
});

export const fetchDishes = () => {
    return dispatch => {
        dispatch(dishesLoading());
        setTimeout(() => {
            dispatch(loadDishes(Dishes))
        }, 900);
    }
}