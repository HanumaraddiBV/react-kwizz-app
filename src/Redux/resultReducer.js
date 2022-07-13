import React from "react";
import * as actionTypes from "./ActionTypes";

const initialState = {
  progressData: [],
};

export const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_RESULT:
      return {
        ...state,
        progressData: [...state.progressData, action.payload],
      };
    default:
      return state;
  }
};
