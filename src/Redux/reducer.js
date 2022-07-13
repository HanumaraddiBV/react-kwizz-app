import * as actionTypes from "./ActionTypes";
const init = {
  userDetails: {
    name: null,
    email: null,
    password: null,
  },
  loginUser:{
    name: null,
    email: null,
    password: null,
  },
  result: [],
  totalScore: 0,
};

export const userReducer = (state = init, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER_DETAILS:
      return {
        ...state,
        userDetails: {
          ...state.userDetails,
          name: action.payload.name,
          email: action.payload.email,
          password: action.payload.password,
        },
      };
    case actionTypes.ANSWER:
      return {
        ...state,
        result: [...state.result, action.payload.result],
        totalScore: state.totalScore + action.payload.totalScore,
      };
    case actionTypes.SIGN_OUT:
      return {
        ...state,
        userDetails: {
          name: action.value,
          email: action.value,
          password: action.value,
        },
        result: [],
        totalScore: 0,
      };
    default:
      return state;
  }
};
