import { combineReducers } from "redux";
import * as actionType from './ActionType';
import { initalContactForm } from "./Forms";
import { createForms } from "react-redux-form";

const dishReducer = (dishState = { isLoading: false, dishes: [], errorMessage: null }, action) => {
    switch (action.type) {
        case actionType.DISHES_LOADING:
            return {
                ...dishState,
                isLoading: true,
                errorMessage: null,
                dishes: []
            }
        case actionType.LOAD_DISHES:
            return {
                ...dishState,
                isLoading: false,
                errorMessage: null,
                dishes: action.payload
            }
        case actionType.DISHES_FAILED:
            return {
                ...dishState,
                isLoading: false,
                errorMessage: action.payload,
                dishes: []
            }
        default:
            return dishState;

    }
}

const commentReducer = (commentState = { isLoading: false, comments: [] }, action) => {
    switch (action.type) {
        case actionType.COMMENT_LOADING:
            return {
                ...commentState,
                isLoading: true,
                comments: []
            }
        case actionType.LOAD_COMMENT:
            return {
                ...commentState,
                isLoading: false,
                comments: action.payload
            }
        case actionType.ADD_COMMENT:
            let comment = action.payload;
            return {
                ...commentState,
                comments: commentState.comments.concat(comment)
            }
        default:
            return commentState;

    }
}


export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer,
    ...createForms({
        feedback: initalContactForm
    })
});