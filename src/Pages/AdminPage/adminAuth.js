import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { LINK_STYLE, LOGIN_ROUTE } from "../../components/constatnts/constants";
import Input from "../../components/GeneralComponents/Input";
import { Button } from "../../components/GeneralComponents/Button";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Button from "react-bootstrap/Button";
import { withTranslation } from "react-i18next";
import { Select } from "../../components/GeneralComponents/Select";
import TextArea from "../../components/GeneralComponents/TextArea";
import { questionData } from "../../Data/Questions";
import axios from "axios";
import { addQuestionToDatabase } from "../../Redux/Actions";

class adminAuth extends Component {
  constructor() {
    super();
    this.state = {
      categoryName: "",
      question: "",
      optionA: "",
      optionB: "",
      optionC: "",
      optionD: "",
      correctAnswer: "",
      categoryOptions: ["React", "Javascript", "Java"],
      questionsList: [],
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  componentDidMount() {}
  formSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(this.state)
    let obj = {
      question: this.state.question,
      options: [
        this.state.optionA,
        this.state.optionB,
        this.state.optionC,
        this.state.optionD,
      ],
      answer: this.state.correctAnswer,
    };
    axios
      .get(
        `http://localhost:3001/questionData?category=${this.state.categoryName}`
      )
      .then((res) => {
        let questionslistData = res.data;
        console.log("questionslistData:", questionslistData[0].questions);

        this.setState(
          {
            ...this.state,
            questionslist: [...questionslistData[0].questions, obj],
          },
          () => {
            console.log("this.state.questionslist:", this.state.questionslist);
            // this.props.addQuestion(
            //   this.state.questionslist,
            //   this.state.categoryName
            // );
            this.handleDatabase(this.state.questionslist);
          }
        );

        // console.log(this.state)
      })
      .catch((err) => {
        console.log("err:", err);
      });

    // for (let i = 0; i < questionData.length; i++) {
    //   if (questionData[i].category === this.state.categoryName) {
    //     console.log("questionData[i]:", questionData[i]);
    //     questionData = [
    //       ...questionData,
    //       {
    //         category: this.state.categoryName,
    //         questions: [
    //           ...questionData[i].questions,
    //           {
    //             question: this.state.question,
    //             options: [
    //               this.state.optionA,
    //               this.state.optionB,
    //               this.state.optionC,
    //               this.state.optionD,
    //             ],
    //             answer: this.state.correctAnswer,
    //           },
    //         ],
    //       },
    //     ];
    //     // questionData[i].questions.push({
    //     //   question:this.state.question,
    //     //   options:[this.state.optionA,this.state.optionB,this.state.optionC,this.state.optionD],
    //     //   answer: this.state.correctAnswer
    //     // })
    //     console.log("questionData[i]:", questionData);
    //   }
    // }
  };
  handleDatabase = (payload) => {
    let id;
    if(this.state.categoryName=="React"){
      id=1;
    }else if(this.state.categoryName=="Javascript"){
      id=2;
    }else{
      id=3
    }
    axios
      .patch(
        `http://localhost:3001/questionData/${id}`,
        {
          category: this.state.categoryName,
          questions: payload,
        }
      )
      .then((res) => {
        let payloadData = res.data;
        console.log("payloadData:", payloadData);
        alert('You are successfully added question to the database')
        // handleQuestions(payloadData)
      })
      .catch((err) => {
        console.log("errrrr:", err);
      });
  };
  render() {
    const { t } = this.props;

    return (
      <>
        <div>
          {/* {this.props.userEmail === "admin@admin.com" &&
          this.props.userPassword === "Admin@123" ? ( */}
          <div style={{ marginTop: "100px", marginLeft: "10px" }}>
            <h2>Hello!, Admin You have full control of this application.</h2>

            <div className="main-admin">
              <h3>Add questions according to category </h3>
              <form onSubmit={this.formSubmitHandler}>
                <Select
                  className="Select-Cat"
                  title={"Category"}
                  name={"categoryName"}
                  options={this.state.categoryOptions}
                  value={this.state.categoryName}
                  onChange={this.handleChange}
                  placeholder={"Select Category"}
                />
                <TextArea
                  title={"Question Description"}
                  name={"question"}
                  rows={"5"}
                  cols={"80"}
                  value={this.state.question}
                  handleChange={this.handleChange}
                  placeholder={"Enter the question description"}
                />
                <div className="Main-input">
                  <div className="input-group a">
                    <Input
                      inputType={"text"}
                      name={"optionA"}
                      title={t("Option A")}
                      className="textfield ipt input"
                      required
                      placeholder={t("Enter Option A")}
                      // autoComplete="off"

                      val={this.state.optionA}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="input-group b">
                    <Input
                      inputType={"text"}
                      name={"optionB"}
                      title={t("Option B")}
                      className="textfield ipt"
                      required
                      placeholder={t("Enter Option B")}
                      // autoComplete="off"

                      val={this.state.optionB}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="input-group a">
                    <Input
                      inputType={"text"}
                      name={"optionC"}
                      title={t("Option C")}
                      className="textfield ipt"
                      required
                      placeholder={t("Enter Option C")}
                      // autoComplete="off"

                      val={this.state.optionC}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="input-group b">
                    <Input
                      inputType={"text"}
                      name={"optionD"}
                      title={t("Option D")}
                      className="textfield ipt input"
                      required
                      placeholder={t("Enter Option D")}
                      // autoComplete="off"

                      val={this.state.optionD}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="input-group correct">
                  <Input
                    inputType={"text"}
                    name={"correctAnswer"}
                    title={t("Correct Answer")}
                    className="textfield ipt input"
                    required
                    placeholder={t("Enter correct Answer")}
                    val={this.state.correctAnswer}
                    onChange={this.handleChange}
                  />
                </div>

                <Button className="submit-btn" type="submit" title={"Submit"} />
              </form>
            </div>
          </div>
          {/* ) : (
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
          )} */}
        </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    // addQuestion: (payload, categoryTitle) =>
    //   dispatch(addQuestionToDatabase(payload, categoryTitle)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(adminAuth));
