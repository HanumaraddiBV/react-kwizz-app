import { createStore, combineReducers, applyMiddleware } from "redux";
import { userReducer } from "./reducer";
import logger from "redux-logger";
const thunk = require("redux-thunk").default;
export const Store = createStore(userReducer, applyMiddleware(thunk, logger));
