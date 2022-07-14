import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { withTranslation } from 'react-i18next'
import Login from "../../Pages/Login/Login";
import styles from "./Header.module.css";
import { connect } from "react-redux";
import { ADMIN_ROUTE, HOME_ROUTE, LINK_STYLE, LOGIN_ROUTE } from "../constatnts/constants";
 class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }
  loginOutHandler = () => {};
  render() {
    const {i18n} = this.props
    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
      };
      const {t} = this.props
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
                <Link to={HOME_ROUTE} style={LINK_STYLE}>{t('Home')}</Link>
              </li>
              <li>
                <Link to={ADMIN_ROUTE} style={LINK_STYLE}>{t('Admin')}</Link>
              </li>
              <li>
                <Link to={LOGIN_ROUTE} style={LINK_STYLE}>{!this.props.email ?t('Login'): t('Logout')}</Link>
              </li>
              <li>
              <button onClick={() => changeLanguage('en')}>English</button>
       
              </li>
              <li> <button onClick={() => changeLanguage('sp')}>Spanish</button></li>
              <li> <button onClick={() => changeLanguage('ar')}>Arabic</button></li>
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
  };
};
const mapDispatchToProps = dispatch=>{
  return{
     
  }
}
export default connect(mapStateToProps) (withTranslation()(Header))