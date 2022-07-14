import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { LINK_STYLE, LOGIN_ROUTE } from "../../components/constatnts/constants";

class adminAuth extends Component {
  render() {
    return (
      <>
        {this.props.userEmail === "admin@admin.com" &&
        this.props.userPassword === "Admin@123" ? (
          <div>
            <div>
              <h2>Hello!, Admin You have full controll of this application.</h2>
            </div>

            <div>
              <h3>Add questions according to category </h3>
              <form>


              </form>
            </div>
          </div>
        ) : (
          <div className="signup-alert">
            <h2>
              If you want to access this page you have to login as admin
              credentials then only you can access this page
            </h2>
            <button className={`btn btn-primary`}>
              <Link to={LOGIN_ROUTE} style={LINK_STYLE}>
                Login
              </Link>
            </button>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userEmail: state.userInfo.userDetails.email,
    userPassword: state.userInfo.userDetails.password,
  };
};

export default connect(mapStateToProps)(adminAuth);
