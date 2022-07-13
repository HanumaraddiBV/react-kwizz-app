import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  CATEGORY_ROUTE,
  LINK_STYLE,
} from "../../components/constatnts/constants";
import {
  addResultToProgressArr,
  updatedProgressReport,
  updateResultAgainEmpty,
} from "../../Redux/Actions";
import styles from "./Result.module.css";
class Result extends Component {
  render() {
    return (
      <div>
        <h1 className="center-text">Score : {this.props.totalScore}/50</h1>
        <div className={styles.result_container}>
          <div className={styles.result_check}>
            <ol>
              {this.props.result.map((item, index) => (
                <li key={index}>
                  <h2>{item.questionDescription}</h2>
                  <p
                    className={
                      item.correctAns === item.selectedOption
                        ? `${styles.crr_ans}`
                        : `${styles.wrong_ans}`
                    }
                  >
                    Your Answer: {item.selectedOption}
                  </p>
                  <p>
                    <b>Correct Answer:</b> {item.correctAns}
                  </p>
                </li>
              ))}
            </ol>
          </div>
          <div
            className={styles.result_footer}
            onClick={() => {
              this.props.handleResult({
                userId: this.props.userId,
                result: this.props.result,
                totalScore: this.props.totalScore,
                categoryName: this.props.categoryName,
                quizResultInfo: this.props.quizResultInfo,
              });

              this.props.toUpdateResultToEmpty();
            }}
          >
            <Link
              to={CATEGORY_ROUTE}
              style={LINK_STYLE}
              className={`btn btn-error ${styles.exit_btn}`}
            >
              Exit
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.userInfo.userDetails,
    result: state.userInfo.result,
    totalScore: state.userInfo.totalScore,
    categoryName: state.userInfo.categoryName,
    quizResultInfo: state.userProgressInfo.progressData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleResult: (payload) => dispatch(updatedProgressReport(payload)),
    toUpdateResultToEmpty: () => dispatch(updateResultAgainEmpty()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Result);
