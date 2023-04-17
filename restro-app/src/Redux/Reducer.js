import Dishes from "../Data/Dishes";
import Comments from "../Data/Comments";


const initialState = {
    dishes: Dishes,
    comments: Comments
}

export const Reducer = (state = initialState, action) => {
    return state;
}