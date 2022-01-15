import BookReducers from "./BookReducers";
import { combineReducers } from "redux";

const RootReducers = combineReducers({
    BookReducers:BookReducers
});

export default RootReducers;