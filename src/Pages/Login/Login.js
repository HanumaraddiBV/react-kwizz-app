import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link, Redirect, Route, Switch, useHistory } from "react-router-dom";

import Input from "../../components/GeneralComponents/Input";
import SignInPage from "../SignUp/SignInPage";
import axios from "axios";
export default function Login() {
  const { t } = useTranslation();
  const history = useHistory();
  //getting the global store data using useSelector  hook

  const { userDetails } = useSelector((store) => store);
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
        console.log('userAllList:', userAllList)
        let flag = false;
        for (let i = 0; i < userAllList.length; i++) {
          //confirming the both login page data with the data is already stored by signup page into the global state comparing the both of them

          console.log("userAllList[i]:", userAllList[i]);
          
          if (
            userData.email == userAllList[i].email &&
            userData.password == userAllList[i].password
          ) {
            flag = true;
           
          } 
         
        }
        if (flag) {
          setIsAuth(true);
          alert("You are successfully log in");
          history.push("/home");
        } else {
          setIsAuth(false);
          alert(
            "Your entering a wrong credentials or you have to sign up first"
          );
          history.push("/signup");
        }
      })
      .catch((err) => {});
  };

  // if(setIsAuth){
  //   return(<Redirect to='/home'/>)
  // }

  return (
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
          <Link to="/signup" className="signup-link">
            {t("Create New Account")}
          </Link>
        </div>
      </div>
    </div>
  );
}

//
