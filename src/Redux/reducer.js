import { ADD_USER_DETAILS, ANSWER } from "./ActionTypes";

const init = {
  userDetails: {
    name: null,
    email: null,
    password: null,
  },
  result: [],
  totalScore: 0,
};

export const userReducer = (state = init, action) => {
  switch (action.type) {
    case ADD_USER_DETAILS:
      return {
        ...state,
        userDetails: {
          ...state.userDetails,
          name: action.payload.name,
          email: action.payload.email,
          password: action.payload.password,
        },
      };
    case ANSWER:
      return {
        ...state,
        result: [...state.result, action.payload.result],
        totalScore: state.totalScore + action.payload.totalScore,
      };
    default:
      return state;
  }
};
