import React, { Component } from 'react'
import  styles from "./Header.module.css";
export default class Header extends Component {
    constructor(){
        super();
        this.state={

        }
    }
    loginOutHandler = ()=>{

    }
  render() {
    return (
      <React.Fragment>
        <header className={styles.nav_container}>
      <nav className={`navbar ${styles.container}`}>
        <div className="logo">
          <h1>Quizee</h1>
        </div>
        <ul className={styles.nav_links}>
          <li>
            <button
              to="/login"
              className={styles.login_btn}
              onClick={this.loginOutHandler}
            >
              Login
            </button>
          </li>
        </ul>
      </nav>
    </header>
      </React.Fragment>
    )
  }
}
