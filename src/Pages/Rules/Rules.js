import { Link, useParams } from "react-router-dom";

import styles from "./Rules.module.css";

const Rules = () => {
  const { category } = useParams();
  return (
    <div>
      <div className={styles.rules_container}>
        <h2>Rules</h2>
        <ol>
          <li>There are total 5 Questions for each Quiz.</li>
          <li>Once you Select the Option you cannot change your answer.</li>
          <li>
            After selecting option you will see a button below options for going
            to next question.
          </li>
          <li>
            Once you go to next question you cannot jump to previous question.
          </li>
          <li>
            After answering all 5 questions you will reach on the result page
            where you can see your score.
          </li>
        </ol>
        <div className={styles.rules_footer}>
        {/* it will redirect user to category page */}
          <Link
            to="/category"
            className={`btn btn-default ${styles.goback_btn}`}
          >
            Go Back
          </Link>
          {/* when user click start playing button he will redirected to the quiz page user can get all the questions and answers */}
          <Link
            to={`/quiz/${category}`}
            className={`btn btn-default ${styles.startplay_btn}`}
          >
            Start Playing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Rules;
