import logo from "./logo.svg";
import "./App.css";

import { Link, Route, Switch } from "react-router-dom";
import { I18nextProvider } from 'react-i18next'
import Home from "./Pages/Home/Home";

import Login from "./Pages/Login/Login";
import SignInPage from "./Pages/SignUp/SignInPage";
import Rules from "./Pages/Rules/Rules";
import Category from "./Pages/category/Category";
import Header from './components/Header/Header'
import { Suspense } from "react";
import i18n from "./i18n/i18n";
function App() {
  return (
    <div className="App">
    <I18nextProvider i18n={i18n}>
    <Suspense fallback="<h1>Loading</h1>">
      <Header />
      <Switch>
        <Route exact path="/signup" component={SignInPage} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path='/category' component={Category}/>
        <Route path='/rules/:category' component={Rules}/>
          {/* <Route path='/quiz/:category' element={<Quiz/>}/> */}
      </Switch>
    </Suspense>
    </I18nextProvider>
    </div>
  );
}

export default App;
