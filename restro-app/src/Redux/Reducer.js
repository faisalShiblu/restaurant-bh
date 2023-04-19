import Comments from "../Data/Comments";
import { combineReducers } from "redux";
import * as actionType from './ActionType'

const dishReducer = (dishState = { isLoading: false, dishes: [] }, action) => {
    switch (action.type) {
        case actionType.DISHES_LOADING:
            return {
                ...dishState,
                isLoading: true,
                dishes: []
            }
        case actionType.LOAD_DISHES:
            return {
                ...dishState,
                isLoading: false,
                dishes: action.payload
            }
        default:
            return dishState;

    }
}

const commentReducer = (commentState = Comments, action) => {
    switch (action.type) {
        case actionType.ADD_COMMENT:
            let comment = action.payload;
            comment.id = commentState.length + 1;
            comment.date = new Date().toDateString();
            return commentState.concat(comment);
        default:
            return commentState;

    }
}


export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer
});