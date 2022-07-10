import { ADD_USER_DETAILS, ANSWER, WRONG_ANSWER } from "./ActionTypes";

export const addUserDetails = (payload) => {
  console.log("payload:", payload);
  return {
    type: ADD_USER_DETAILS,
    payload: payload,
  };
};

export const isAnswered = (payload) => {
  return {
    type: ANSWER,
    payload,
  };
};

export const answereIsWrong = (payload) => {
  return {
    type: WRONG_ANSWER,
    payload,
  };
};
