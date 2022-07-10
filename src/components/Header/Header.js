import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Login from "../../Pages/Login/Login";
import styles from "./Header.module.css";
export default class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }
  loginOutHandler = () => {};
  render() {
    return (
      <React.Fragment>
        <header className={styles.nav_container}>
          <nav className={`navbar ${styles.container}`}>
            <div className="logo">
              <h1>Quizee</h1>
            </div>
            {/* all nav bar routing are linked here */}
            <ul className={styles.nav_links}>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}
