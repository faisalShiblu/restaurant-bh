import Dishes from "../Data/Dishes";
import Comments from "../Data/Comments";
import { combineReducers } from "redux";
import * as actionType from './../../Redux/ActionType'

const dishReducer = (dishState = Dishes, action) => {
    switch (action.type) {
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
            console.log(comment);
            return commentState.concat(comment);
        default:
            return commentState;

    }
}


export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer
});