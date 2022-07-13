import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, Route, Switch, useHistory } from "react-router-dom";

import Input from "../../components/GeneralComponents/Input";
import SignInPage from "../SignUp/SignInPage";
import axios from "axios";
import {
  HOME_ROUTE,
  LINK_STYLE,
  SIGNUP_ROUTE,
} from "../../components/constatnts/constants";
import { addUserDetails, isUserIsLogIn } from "../../Redux/Actions";
export default function Login() {
  const { t } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();
  //getting the global store data using useSelector  hook

  const { userDetails } = useSelector((store) => store.userInfo);
  console.log("userDetails:", userDetails);
  //destructuring the email and password from userDetails
  const { email, password } = userDetails;

  const [userData, setUserData] = useState({ email: "", password: "" });
  const [isAuth, setIsAuth] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    // seting the state based on user input
    setUserData({ ...userData, [name]: value });
  };

  const loginHandler = (event) => {
    event.preventDefault();
    axios
      .get("http://localhost:3001/users")
      .then((res) => {
        const userAllList = res.data;
        // console.log("userAllList:", userAllList);
        let flag = false;
        let isEmail = true;
        let isPassword = true;
        let loginDetailsOfUser;
        for (let i = 0; i < userAllList.length; i++) {
          //confirming the both login page data with the data is already stored by signup page into the global state comparing the both of them

          if (
            userData.email == userAllList[i].email &&
            userData.password == userAllList[i].password
          ) {
            flag = true;
            loginDetailsOfUser = userAllList[i];
          } else if (
            userData.email == userAllList[i].email &&
            userData.password !== userAllList[i].password
          ) {
            isPassword = false;
          } else if (
            userData.password == userAllList[i].password &&
            userData.email !== userAllList[i].email
          ) {
            isEmail = false;
          }
        }
        if (flag) {
          setIsAuth(true);
          alert("You are successfully log in");
          history.push(HOME_ROUTE);
          dispatch(isUserIsLogIn(loginDetailsOfUser));
        } else if (!isEmail) {
          alert("You have entered wrong email. Please check your email");
        } else if (!isPassword) {
          alert("You have entered wrong password. Please check your password");
        } else {
          setIsAuth(false);
          alert(
            "Your entering a wrong credentials or you have to sign up first"
          );
          history.push(SIGNUP_ROUTE);
        }
      })
      .catch((err) => {
        alert(err.msg);
      });
  };

  return (
    <>
      {!userDetails.email ? (
        <div className="auth-container">
          <h2 className="form-heading center-text">{t("Login")}</h2>
          <form onSubmit={loginHandler}>
            <div className="input-group">
              <Input
                inputType={"email"}
                name={"email"}
                title={t("Email")}
                className="textfield"
                required
                placeholder={t("Enter Your Email")}
                autoComplete="off"
                id="email"
                val={userData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <Input
                inputType={"password"}
                name={"password"}
                title={t("Password")}
                className="textfield"
                required
                placeholder={t("Enter Your Password")}
                autoComplete="off"
                id="password"
                val={userData.password}
                onChange={handleChange}
              />
            </div>
            <button className="btn btn-primary" type="submit">
              {t("Login")}
            </button>
          </form>
          <div className="signup-group">
            <div>
              <Link
                to={SIGNUP_ROUTE}
                className="signup-link"
                style={LINK_STYLE}
              >
                {t("Create New Account")}
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div>Log out</div>
      )}
    </>
  );
}

//
