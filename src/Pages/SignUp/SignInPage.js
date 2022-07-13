import React, { useState } from "react";

import styles from "./Signup.module.css";
import Input from "../../components/GeneralComponents/Input";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUserDetails } from "../../Redux/Actions";
import { useTranslation } from "react-i18next";
import axios from "axios";
import validator from "validator";
import { LINK_STYLE, LOGIN_ROUTE } from "../../components/constatnts/constants";
const SignInPage = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const history = useHistory();
  //creating state for user details
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  // when user want to know the password based on this state password will be visible in ui
  const [visible, setVisible] = useState(false);

  //this state tells the passwords are matching are not
  const [msg, setMsg] = useState(false);

  //setting the states
  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegisterData({ ...registerData, [name]: value });
  };

  // on submitting the data is stored in global state
  const isRegister = (e) => {
    e.preventDefault();
    //checking the both passwords
    if (registerData.password !== registerData.confirmPass) {
      setMsg(true);
      alert("Please check your password once");
    } else {
      setMsg(false);
      // console.log(registerData);

      //validating name
      if (registerData.name.length <= 0) {
        alert("Your name should be atleast one character");
      }

      //validating password to make sure that password has to be strong
      else if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/.test(
          registerData.password
        )
      ) {
        alert(
          "Your password should be strong. Atleast have one special character,one Uppercase letter,one lowercase letter and one number"
        );
      } else {
        //dispatching the data into reducer

        axios
          .post("http://localhost:3001/users", {
            id: Math.floor(Math.random() * 20),
            name: registerData.name,
            email: registerData.email,
            password: registerData.password,
            report :[]
          })
          .then((res) => {
            // console.log('res:', res)
            const userInfo = res.data;
            dispatch(addUserDetails(userInfo));
          })
          .catch((err) => {
            console.log("err:", err);
          });
        alert(`${registerData.name} you are successfully sign up`);
        history.push(LOGIN_ROUTE);
      }
    }
  };

  //logic for password visibility
  const showPass = (e) => {
    e.preventDefault();
    setVisible(!visible);
  };
  return (
    <div className="auth-container">
      <h2 className="center-text">{t("Signup")}</h2>
      <form onSubmit={isRegister}>
        <div className="input-group">
          <Input
            inputType={"name"}
            name={"name"}
            title={t("Name")}
            className="textfield"
            required
            placeholder={t("Enter Your Name")}
            autoComplete="off"
            id="name"
            val={registerData.name}
            onChange={handleChange}
          />
        </div>
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
            val={registerData.email}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <Input
            inputType={visible ? "text" : "password"}
            name={"password"}
            title={t("Password")}
            required
            placeholder={t("Enter Your Password")}
            autoComplete="off"
            val={registerData.password}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirm_password">{t("Confirm Password")}</label>
          <div className={styles.view_pass}>
            <input
              type={visible ? "text" : "password"}
              name="confirmPassword"
              id="confirm_password"
              className={styles.confirm_pass}
              required
              autoComplete="off"
              value={registerData.confirmPass}
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  confirmPass: e.target.value,
                })
              }
            />
            <button onClick={(e) => showPass(e)} className={styles.visi_btn}>
              <span className="material-icons-outlined">
                {visible ? "visibility" : "visibility_off"}
              </span>
            </button>
          </div>
        </div>
        {msg && (
          <span className={`small-text ${styles.error}`}>
            {t("Password and ConfirmPassword don't Match")}
          </span>
        )}
        <button className="btn btn-primary">{t("Create New Account")}</button>
      </form>
      <div className={styles.signup_group}>
        <button>
          <Link
            to={LOGIN_ROUTE}
            className={styles.signup_link}
            style={LINK_STYLE}
          >
            {t("Already have an account")}
          </Link>
        </button>
        <span className="material-icons-outlined">navigate_next</span>
      </div>
    </div>
  );
};

export default SignInPage;
