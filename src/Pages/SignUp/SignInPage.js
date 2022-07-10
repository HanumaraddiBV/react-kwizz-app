import React, { useState } from "react";

import styles from "./Signup.module.css";
import Input from "../../components/GeneralComponents/Input";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUserDetails } from "../../Redux/Actions";
const SignInPage = () => {
  const dispatch = useDispatch();
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
    } else {
      setMsg(false);
    }
    // console.log(registerData);
    //dispatching the data into reducer 
    dispatch(addUserDetails(registerData));
    alert(`${registerData.name} you are successfully sign up`);
  };

  //logic for password visibility
  const showPass = (e) => {
    e.preventDefault();
    setVisible(!visible);
  };
  return (
    <div className="auth-container">
      <h2 className="center-text">Signup</h2>
      <form onSubmit={isRegister}>
        <div className="input-group">
          <Input
            inputType={"name"}
            name={"name"}
            title={"Name"}
            className="textfield"
            required
            placeholder={"Enter Your Name"}
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
            title={"Email address"}
            className="textfield"
            required
            placeholder={"Enter Your email"}
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
            title={"Password"}
            required
            placeholder={"Enter Your password"}
            autoComplete="off"
            val={registerData.password}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirm_password">Confirm Password</label>
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
            Password and ConfirmPassword don't Match.
          </span>
        )}
        <button className="btn btn-primary">Create New Account</button>
      </form>
      <div className={styles.signup_group}>
        <button>
          <Link to="/login" className={styles.signup_link}>
            Already have an account
          </Link>
        </button>
        <span className="material-icons-outlined">navigate_next</span>
      </div>
    </div>
  );
};

export default SignInPage;
