import axios from "axios";
import React, { Component } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

import { connect } from "react-redux";
// import Pdf from "react-to-pdf";
class ProgressPage extends Component {
  constructor() {
    super();
    this.state = {
      userReport: null,
      isView: false,
    };
    this.pdfRef = React.createRef();
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3001/users/${this.props.userId.id}`)
      .then((res) => {
        let userProgressData = res.data;
        this.setState({ ...this.state, userReport: userProgressData });
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
  handleDownloadPdf = async () => {
    const element = this.pdfRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("print.pdf");
  };

  render() {
    return (
      <div style={{ marginTop: "80px" }}>
        <div ref={this.pdfRef}>
          <div>
            <div className={"button-div"}>
              <button className="btn" onClick={this.handleDownloadPdf}>
                Download
              </button>
            </div>
          </div>

          <div>
            <h1>{`Hello ${this.props.userId.name} this your Progress report`}</h1>
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
                {this.state.userReport?.report?.map((ele, ind) => (
                  <tr key={ele.ind}>
                    <td>{ele.categoryName}</td>
                    <td>
                      {ele.result.map((res, ind) => {
                        return (
                          <div>
                            <p>
                              {ind + 1}.{res.questionDescription}
                            </p>
                          </div>
                        );
                      })}
                    </td>
                    <td>
                      {ele.result.map((res, ind) => {
                        return (
                          <div>
                            <p>{res.correctAns}</p>
                          </div>
                        );
                      })}
                    </td>
                    <td>
                      {ele.result.map((res, ind) => {
                        return (
                          <div>
                            <p>{res.selectedOption}</p>
                          </div>
                        );
                      })}
                    </td>
                    <td>{ele.totalScore}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state:", state);
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
    // printPdf: ()=> print()
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProgressPage);
