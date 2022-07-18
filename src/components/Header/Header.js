import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { withTranslation } from "react-i18next";
import Login from "../../Pages/Login/Login";
import styles from "./Header.module.css";
import { connect } from "react-redux";
import {
  ADMIN_ROUTE,
  HOME_ROUTE,
  LINK_STYLE,
  LOGIN_ROUTE,
} from "../constatnts/constants";
class Header extends Component {
  constructor() {
    super();
    this.state = {
    
    };
  }
  loginOutHandler = () => {};

  changeLanguageHandler = (e) => {
    
    const { i18n } = this.props;
    i18n.changeLanguage(e.target.value);
  };
  render() {
    const { t } = this.props;
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
                <Link to={HOME_ROUTE} style={LINK_STYLE}>
                  {t("Home")}
                </Link>
              </li>
              {this.props.email === "admin@admin.com" &&
                this.props.password === "Admin@123" && (
                  <li>
                    <Link to={ADMIN_ROUTE} style={LINK_STYLE}>
                      {t("Admin")}
                    </Link>
                  </li>
                )}
              <li>
                <Link to={LOGIN_ROUTE} style={LINK_STYLE}>
                  {!this.props.email ? t("Login") : t("Logout")}
                </Link>
              </li>

              <li>
                <select
                  className="custom-select"
                  style={{
                    width: "100%",
                    height: "25px",
                    marginTop: "8px",
                    backgroundColor: "whitesmoke",
                    border: "none",
                    outline: "none",
                  }}
                  onChange={this.changeLanguageHandler}
                >
                  <option value="en">English</option>
                  <option value="sp">Spanish</option>
                  <option value="ar">Arabic</option>
                </select>
              </li>
            </ul>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.userInfo.userDetails.email,
    password: state.userInfo.userDetails.password,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps)(withTranslation()(Header));
