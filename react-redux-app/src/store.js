import { createStore } from "redux";
import RootReducers from "./MyComponent/Reducers/RootReducers";

const store=createStore(RootReducers);

export default store;