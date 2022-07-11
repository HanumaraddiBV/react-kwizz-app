import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
          <div className={styles.result_footer}>
            <Link to="/category" className={`btn btn-error ${styles.exit_btn}`}>
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
    result: state.result,
    totalScore: state.totalScore,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps,mapDispatchToProps)(Result);
