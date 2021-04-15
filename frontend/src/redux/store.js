import { combineReducers, createStore, applyMiddleware } from "redux";
import userReducer from "./reducer/userReducer";
import thunk from "redux-thunk";
export default createStore(
    combineReducers({ user: userReducer }),
    applyMiddleware(thunk)
);