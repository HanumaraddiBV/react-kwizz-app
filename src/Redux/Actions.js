import * as actionTypes from "./ActionTypes";
const axios = require("axios");

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

export const addResultToProgressArr = (payload) => {
  return {
    type: actionTypes.ADD_RESULT,
    payload,
  };
};

export const updateResultAgainEmpty = () => {
  return {
    type: actionTypes.UPDATE_RESULT,
  };
};

export const updatedProgressReport = (payload) => (dispatch) => {
  var reportList;
  dispatch(addResultToProgressArr(payload));
  let resultObject = {
    categoryName: payload.categoryName,
    totalScore: payload.totalScore,
    resultArr: payload.result,
  };
  axios
    .get(`http://localhost:3001/users/${payload.userId.id}`)
    .then((res) => {
      // console.log(res.data.report)
      [reportList] = res.data.report;
      console.log("reportList:", reportList);
    })
    .catch((err) => {
      console.log("err:", err);
    });

  console.log("reportList1:", reportList);

  axios
    .patch(`http://localhost:3001/users/${payload.userId.id}`, {
      report: [reportList, resultObject],
    })
    .then((resp) => {
      console.log("res", resp.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
