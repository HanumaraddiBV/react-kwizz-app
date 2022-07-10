import logo from "./logo.svg";
import "./App.css";

import Home from "./Pages/Home/Home";

import { Link, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login/Login";
import SignInPage from "./Pages/SignUp/SignInPage";

function App() {
  return (
    <div className="App">
     
      <Switch>
        <Route exact path="/signup" component={SignInPage} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
