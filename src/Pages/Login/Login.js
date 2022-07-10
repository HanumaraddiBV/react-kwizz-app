import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Redirect, Route, Switch } from "react-router-dom";

import Input from "../../components/GeneralComponents/Input";
import SignInPage from "../SignUp/SignInPage";

export default function Login() {
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
    //confirming the both login page data with the data is already stored by signup page into the global state comparing the both of them
    if (email == userData.email && password == userData.password) {
      setIsAuth(true);
      alert('You are successfully log in')
    } else {
      setIsAuth(false);
      alert("Your entering a wrong credentials please check it once");
    }
  };

// if(setIsAuth){
//   return(<Redirect to='/home'/>)
// }
  
  return (
    
    <div className="auth-container">
      <h2 className="form-heading center-text">Login</h2>
      <form onSubmit={loginHandler}>
        <div className="input-group">
          <Input
            inputType={"email"}
            name={"email"}
            title={"Email address"}
            className="textfield"
            required
            placeholder={"Enter Your password"}
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
            title={"Password"}
            className="textfield"
            required
            placeholder={"Enter Your password"}
            autoComplete="off"
            id="password"
            val={userData.password}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
      <div className="signup-group">
        <div>
          <Link to="/signup" className="signup-link">
            Create New Account
          </Link>
        </div>
      </div>
    </div>
  );
}

//
