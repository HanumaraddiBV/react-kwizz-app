import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import {
  LINK_STYLE,
  RESULT_ROUTE,
} from "../../components/constatnts/constants";
import { questionDatas } from "../../Data/Questions";
import {
  addResultToProgressArr,
  answereIsWrong,
  isAnswered,
  updatedProgressReport,
} from "../../Redux/Actions";
import styles from "./Quiz.module.css";
export const Quiz = () => {
  const { categoryName, totalScore, result } = useSelector(
    (store) => store.userInfo
  );

  const dispatch = useDispatch();
  //keep record of question number
  const [quesNum, setQuesNum] = useState(0);

  const [questionData, setQuestionData] = useState(questionDatas);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/questionData`)
      .then((res) => {
        let allList = res.data;
        // console.log("allList:", allList);
        setQuestionData(allList);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  }, []);
  const timeRef = useRef();
  //creating state for timer
  const [timer, setTimer] = useState(15);
  //extracting category name from useHistory hook
  const history = useHistory();
  // console.log("history:", history.location.pathname.split("/")[2]);
  //to keep the selected option
  const [selected, setSelected] = useState();

  // to disabled the options once user selected
  const [disableOption, setDisableOption] = useState(false);

  //disabled the button after the all question are dusplayed
  const [nxtDisable, setNxtDisable] = useState(true);
  //with help of useParam hook getting the particular category from the url
  const { category } = useParams();

  //matching the category with the data
  // console.log("questionData:", questionData);
  const quizCategory = questionData.find((item) => item.category === category);

  // according to the question number getting the correct answer
  const correctAnswer = quizCategory.questions[quesNum].answer;

  const optionHandler = (option, questionDescription) => {
    //updateding the selected state to this option
    setSelected(option);
    //disabling the other option once user selected one option
    setDisableOption(true);
    //next button will visible
    setNxtDisable(false);

    //checking the condition where the user selected option and correct answer are both same or not?
    if (option === correctAnswer) {
      //dispatching the action and payload according to the condition
      dispatch(
        isAnswered({
          result: {
            correctAns: correctAnswer,
            selectedOption: option,
            questionDescription,
          },
          totalScore: 10,
          categoryName: history.location.pathname.split("/")[2],
        })
      );
    } else {
      dispatch(
        answereIsWrong({
          result: {
            correctAns: correctAnswer,
            selectedOption: option,
            questionDescription,
          },
          totalScore: 0,
          categoryName: history.location.pathname.split("/")[2],
        })
      );
    }
  };

  let intervalId;
  const timerFunc = () => {
    setTimer((prevCounter) => prevCounter - 1);
    if (timer <= 0) {
      console.log("timer`111:", timer);

      clearInterval(intervalId);
      nextHandler();
    }
  };

  useEffect(() => {
    intervalId = setInterval(timerFunc, 1000);

    return () => clearInterval(intervalId);
  }, []);
  // console.log("timer:", timer);
  console.log('quesNum:', quesNum)
  const nextHandler = () => {
    clearInterval(intervalId);
    if(quesNum < 4) {
      setQuesNum(quesNum + 1);
    }

    setDisableOption(false);
    setNxtDisable(true);
    setTimer(15);
  };
  if (timer <= 0 && quesNum==4) {
    console.log("timer`111:", timer);

    clearInterval(intervalId);
    nextHandler();
  }
  const addResultToState = () => {
    dispatch(addResultToProgressArr({ categoryName, totalScore, result }));
  };

  return (
    <div>
      <div>
        <div className={styles.quiz_container}>
          <div className={styles.quiz_header}>
            <div className={styles.quiz_question_count}>
              <span>
                Question: <strong>{quesNum + 1}/5</strong>
              </span>
            </div>
            <div className={styles.quiz_score}>
              <span>
                Timer: <strong>{timer >= 0 ? timer : "00"}</strong>
              </span>
            </div>
          </div>
          <div className={styles.quiz_question}>
            <p>
              <span>{quesNum + 1}.</span>
              <b> {quizCategory.questions[quesNum].question}</b>
            </p>
          </div>
          <div className={styles.quiz_options}>
            {quizCategory.questions[quesNum].options.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() =>
                    optionHandler(
                      item,
                      quizCategory.questions[quesNum].question
                    )
                  }
                  className={`${
                    selected === item ? `${styles.sel_option}` : ""
                  } quiz_option`}
                  disabled={disableOption}
                >
                  {item}
                </button>
              );
            })}
          </div>
          <div className={styles.quiz_footer}>
            {quesNum === 4 ? (
              <button
                className="btn btn-primary"
                disabled={nxtDisable}
                onClick={addResultToState}
              >
                <Link style={LINK_STYLE} to={RESULT_ROUTE}>
                  Result
                </Link>
              </button>
            ) : (
              <button
                className={styles.next}
                disabled={nxtDisable}
                onClick={nextHandler}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
