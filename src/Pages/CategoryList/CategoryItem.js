import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { HOME_ROUTE, LINK_STYLE } from "../../components/constatnts/constants";
import styles from "./CategoryItem.module.css";
class CategoryItem extends Component {
  // componentDidMount(){
  //   this.props.handleResult()
  // }
  render() {
    return (
      <Link
        to={`/rules/${this.props.title}`}
        className={styles.category_link}
        style={LINK_STYLE}
      >
        <div className={styles.category_item}>
          <img
            src={this.props.image}
            alt={this.props.title + "_image"}
            className="res-img"
          />
          <p className={styles.category_item_title}>{this.props.title}</p>
        </div>
      </Link>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.userInfo,
    result: state.userInfo.result,
    totalScore: state.userInfo.totalScore,
    categoryName: state.userInfo.categoryName,
    quizResultInfo: state.userProgressInfo.progressData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // handleResult: (payload) => dispatch(updatedProgressReport(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
