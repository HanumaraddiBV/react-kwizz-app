
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { userReducer } from "./reducer";
export const Store = createStore(userReducer);
