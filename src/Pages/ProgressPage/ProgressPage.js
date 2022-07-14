import axios from "axios";
import React, { Component } from "react";
import './progress.module.css'
import { connect } from "react-redux";

class ProgressPage extends Component {
  constructor() {
    super();
    this.state = {
      userReport: null,
      isView: false,
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3001/users/${this.props.userId.id}`)
      .then((res) => {
        let userProgressData = res.data;
        this.setState({...this.state,userReport: userProgressData})
        console.log("userProgressData:", userProgressData);
        if (userProgressData.report.length > 0) {
          this.setState({ userReport: userProgressData });
        } else {
          this.setState({ userReport: this.props.userId });
        }
      })
      .catch((err) => {
        console.log("err:", err);
      });
  }


  render() {
    return (
      <>
        <div>
          <div><h2>
            Hey!, {this.props.userId.name} You can view your progress report or
            you can download in pdf format,click! on below buttons according to
            your choice
          </h2>
          <div className={"button-div"}>
            <button onClick={()=> this.setState({...this.state,isView: true})}>View</button>
            <button>Download</button>
          </div></div>
          <div>
        <table className="table">
          <thead>
            <tr>
              <th>Category Name</th>
              <th>Question</th>
              <th>Correct Answer</th>
              <th>Your Answer</th>
              <th>Total Score</th>
            </tr>
          </thead>
          <tbody>
            {this.state.userReport?.report?.map((ele,ind) => (
              <tr key={ele.ind}>
                <td>{ele.categoryName}</td>
                <td>{ele.result.map((res,ind)=>{
                 return( <div>
                  <p>{ind+1}.{res.questionDescription}</p>
                 </div>)
                })}</td>
                <td>{ele.result.map((res,ind)=>{
                 return( <div>
                  <p>{res.correctAns}</p>
                 </div>)
                })}</td>
                <td>{ele.result.map((res,ind)=>{
                 return( <div>
                  <p>{res.selectedOption}</p>
                 </div>)
                })}</td>
                <td>{ele.totalScore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state:', state)
  return {
    userId: state.userInfo.userDetails,
    result: state.userInfo.result,
    totalScore: state.userInfo.totalScore,
    categoryName: state.userInfo.categoryName,
    quizResultInfo: state.userProgressInfo.progressData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProgressPage);
