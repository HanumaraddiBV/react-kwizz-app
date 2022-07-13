import * as actionTypes from "./ActionTypes";
export const addUserDetails = (payload) => {
  console.log("payload:", payload);
  return {
    type: actionTypes.ADD_USER_DETAILS,
    payload: payload,
  };
};

export const isAnswered = (payload) => {
  return {
    type: actionTypes.ANSWER,
    payload,
  };
};

export const isUserIsLogIn = (payload) => {
  return {
    type: actionTypes.USER_LOGIN,
    payload,
  };
};
export const answereIsWrong = (payload) => {
  return {
    type: actionTypes.WRONG_ANSWER,
    payload,
  };
};

export const isUserSignOut = () => {
  return {
    type: actionTypes.SIGN_OUT,
    value: null,
  };
};


export const addResultToProgressArr = (payload)=>{
  return{
    type: actionTypes.ADD_RESULT,
    payload
  }
}